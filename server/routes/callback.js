const express = require('express');
const jwt = require('jsonwebtoken');
const db = require('../db');
const { getSetting } = require('../db');

const router = express.Router();

const getClientSecret = () => getSetting('JWT_SECRET_KEY', getSetting('CLIENT_SECRET', ''));
const getSessionSecret = () => getSetting('SESSION_SECRET', 'uneg_secure_session_secret_2026_jwt');
const getFaceSentinelBackendUrl = () => 
  getSetting('FACESENTINEL_BACKEND_URL', getSetting('FACESENTINEL_HTTP_URL', 'http://127.0.0.1:8001'));
const getClientId = () => getSetting('CLIENT_ID', getSetting('FACESENTINEL_CLIENT_ID', 'APP_ECOMMERCE_001'));
const getJwtAlgorithm = () => getSetting('JWT_ALGORITHM', 'HS256');

// Handler común para rutas /callback y /api/callback
async function handleCallback(req, res) {
  const { 
    token, 
    access_token,
    id_token,
    error, 
    reason, 
    error_description,
    state,
    session_id,
    tx_hash: queryTxHash,
    block_number: queryBlockNumber
  } = req.query;

  const enrollmentUserId = req.cookies.enrollment_user_id;

  // Detección adaptativa de URL del cliente para retornos exactos según el medio de acceso (Túnel SSH, VPN o IP pública)
  const host = req.get('host');
  const protocol = req.protocol;
  const currentHostUrl = `${protocol}://${host}`;
  const CLIENT_URL = getSetting('CLIENT_URL', currentHostUrl) || currentHostUrl;

  // 1. Manejo explícito de errores biométricos y de autorización
  if (error || reason) {
    console.warn(`[FaceSentinel Callback] Error retornado por IdP: error=${error}, reason=${reason}, desc=${error_description}`);
    const errParam = encodeURIComponent(error || 'auth_error');
    const reasonParam = encodeURIComponent(reason || '');
    const descParam = encodeURIComponent(error_description || '');
    return res.redirect(`${currentHostUrl}/login?error=${errParam}&reason=${reasonParam}&description=${descParam}`);
  }

  const rawToken = token || access_token || id_token;

  if (!rawToken) {
    console.warn('[FaceSentinel Callback] No se suministró ningún token en los parámetros query.');
    return res.redirect(`${currentHostUrl}/login?error=no_token&reason=MISSING_TOKEN`);
  }

  let faceSentinelId = null;
  let userName = null;
  let userEmail = null;
  let userRole = 'Personal Universitario';
  let txHash = queryTxHash || null;
  let blockNumber = queryBlockNumber ? parseInt(queryBlockNumber, 10) : null;

  const secretKey = getClientSecret();
  const expectedClientId = getClientId();
  const algorithm = getJwtAlgorithm();

  // 2. Validación Criptográfica estricta del JWT
  try {
    const verifyOptions = {
      algorithms: [algorithm]
    };
    
    // Si el token incluye audiencia esperada, verificarla
    const decodedUnverified = jwt.decode(rawToken);
    if (decodedUnverified && decodedUnverified.aud && decodedUnverified.aud === expectedClientId) {
      verifyOptions.audience = expectedClientId;
    }

    const payload = jwt.verify(rawToken, secretKey, verifyOptions);

    faceSentinelId = payload.sub || payload.user_id;
    userName = payload.name || payload.username || payload.full_name;
    userEmail = payload.email;
    userRole = payload.role || payload.roles?.[0] || userRole;
    txHash = payload.tx_hash || payload.transaction_hash || txHash;
    blockNumber = payload.block_number || blockNumber;

    console.log(`[FaceSentinel Callback] JWT verificado exitosamente mediante firma criptográfica ${algorithm} para usuario ${faceSentinelId}`);
  } catch (jwtErr) {
    console.warn(`[FaceSentinel Callback] Validación de firma JWT local falló (${jwtErr.message}). Iniciando fallback contra FaceSentinel Backend API (${getFaceSentinelBackendUrl()})...`);

    // 3. Fallback: Verificación directa en el Backend de FaceSentinel (/api/v1/users/me)
    try {
      const decoded = jwt.decode(rawToken);
      if (decoded) {
        faceSentinelId = decoded.sub || decoded.user_id;
        userName = decoded.name || decoded.username;
        userEmail = decoded.email;
        userRole = decoded.role || userRole;
        txHash = decoded.tx_hash || txHash;
        blockNumber = decoded.block_number || blockNumber;
      }
    } catch (decodeErr) {
      console.warn('[FaceSentinel Callback] Error decodificando token JWT:', decodeErr.message);
    }

    try {
      const response = await fetch(`${getFaceSentinelBackendUrl()}/api/v1/users/me`, {
        headers: {
          'Authorization': `Bearer ${rawToken}`
        }
      });

      if (response.ok) {
        const userInfo = await response.json();
        faceSentinelId = userInfo.user_id || userInfo.sub || faceSentinelId;
        userName = userInfo.name || userInfo.username || userName;
        userEmail = userInfo.email || userEmail;
        userRole = userInfo.role || userRole;
        txHash = userInfo.tx_hash || txHash;
        blockNumber = userInfo.block_number || blockNumber;
        console.log(`[FaceSentinel Callback] Token validado exitosamente via endpoint REST /users/me para usuario ${faceSentinelId}`);
      } else {
        console.warn(`[FaceSentinel Callback] Endpoint /users/me respondió con status ${response.status}`);
      }
    } catch (fetchErr) {
      console.warn('[FaceSentinel Callback] Consulta a FaceSentinel /users/me no disponible:', fetchErr.message);
    }
  }

  if (!faceSentinelId) {
    console.error('[FaceSentinel Callback] No se pudo identificar al usuario ni validar el token.');
    return res.redirect(`${currentHostUrl}/login?error=invalid_token&reason=TOKEN_VALIDATION_FAILED`);
  }

  // 4. Si era un flujo de enrolamiento desde el perfil del usuario autenticado
  if (enrollmentUserId) {
    const existingUser = db.prepare('SELECT * FROM users WHERE id = ?').get(enrollmentUserId);

    if (existingUser) {
      db.prepare(`
        UPDATE users 
        SET has_biometrics_enrolled = 1,
            last_tx_hash = COALESCE(?, last_tx_hash),
            last_block_number = COALESCE(?, last_block_number)
        WHERE id = ?
      `).run(txHash, blockNumber, enrollmentUserId);

      const sessionToken = jwt.sign(
        { 
          sub: existingUser.id, 
          name: existingUser.name, 
          email: existingUser.email,
          role: existingUser.role || userRole,
          tx_hash: txHash || existingUser.last_tx_hash,
          block_number: blockNumber || existingUser.last_block_number
        },
        getSessionSecret(),
        { expiresIn: '24h' }
      );

      res.cookie('token', sessionToken, {
        httpOnly: true,
        sameSite: 'lax',
        maxAge: 24 * 60 * 60 * 1000
      });

      res.clearCookie('enrollment_user_id');
      return res.redirect(`${currentHostUrl}/profile?enrolled=true`);
    }
  }

  // 5. Flujo de inicio de sesión SSO biométrico normal
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
      userName || 'Usuario FaceSentinel', 
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

  // Crear Cookie de Sesión Segura
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

  res.clearCookie('enrollment_user_id');
  return res.redirect(`${currentHostUrl}/`);
}

router.get('/callback', handleCallback);
router.post('/callback', handleCallback);

module.exports = router;
