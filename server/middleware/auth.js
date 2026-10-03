const jwt = require('jsonwebtoken');
const { getSetting } = require('../db');

function authMiddleware(req, res, next) {
  const token = req.cookies.token;
  const sessionSecret = getSetting('SESSION_SECRET', process.env.SESSION_SECRET || 'uneg_secure_session_secret_2026_jwt');

  if (!token) {
    return res.status(401).json({ error: 'No autenticado' });
  }

  try {
    const decoded = jwt.verify(token, sessionSecret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(401).json({ error: 'Sesión inválida o expirada' });
  }
}

module.exports = authMiddleware;
