import { useState, useEffect } from 'react';
import api from '../api';
import { UnegLogo } from '../App';

export default function Settings() {
  const [envData, setEnvData] = useState({
    PORT: '3005',
    CLIENT_ID: 'APP_ECOMMERCE_001',
    CLIENT_SECRET: '',
    SESSION_SECRET: '',
    FACESENTINEL_PUBLIC_URL: '',
    FACESENTINEL_BACKEND_URL: 'http://127.0.0.1:8001',
    FACESENTINEL_WS_URL: '',
    REDIRECT_URI: '',
    CLIENT_URL: '',
    JWT_SECRET_KEY: '',
    JWT_ALGORITHM: 'HS256'
  });

  const [filePath, setFilePath] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [statusMsg, setStatusMsg] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');
  const [showSecrets, setShowSecrets] = useState(false);

  useEffect(() => {
    fetchEnv();
  }, []);

  async function fetchEnv() {
    setLoading(true);
    setErrorMsg('');
    try {
      const res = await api.get('/config/env');
      if (res.data?.env) {
        setEnvData(prev => ({ ...prev, ...res.data.env }));
      }
      if (res.data?.filePath) {
        setFilePath(res.data.filePath);
      }
    } catch (err) {
      console.error('Error cargando .env:', err);
      setErrorMsg('No se pudieron leer las variables del archivo .env');
    } finally {
      setLoading(false);
    }
  }

  function handleChange(field, value) {
    setEnvData(prev => ({
      ...prev,
      [field]: value
    }));
  }

  // Preajustes rápidos
  function applyRemotePreset() {
    setEnvData(prev => ({
      ...prev,
      PORT: '3005',
      CLIENT_ID: 'APP_ECOMMERCE_001',
      FACESENTINEL_PUBLIC_URL: 'http://150.188.128.20:8088',
      FACESENTINEL_BACKEND_URL: 'http://150.188.128.20:8001',
      FACESENTINEL_WS_URL: 'ws://150.188.128.20:8088/api/v1/ws/liveness',
      REDIRECT_URI: 'http://150.188.128.20:3005/callback',
      CLIENT_URL: 'http://150.188.128.20:3005',
      JWT_ALGORITHM: 'HS256'
    }));
    setStatusMsg({
      type: 'info',
      text: 'Preajuste Servidor Remoto cargado. Introduce tu JWT_SECRET_KEY y pulsa "Guardar y Aplicar".'
    });
  }

  function applyLocalPreset() {
    setEnvData(prev => ({
      ...prev,
      PORT: '3005',
      CLIENT_ID: 'APP_ECOMMERCE_001',
      FACESENTINEL_PUBLIC_URL: 'http://localhost:8088',
      FACESENTINEL_BACKEND_URL: 'http://localhost:8001',
      FACESENTINEL_WS_URL: 'ws://localhost:8088/api/v1/ws/liveness',
      REDIRECT_URI: 'http://localhost:3005/callback',
      CLIENT_URL: 'http://localhost:3005',
      JWT_ALGORITHM: 'HS256'
    }));
    setStatusMsg({
      type: 'info',
      text: 'Preajuste Localhost cargado. Introduce tu JWT_SECRET_KEY y pulsa "Guardar y Aplicar".'
    });
  }

  async function handleSave(e) {
    e.preventDefault();
    setSaving(true);
    setStatusMsg(null);
    setErrorMsg('');

    try {
      const res = await api.post('/config/env', envData);
      setStatusMsg({
        type: 'success',
        text: res.data?.message || '¡Variables guardadas con éxito en el archivo .env y en tiempo de ejecución!'
      });
      if (res.data?.env) {
        setEnvData(prev => ({ ...prev, ...res.data.env }));
      }
    } catch (err) {
      console.error('Error guardando .env:', err);
      setErrorMsg(err.response?.data?.error || 'Error al escribir en el archivo .env');
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="uneg-settings-container">
      <style>{`
        .uneg-settings-container {
          min-height: calc(100vh - 120px);
          background: #f4f7fb;
          padding: 2.5rem 1.5rem 4rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-settings-wrapper {
          max-width: 920px;
          margin: 0 auto;
        }

        .uneg-settings-head {
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .uneg-settings-pre {
          font-size: 0.74rem;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.2rem;
        }

        .uneg-settings-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.02em;
          margin-bottom: 0.35rem;
        }

        .uneg-settings-desc {
          color: #64748b;
          font-size: 0.92rem;
        }

        .uneg-preset-bar {
          display: flex;
          gap: 0.6rem;
          flex-wrap: wrap;
          margin-bottom: 1.5rem;
        }

        .uneg-btn-preset {
          padding: 0.5rem 0.95rem;
          background: #ffffff;
          border: 1.5px solid #cbd5e1;
          color: #173b6c;
          border-radius: 10px;
          font-size: 0.82rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.45rem;
          transition: all 0.2s;
        }

        .uneg-btn-preset:hover {
          border-color: #2563eb;
          color: #2563eb;
          background: #eff6ff;
          transform: translateY(-1px);
        }

        .uneg-settings-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          padding: 2.2rem;
          box-shadow: 0 10px 30px rgba(15, 39, 68, 0.06);
          position: relative;
        }

        .uneg-card-top-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #0f2744 0%, #2563eb 50%, #f59e0b 100%);
          border-radius: 20px 20px 0 0;
        }

        .uneg-section-group {
          margin-bottom: 2rem;
        }

        .uneg-group-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f2744;
          margin-bottom: 0.3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .uneg-group-sub {
          font-size: 0.8rem;
          color: #64748b;
          margin-bottom: 1.25rem;
        }

        .uneg-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.25rem;
        }

        .uneg-field-full {
          grid-column: 1 / -1;
        }

        .uneg-field-label {
          display: block;
          font-size: 0.82rem;
          font-weight: 700;
          color: #173b6c;
          margin-bottom: 0.35rem;
        }

        .uneg-field-hint {
          font-size: 0.72rem;
          color: #64748b;
          margin-top: 0.25rem;
        }

        .uneg-input-box {
          width: 100%;
          padding: 0.75rem 1rem;
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          color: #0f2744;
          font-size: 0.88rem;
          font-family: monospace;
          transition: all 0.2s ease;
        }

        .uneg-input-box:focus {
          outline: none;
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .uneg-alert {
          padding: 0.95rem 1.25rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          font-size: 0.86rem;
          display: flex;
          align-items: center;
          gap: 0.65rem;
        }

        .alert-success {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          color: #065f46;
        }

        .alert-info {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1e40af;
        }

        .alert-danger {
          background: #fef2f2;
          border: 1px solid #fecaca;
          color: #b91c1c;
        }

        .uneg-actions-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
          padding-top: 1.5rem;
          border-top: 1px solid #e2e8f0;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .uneg-btn-save {
          padding: 0.85rem 1.75rem;
          background: linear-gradient(135deg, #173b6c 0%, #2563eb 100%);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.25);
          transition: all 0.2s;
        }

        .uneg-btn-save:hover:not(:disabled) {
          background: linear-gradient(135deg, #0f2744 0%, #1d4ed8 100%);
          transform: translateY(-2px);
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.35);
        }

        .uneg-btn-save:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .uneg-btn-reload {
          padding: 0.85rem 1.35rem;
          background: #f1f5f9;
          color: #475569;
          border: 1px solid #cbd5e1;
          border-radius: 12px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .uneg-btn-reload:hover {
          background: #e2e8f0;
        }

        @media (max-width: 680px) {
          .uneg-form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="uneg-settings-wrapper">
        <div className="uneg-settings-head">
          <div>
            <p className="uneg-settings-pre">Panel de Configuración y Despliegue</p>
            <h1 className="uneg-settings-title">Variables de Entorno (.env)</h1>
            <p className="uneg-settings-desc">
              Administra los endpoints de <strong>FaceSentinel</strong>, URLs públicas, parámetros OAuth2 y claves JWT.
            </p>
          </div>
        </div>

        {/* Preajustes rápidos */}
        <div className="uneg-preset-bar">
          <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 700, alignSelf: 'center', marginRight: '0.25rem' }}>
            Preajustes Rápidos:
          </span>
          <button type="button" onClick={applyRemotePreset} className="uneg-btn-preset">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
              <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
              <line x1="6" y1="6" x2="6.01" y2="6" />
              <line x1="6" y1="18" x2="6.01" y2="18" />
            </svg>
            Servidor Remoto (:8088 / :8001)
          </button>
          <button type="button" onClick={applyLocalPreset} className="uneg-btn-preset">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
            Entorno Local (localhost)
          </button>
        </div>

        {statusMsg && (
          <div className={`uneg-alert alert-${statusMsg.type}`}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
              <polyline points="22 4 12 14.01 9 11.01" />
            </svg>
            <span>{statusMsg.text}</span>
          </div>
        )}

        {errorMsg && (
          <div className="uneg-alert alert-danger">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{errorMsg}</span>
          </div>
        )}

        <form onSubmit={handleSave} className="uneg-settings-card">
          <div className="uneg-card-top-line"></div>

          {/* Grupo 1: Integración con FaceSentinel IdP */}
          <div className="uneg-section-group">
            <div className="uneg-group-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
                <path d="M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z" />
                <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
                <path d="M16 8a4 4 0 0 1-8 0" />
                <path d="M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5" />
              </svg>
              Conexión con FaceSentinel (IdP Biométrico)
            </div>
            <p className="uneg-group-sub">
              Configura los endpoints de Frontend, Backend REST y WebSockets de FaceSentinel.
            </p>

            <div className="uneg-form-grid">
              <div>
                <label className="uneg-field-label">FACESENTINEL_PUBLIC_URL</label>
                <input
                  type="text"
                  value={envData.FACESENTINEL_PUBLIC_URL || ''}
                  onChange={e => handleChange('FACESENTINEL_PUBLIC_URL', e.target.value)}
                  className="uneg-input-box"
                  placeholder="http://150.188.128.20:8088"
                  required
                />
                <p className="uneg-field-hint">URL pública del Frontend donde se redirige para la captura facial (:8088).</p>
              </div>

              <div>
                <label className="uneg-field-label">FACESENTINEL_BACKEND_URL</label>
                <input
                  type="text"
                  value={envData.FACESENTINEL_BACKEND_URL || ''}
                  onChange={e => handleChange('FACESENTINEL_BACKEND_URL', e.target.value)}
                  className="uneg-input-box"
                  placeholder="http://150.188.128.20:8001"
                  required
                />
                <p className="uneg-field-hint">URL del Backend FastAPI para validación de tokens y endpoints REST (:8001).</p>
              </div>

              <div className="uneg-field-full">
                <label className="uneg-field-label">FACESENTINEL_WS_URL</label>
                <input
                  type="text"
                  value={envData.FACESENTINEL_WS_URL || ''}
                  onChange={e => handleChange('FACESENTINEL_WS_URL', e.target.value)}
                  className="uneg-input-box"
                  placeholder="ws://150.188.128.20:8088/api/v1/ws/liveness"
                  required
                />
                <p className="uneg-field-hint">Endpoint WebSocket para detección de liveness en tiempo real.</p>
              </div>
            </div>
          </div>

          {/* Grupo 2: Parámetros OAuth2 y Cliente */}
          <div className="uneg-section-group">
            <div className="uneg-group-title">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
              Identidad OAuth2 y Redirección del Cliente
            </div>
            <p className="uneg-group-sub">
              Credenciales registradas de esta aplicación cliente en FaceSentinel.
            </p>

            <div className="uneg-form-grid">
              <div>
                <label className="uneg-field-label">CLIENT_ID</label>
                <input
                  type="text"
                  value={envData.CLIENT_ID || ''}
                  onChange={e => handleChange('CLIENT_ID', e.target.value)}
                  className="uneg-input-box"
                  placeholder="APP_ECOMMERCE_001"
                  required
                />
                <p className="uneg-field-hint">Identificador público único registrado en FaceSentinel.</p>
              </div>

              <div>
                <label className="uneg-field-label">REDIRECT_URI</label>
                <input
                  type="text"
                  value={envData.REDIRECT_URI || ''}
                  onChange={e => handleChange('REDIRECT_URI', e.target.value)}
                  className="uneg-input-box"
                  placeholder="http://150.188.128.20:3005/callback"
                  required
                />
                <p className="uneg-field-hint">URI exacta de retorno autorizada en FaceSentinel.</p>
              </div>

              <div>
                <label className="uneg-field-label">PORT</label>
                <input
                  type="number"
                  value={envData.PORT || '3005'}
                  onChange={e => handleChange('PORT', e.target.value)}
                  className="uneg-input-box"
                  placeholder="3005"
                  required
                />
                <p className="uneg-field-hint">Puerto TCP de escucha del servidor cliente (:3005).</p>
              </div>

              <div>
                <label className="uneg-field-label">CLIENT_URL</label>
                <input
                  type="text"
                  value={envData.CLIENT_URL || ''}
                  onChange={e => handleChange('CLIENT_URL', e.target.value)}
                  className="uneg-input-box"
                  placeholder="http://150.188.128.20:3005"
                  required
                />
                <p className="uneg-field-hint">URL base de este cliente en la red.</p>
              </div>
            </div>
          </div>

          {/* Grupo 3: Claves y Criptografía JWT */}
          <div className="uneg-section-group">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.3rem' }}>
              <div className="uneg-group-title" style={{ margin: 0 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                Claves Secretas y Firma Criptográfica (JWT)
              </div>
              <button
                type="button"
                onClick={() => setShowSecrets(!showSecrets)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#2563eb',
                  fontSize: '0.78rem',
                  fontWeight: 700,
                  cursor: 'pointer'
                }}
              >
                {showSecrets ? '🙈 Ocultar Claves' : '👁️ Mostrar Claves'}
              </button>
            </div>
            <p className="uneg-group-sub">
              Clave simétrica compartida del IdP para verificar firmas de los tokens JWT emitidos.
            </p>

            <div className="uneg-form-grid">
              <div className="uneg-field-full">
                <label className="uneg-field-label">JWT_SECRET_KEY (Clave de firma del IdP)</label>
                <input
                  type={showSecrets ? 'text' : 'password'}
                  value={envData.JWT_SECRET_KEY || ''}
                  onChange={e => handleChange('JWT_SECRET_KEY', e.target.value)}
                  className="uneg-input-box"
                  placeholder="tu_jwt_secret_key_hex_64_caracteres"
                  required
                />
                <p className="uneg-field-hint">Clave simétrica con la que FaceSentinel firma los tokens JWT.</p>
              </div>

              <div>
                <label className="uneg-field-label">JWT_ALGORITHM</label>
                <input
                  type="text"
                  value={envData.JWT_ALGORITHM || 'HS256'}
                  onChange={e => handleChange('JWT_ALGORITHM', e.target.value)}
                  className="uneg-input-box"
                  placeholder="HS256"
                  required
                />
                <p className="uneg-field-hint">Algoritmo de firma esperado (ej. HS256).</p>
              </div>

              <div>
                <label className="uneg-field-label">CLIENT_SECRET</label>
                <input
                  type={showSecrets ? 'text' : 'password'}
                  value={envData.CLIENT_SECRET || ''}
                  onChange={e => handleChange('CLIENT_SECRET', e.target.value)}
                  className="uneg-input-box"
                  placeholder="tu_client_secret_aqui"
                />
                <p className="uneg-field-hint">Secreto OAuth2 de cliente si aplica intercambio directo backend-to-backend.</p>
              </div>

              <div className="uneg-field-full">
                <label className="uneg-field-label">SESSION_SECRET</label>
                <input
                  type={showSecrets ? 'text' : 'password'}
                  value={envData.SESSION_SECRET || ''}
                  onChange={e => handleChange('SESSION_SECRET', e.target.value)}
                  className="uneg-input-box"
                  placeholder="uneg_secure_session_secret_2026_jwt"
                  required
                />
                <p className="uneg-field-hint">Secreto local para firmar las cookies HTTP-Only de sesión.</p>
              </div>
            </div>
          </div>

          {/* Pie con Acciones */}
          <div className="uneg-actions-footer">
            <button
              type="button"
              onClick={fetchEnv}
              disabled={loading || saving}
              className="uneg-btn-reload"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
              </svg>
              Recargar Valores
            </button>

            <button
              type="submit"
              disabled={saving}
              className="uneg-btn-save"
            >
              {saving ? (
                'Guardando en .env...'
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                    <polyline points="17 21 17 13 7 13 7 21" />
                    <polyline points="7 3 7 8 15 8" />
                  </svg>
                  Guardar y Aplicar en .env
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
