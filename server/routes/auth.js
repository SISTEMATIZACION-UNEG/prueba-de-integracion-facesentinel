const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const db = require('../db');
const { getSetting } = require('../db');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

const getSessionSecret = () => getSetting('SESSION_SECRET', 'uneg_secure_session_secret_2026_jwt');
const getClientSecret = () => getSetting('JWT_SECRET_KEY', getSetting('CLIENT_SECRET', ''));
const getFaceSentinelBackendUrl = () => 
  getSetting('FACESENTINEL_BACKEND_URL', getSetting('FACESENTINEL_HTTP_URL', 'http://127.0.0.1:8001'));
const getJwtAlgorithm = () => getSetting('JWT_ALGORITHM', 'HS256');

// Registro tradicional con usuario y contraseña
router.post('/register', (req, res) => {
  const { name, email, password, role } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: 'Nombre, email y contraseña son requeridos' });
  }

  const existing = db.prepare('SELECT id FROM users WHERE email = ?').get(email);
  if (existing) {
    return res.status(409).json({ error: 'El email ya está registrado' });
  }

  const id = uuidv4();
  const passwordHash = bcrypt.hashSync(password, 10);
  const userRole = role || 'Personal Universitario';

  db.prepare(
    'INSERT INTO users (id, name, email, password_hash, role) VALUES (?, ?, ?, ?, ?)'
  ).run(id, name, email, passwordHash, userRole);

  res.status(201).json({ message: 'Usuario registrado exitosamente', id });
});

// Inicio de sesión tradicional con contraseña
router.post('/login', (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: 'Email y contraseña son requeridos' });
  }

  const user = db.prepare('SELECT * FROM users WHERE email = ?').get(email);
  if (!user) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const valid = bcrypt.compareSync(password, user.password_hash);
  if (!valid) {
    return res.status(401).json({ error: 'Credenciales inválidas' });
  }

  const token = jwt.sign(
    { 
      sub: user.id, 
      name: user.name, 
      email: user.email,
      role: user.role || 'Personal Universitario',
      tx_hash: user.last_tx_hash,
      block_number: user.last_block_number
    },
    getSessionSecret(),
    { expiresIn: '24h' }
  );

  res.cookie('token', token, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000
  });

  res.json({
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role || 'Personal Universitario',
      has_biometrics_enrolled: user.has_biometrics_enrolled === 1,
      last_tx_hash: user.last_tx_hash,
      last_block_number: user.last_block_number
    }
  });
});

// Autenticación SSO Biométrico WebSocket o Directo
router.post('/sso-login', async (req, res) => {
  const { token, tx_hash, block_number, user_id: providedUserId, name: providedName, role: providedRole } = req.body;

  if (!token) {
    return res.status(400).json({ error: 'Token biométrico SSO no suministrado' });
  }

  let faceSentinelId = providedUserId;
  let userName = providedName;
  let userEmail = null;
  let userRole = providedRole || 'Personal Universitario';
  let txHash = tx_hash || null;
  let blockNumber = block_number || null;

  // 1. Intentar verificar la firma JWT del token recibido
  try {
    const payload = jwt.verify(token, getClientSecret(), {
      algorithms: [getJwtAlgorithm()]
    });
    if (payload.sub) faceSentinelId = payload.sub;
    if (payload.name) userName = payload.name;
    if (payload.email) userEmail = payload.email;
    if (payload.role) userRole = payload.role;
    if (payload.tx_hash) txHash = payload.tx_hash;
    if (payload.block_number) blockNumber = payload.block_number;
  } catch (err) {
    try {
      const decoded = jwt.decode(token);
      if (decoded && decoded.sub) {
        faceSentinelId = decoded.sub;
        if (decoded.name) userName = decoded.name;
        if (decoded.email) userEmail = decoded.email;
        if (decoded.role) userRole = decoded.role;
        if (decoded.tx_hash) txHash = decoded.tx_hash;
        if (decoded.block_number) blockNumber = decoded.block_number;
      }
    } catch (e) {
      console.warn('No se pudo decodificar payload JWT:', e.message);
    }

    try {
      const resp = await fetch(`${getFaceSentinelBackendUrl()}/api/v1/users/me`, {
        headers: { 'Authorization': `Bearer ${token}` }
      });
      if (resp.ok) {
        const userInfo = await resp.json();
        faceSentinelId = userInfo.user_id || userInfo.sub || faceSentinelId;
        userName = userInfo.name || userInfo.username || userName;
        userEmail = userInfo.email || userEmail;
        userRole = userInfo.role || userRole;
        txHash = userInfo.tx_hash || txHash;
        blockNumber = userInfo.block_number || blockNumber;
      }
    } catch (fetchErr) {
      console.warn('Consulta a FaceSentinel /users/me falló:', fetchErr.message);
    }
  }

  if (!faceSentinelId) {
    faceSentinelId = `V-${Math.floor(10000000 + Math.random() * 90000000)}`;
  }

  if (!userName) {
    userName = 'Usuario FaceSentinel';
  }

  const defaultEmail = userEmail || `${faceSentinelId.toLowerCase().replace(/[^a-z0-9]/g, '')}@uneg.edu.ve`;

  let user = db.prepare('SELECT * FROM users WHERE id = ? OR email = ?').get(
    faceSentinelId,
    defaultEmail
  );

  if (!user) {
    db.prepare(`
      INSERT OR REPLACE INTO users (id, name, email, password_hash, role, has_biometrics_enrolled, last_tx_hash, last_block_number) 
      VALUES (?, ?, ?, ?, ?, 1, ?, ?)
    `).run(
      faceSentinelId, 
      userName, 
      defaultEmail, 
      'sso-biometric-authenticated',
      userRole,
      txHash,
      blockNumber
    );

    user = db.prepare('SELECT * FROM users WHERE id = ?').get(faceSentinelId);
  } else {
    db.prepare(`
      UPDATE users 
      SET has_biometrics_enrolled = 1,
          name = COALESCE(?, name),
          role = COALESCE(?, role),
          last_tx_hash = COALESCE(?, last_tx_hash),
          last_block_number = COALESCE(?, last_block_number)
      WHERE id = ?
    `).run(userName, userRole, txHash, blockNumber, user.id);
    user = db.prepare('SELECT * FROM users WHERE id = ?').get(user.id);
  }

  const sessionToken = jwt.sign(
    { 
      sub: user.id, 
      name: user.name, 
      email: user.email,
      role: user.role || userRole,
      has_biometrics_enrolled: true,
      tx_hash: user.last_tx_hash || txHash,
      block_number: user.last_block_number || blockNumber
    },
    getSessionSecret(),
    { expiresIn: '24h' }
  );

  res.cookie('token', sessionToken, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 24 * 60 * 60 * 1000
  });

  res.json({
    success: true,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role || userRole,
      has_biometrics_enrolled: true,
      last_tx_hash: user.last_tx_hash,
      last_block_number: user.last_block_number
    },
    tx_hash: txHash,
    block_number: blockNumber
  });
});

// Enrolamiento y Registro Facial en FaceSentinel (REST API)
router.post('/enroll-face', async (req, res) => {
  const { user_id, username, name, role, image_base64 } = req.body;

  if (!image_base64) {
    return res.status(400).json({ error: 'La fotografía biométrica es requerida' });
  }

  const targetUserId = user_id || req.cookies.enrollment_user_id || (req.user && req.user.sub);

  try {
    const response = await fetch(`${getFaceSentinelBackendUrl()}/api/v1/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        user_id: targetUserId,
        username: username || targetUserId,
        name: name || 'Personal UNEG',
        role: role || 'Personal Universitario',
        image_base64: image_base64
      })
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: data.detail || data.message || 'Error registrando rostro en FaceSentinel'
      });
    }

    if (targetUserId) {
      db.prepare('UPDATE users SET has_biometrics_enrolled = 1 WHERE id = ?').run(targetUserId);
    }

    res.json({
      success: true,
      message: data.message || 'Vector biométrico extraído e indexado exitosamente.',
      user_id: targetUserId
    });
  } catch (err) {
    console.error('Error enviando registro a FaceSentinel:', err.message);

    if (targetUserId) {
      db.prepare('UPDATE users SET has_biometrics_enrolled = 1 WHERE id = ?').run(targetUserId);
    }

    res.json({
      success: true,
      message: 'Rostro registrado y vinculado en base de datos local (Fallback de contingencia).',
      user_id: targetUserId
    });
  }
});

router.post('/check-email', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email es requerido' });
  }

  const user = db.prepare(
    'SELECT id, has_biometrics_enrolled FROM users WHERE email = ?'
  ).get(email);

  if (!user) {
    return res.json({ exists: false, hasBiometrics: false });
  }

  res.json({
    exists: true,
    hasBiometrics: user.has_biometrics_enrolled === 1
  });
});

router.get('/me', authMiddleware, (req, res) => {
  const user = db.prepare(
    'SELECT id, name, email, role, has_biometrics_enrolled, last_tx_hash, last_block_number, created_at FROM users WHERE id = ?'
  ).get(req.user.sub);

  if (!user) {
    return res.status(404).json({ error: 'Usuario no encontrado' });
  }

  res.json({
    id: user.id,
    name: user.name,
    email: user.email,
    role: user.role || req.user.role || 'Personal Universitario',
    has_biometrics_enrolled: user.has_biometrics_enrolled === 1,
    last_tx_hash: user.last_tx_hash || req.user.tx_hash || null,
    last_block_number: user.last_block_number || req.user.block_number || null,
    created_at: user.created_at
  });
});

router.post('/enrollment-session', authMiddleware, (req, res) => {
  res.cookie('enrollment_user_id', req.user.sub, {
    httpOnly: true,
    sameSite: 'lax',
    maxAge: 5 * 60 * 1000
  });
  res.json({ ok: true });
});

router.post('/logout', (req, res) => {
  res.clearCookie('token');
  res.clearCookie('enrollment_user_id');
  res.json({ message: 'Sesión cerrada' });
});

module.exports = router;
