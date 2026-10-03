const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Soporte para volumen persistente /app/data o carpeta local
const dataDir = process.env.DATA_DIR || path.join(__dirname, '..', 'data');
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

const dbPath = path.join(dataDir, 'data.db');
const db = new Database(dbPath);

db.pragma('journal_mode = WAL');

// 1. Tabla de usuarios locales con soporte para metadatos blockchain
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    role TEXT DEFAULT 'Personal Universitario',
    has_biometrics_enrolled INTEGER DEFAULT 0,
    last_tx_hash TEXT,
    last_block_number INTEGER,
    created_at TEXT DEFAULT (datetime('now'))
  )
`);

// 2. Tabla de configuración dinámica en caliente (prioridad sobre .env sin reiniciar Docker)
db.exec(`
  CREATE TABLE IF NOT EXISTS app_settings (
    key TEXT PRIMARY KEY,
    value TEXT NOT NULL
  )
`);

// Migración suave en caso de que la tabla users exista con esquema anterior
try {
  const tableInfo = db.prepare("PRAGMA table_info(users)").all();
  const columnNames = tableInfo.map(c => c.name);

  if (!columnNames.includes('role')) {
    db.exec("ALTER TABLE users ADD COLUMN role TEXT DEFAULT 'Personal Universitario'");
  }
  if (!columnNames.includes('last_tx_hash')) {
    db.exec("ALTER TABLE users ADD COLUMN last_tx_hash TEXT");
  }
  if (!columnNames.includes('last_block_number')) {
    db.exec("ALTER TABLE users ADD COLUMN last_block_number INTEGER");
  }
} catch (e) {
  console.warn('Verificación de esquema SQLite:', e.message);
}

// Función helper de lectura con jerarquía: SQLite > process.env > defaultValue
function getSetting(key, defaultValue = '') {
  try {
    const row = db.prepare('SELECT value FROM app_settings WHERE key = ?').get(key);
    if (row && row.value !== undefined && row.value !== null && row.value !== '') {
      return row.value;
    }
  } catch (err) {
    // Si la tabla no estuviera disponible, continuar con env
  }
  return process.env[key] !== undefined && process.env[key] !== '' ? process.env[key] : defaultValue;
}

// Función helper para persistir configuración en SQLite
function setSetting(key, value) {
  if (value === undefined || value === null) return;
  db.prepare(`
    INSERT INTO app_settings (key, value)
    VALUES (?, ?)
    ON CONFLICT(key) DO UPDATE SET value = excluded.value
  `).run(key, String(value));
  process.env[key] = String(value);
}

module.exports = db;
module.exports.getSetting = getSetting;
module.exports.setSetting = setSetting;
