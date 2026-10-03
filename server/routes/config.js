const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('../db');
const { getSetting, setSetting } = require('../db');

const router = express.Router();
const envFilePath = path.join(__dirname, '..', '..', '.env');

// Función auxiliar para leer variables del archivo .env
function readEnvFile() {
  try {
    if (fs.existsSync(envFilePath)) {
      const content = fs.readFileSync(envFilePath, 'utf8');
      const lines = content.split('\n');
      const envObj = {};
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#') && trimmed.includes('=')) {
          const idx = trimmed.indexOf('=');
          const key = trimmed.slice(0, idx).trim();
          const value = trimmed.slice(idx + 1).trim();
          envObj[key] = value;
        }
      }
      return envObj;
    }
  } catch (err) {
    console.error('Error leyendo archivo .env:', err);
  }
  return {};
}

// Función auxiliar para guardar variables en .env y en SQLite
function writeEnvFile(envData) {
  const currentEnv = readEnvFile();
  const merged = { ...currentEnv, ...envData };

  // Guardar en SQLite en caliente
  for (const [key, val] of Object.entries(merged)) {
    if (val !== undefined && val !== null) {
      setSetting(key, val);
    }
  }

  const lines = [];
  lines.push('# ==============================================================================');
  lines.push('# Archivo de Configuración FaceSentinel Integration Client (.env)');
  lines.push('# Actualizado dinámicamente desde el Panel de Control Web');
  lines.push('# ==============================================================================');
  lines.push('');

  for (const [key, val] of Object.entries(merged)) {
    if (val !== undefined && val !== null) {
      lines.push(`${key}=${val}`);
    }
  }
  lines.push('');

  try {
    fs.writeFileSync(envFilePath, lines.join('\n'), 'utf8');
  } catch (e) {
    console.warn('No se pudo escribir directamente en .env, persistido en SQLite:', e.message);
  }
  return merged;
}

// 1. Obtener configuración pública para el frontend
router.get('/config', (req, res) => {
  const host = req.get('host') || 'localhost:3005';
  const hostname = req.hostname || 'localhost';
  const protocol = req.protocol || 'http';

  const defaultPublicUrl = `${protocol}://${hostname}:8088`;
  const defaultBackendUrl = 'http://127.0.0.1:8001';
  const defaultClientUrl = `${protocol}://${host}`;
  const defaultRedirectUri = `${defaultClientUrl}/callback`;

  res.json({
    PORT: getSetting('PORT', '3005'),
    FACESENTINEL_PUBLIC_URL: getSetting('FACESENTINEL_PUBLIC_URL', defaultPublicUrl),
    FACESENTINEL_FRONTEND_URL: getSetting('FACESENTINEL_FRONTEND_URL', defaultPublicUrl),
    FACESENTINEL_BACKEND_URL: getSetting('FACESENTINEL_BACKEND_URL', defaultBackendUrl),
    FACESENTINEL_HTTP_URL: getSetting('FACESENTINEL_HTTP_URL', defaultBackendUrl),
    FACESENTINEL_WS_URL: getSetting('FACESENTINEL_WS_URL', `ws://${hostname}:8088/api/v1/ws/liveness`),
    CLIENT_ID: getSetting('CLIENT_ID', 'APP_ECOMMERCE_001'),
    FACESENTINEL_CLIENT_ID: getSetting('FACESENTINEL_CLIENT_ID', 'APP_ECOMMERCE_001'),
    REDIRECT_URI: getSetting('REDIRECT_URI', defaultRedirectUri),
    CLIENT_URL: getSetting('CLIENT_URL', defaultClientUrl)
  });
});

// 2. Obtener todas las variables del archivo .env y SQLite
router.get('/config/env', (req, res) => {
  const host = req.get('host') || 'localhost:3005';
  const hostname = req.hostname || 'localhost';
  const protocol = req.protocol || 'http';

  const fullEnv = {
    PORT: getSetting('PORT', '3005'),
    CLIENT_ID: getSetting('CLIENT_ID', 'APP_ECOMMERCE_001'),
    CLIENT_SECRET: getSetting('CLIENT_SECRET', ''),
    SESSION_SECRET: getSetting('SESSION_SECRET', ''),
    FACESENTINEL_PUBLIC_URL: getSetting('FACESENTINEL_PUBLIC_URL', `${protocol}://${hostname}:8088`),
    FACESENTINEL_BACKEND_URL: getSetting('FACESENTINEL_BACKEND_URL', 'http://127.0.0.1:8001'),
    FACESENTINEL_WS_URL: getSetting('FACESENTINEL_WS_URL', `ws://${hostname}:8088/api/v1/ws/liveness`),
    REDIRECT_URI: getSetting('REDIRECT_URI', `${protocol}://${host}/callback`),
    CLIENT_URL: getSetting('CLIENT_URL', `${protocol}://${host}`),
    JWT_SECRET_KEY: getSetting('JWT_SECRET_KEY', ''),
    JWT_ALGORITHM: getSetting('JWT_ALGORITHM', 'HS256')
  };

  res.json({
    success: true,
    env: fullEnv,
    filePath: envFilePath
  });
});

// 3. Guardar cambios en SQLite y .env en tiempo de ejecución
router.post('/config/env', (req, res) => {
  const envData = req.body;

  if (!envData || typeof envData !== 'object') {
    return res.status(400).json({ error: 'Datos de configuración inválidos' });
  }

  try {
    const updated = writeEnvFile(envData);
    res.json({
      success: true,
      message: 'Variables de configuración persistidas en SQLite y en memoria en tiempo de ejecución (sin necesidad de reiniciar Docker).',
      env: updated
    });
  } catch (err) {
    console.error('Error guardando configuración:', err);
    res.status(500).json({ error: `Error guardando configuración: ${err.message}` });
  }
});

module.exports = router;
