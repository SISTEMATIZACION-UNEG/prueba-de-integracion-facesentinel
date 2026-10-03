import { useState, useEffect } from 'react';
import { useNavigate, Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import api from '../api';
import { UnegLogo } from '../App';

// Generador de UUID criptográfico para CSRF state y session_id
function generateUUID() {
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    const r = Math.random() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// Diccionario de mensajes amigables para errores biométricos y OAuth2
function getErrorMessage(error, reason, description) {
  if (!error && !reason) return '';

  const r = (reason || '').toUpperCase();
  const e = (error || '').toLowerCase();

  if (r === 'LIVENESS_FAILED' || e.includes('liveness')) {
    return 'Prueba de vida facial no superada. Asegúrese de una iluminación adecuada y mire de frente a la cámara.';
  }
  if (r === 'NO_FACE_MATCH' || r === 'FACE_NOT_RECOGNIZED' || e.includes('face_not_recognized')) {
    return 'Rostro no reconocido. El vector biométrico no coincide con ningún usuario registrado en FaceSentinel.';
  }
  if (r === 'SPOOF_DETECTED' || e.includes('spoof')) {
    return 'Alerta de Seguridad: Posible intento de suplantación facial detectado por el modelo de IA.';
  }
  if (r === 'USER_NOT_FOUND' || e.includes('user_not_found')) {
    return 'Usuario no encontrado en el padrón biométrico institucional.';
  }
  if (r === 'TIMEOUT' || e.includes('timeout')) {
    return 'Tiempo de espera agotado durante la verificación biométrica. Intente nuevamente.';
  }
  if (r === 'TOKEN_VALIDATION_FAILED' || e === 'invalid_token') {
    return 'Token biométrico inválido o no verificado por la entidad de certificación.';
  }
  if (r === 'MISSING_TOKEN' || e === 'no_token') {
    return 'No se recibió la credencial de autenticación desde el servidor FaceSentinel.';
  }
  if (e === 'access_denied') {
    return 'Acceso biométrico cancelado o denegado por el servidor.';
  }

  if (description) {
    return decodeURIComponent(description);
  }

  return `Error de autenticación biométrica: ${reason || error}`;
}

export default function Login() {
  const [searchParams] = useSearchParams();
  const errorParam = searchParams.get('error');
  const reasonParam = searchParams.get('reason');
  const descParam = searchParams.get('description');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(() => getErrorMessage(errorParam, reasonParam, descParam));
  const [loading, setLoading] = useState(false);
  const [hasBiometrics, setHasBiometrics] = useState(false);
  const [config, setConfig] = useState({
    CLIENT_ID: 'APP_ECOMMERCE_001',
    FACESENTINEL_PUBLIC_URL: '',
    REDIRECT_URI: ''
  });

  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/config').then(res => {
      if (res.data) {
        setConfig(prev => ({
          ...prev,
          CLIENT_ID: res.data.CLIENT_ID || res.data.FACESENTINEL_CLIENT_ID || prev.CLIENT_ID,
          FACESENTINEL_PUBLIC_URL: res.data.FACESENTINEL_PUBLIC_URL || '',
          REDIRECT_URI: res.data.REDIRECT_URI || ''
        }));
      }
    }).catch(() => {});
  }, []);

  async function handleEmailBlur() {
    if (!email) return;

    try {
      const res = await api.post('/check-email', { email });
      setHasBiometrics(res.data.exists && res.data.hasBiometrics);
    } catch {
      setHasBiometrics(false);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.response?.data?.error || 'Credenciales inválidas. Verifique su correo y contraseña.');
    } finally {
      setLoading(false);
    }
  }

  // Redirección Adaptativa Inteligente (Túnel SSH, LAN/VPN o IP Externa)
  function handleBiometricLogin() {
    const sessionId = generateUUID();
    const state = generateUUID();

    sessionStorage.setItem('auth_session_id', sessionId);
    sessionStorage.setItem('oauth_state', state);

    // 1. Detectar cómo está accediendo el usuario al cliente
    const currentHost = window.location.hostname; // 'localhost', '10.25.101.20', '150.188.128.20'
    const currentPort = window.location.port;
    const protocol = window.location.protocol;

    // 2. Determinar la URL pública de FaceSentinel Frontend (:8088) adaptativa
    let facesentinelBase = config.FACESENTINEL_PUBLIC_URL ? config.FACESENTINEL_PUBLIC_URL.replace(/\/+$/, '') : '';
    if (!facesentinelBase || facesentinelBase.includes('localhost') || facesentinelBase.includes('150.188.128.20') || facesentinelBase.includes('10.25.101.20')) {
      // Usar dinámicamente el mismo host que el usuario tiene en la barra de direcciones
      facesentinelBase = `${protocol}//${currentHost}:8088`;
    }

    // 3. Determinar Callback exacto accesible desde el navegador del usuario (:3005)
    const clientOrigin = `${protocol}//${currentHost}${currentPort ? ':' + currentPort : ''}`;
    const redirectUri = `${clientOrigin}/callback`;

    const clientId = config.CLIENT_ID || 'APP_ECOMMERCE_001';
    const targetUrl = `${facesentinelBase}/login?client_id=${encodeURIComponent(clientId)}&redirect_uri=${encodeURIComponent(redirectUri)}&session_id=${encodeURIComponent(sessionId)}&state=${encodeURIComponent(state)}`;

    console.log('[FaceSentinel SSO] Host detectado:', currentHost);
    console.log('[FaceSentinel SSO] Target Redirection:', targetUrl);

    window.location.href = targetUrl;
  }

  return (
    <div className="uneg-login-container">
      <style>{`
        .uneg-login-container {
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, #e0edfd 0%, #f4f7fb 90%);
          padding: 2.5rem 1.25rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-login-card {
          width: 100%;
          max-width: 480px;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 20px;
          padding: 2.5rem 2.25rem;
          box-shadow: 0 12px 35px -6px rgba(15, 39, 68, 0.12), 0 4px 12px rgba(15, 39, 68, 0.05);
          position: relative;
          overflow: hidden;
        }

        .uneg-card-accent-line {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 5px;
          background: linear-gradient(90deg, #0f2744 0%, #173b6c 35%, #2563eb 70%, #f59e0b 100%);
        }

        .uneg-auth-header {
          text-align: center;
          margin-bottom: 1.8rem;
        }

        .uneg-auth-emblem {
          display: flex;
          justify-content: center;
          margin-bottom: 1rem;
        }

        .uneg-inst-pretitle {
          font-size: 0.7rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #64748b;
          margin-bottom: 0.25rem;
        }

        .uneg-inst-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.02em;
          line-height: 1.25;
          margin-bottom: 0.4rem;
        }

        .uneg-inst-subtitle {
          font-size: 0.88rem;
          color: #2563eb;
          font-weight: 600;
        }

        .uneg-alert-danger {
          background: #fef2f2;
          border: 1.5px solid #fca5a5;
          color: #991b1b;
          padding: 0.9rem 1.1rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          line-height: 1.45;
          animation: shake 0.35s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

        .uneg-biometric-panel {
          background: linear-gradient(135deg, #f0f7ff 0%, #e0edfd 100%);
          border: 1.5px solid #bfdbfe;
          border-radius: 16px;
          padding: 1.4rem;
          text-align: center;
          margin-bottom: 1.6rem;
          position: relative;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.06);
        }

        .uneg-biometric-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          background: #ffffff;
          color: #1d4ed8;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.65rem;
          border-radius: 999px;
          border: 1px solid #bfdbfe;
          margin-bottom: 0.65rem;
        }

        .uneg-biometric-heading {
          font-size: 1.05rem;
          font-weight: 700;
          color: #0f2744;
          margin-bottom: 0.3rem;
        }

        .uneg-biometric-desc {
          font-size: 0.82rem;
          color: #334e68;
          margin-bottom: 1rem;
          line-height: 1.4;
        }

        .uneg-btn-face {
          width: 100%;
          padding: 0.88rem 1.2rem;
          background: linear-gradient(135deg, #173b6c 0%, #2563eb 100%);
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.65rem;
          transition: all 0.25s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.28);
        }

        .uneg-btn-face:hover {
          background: linear-gradient(135deg, #0f2744 0%, #1d4ed8 100%);
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 99, 235, 0.35);
        }

        .uneg-btn-face:active {
          transform: translateY(0);
        }

        .uneg-divider-line {
          display: flex;
          align-items: center;
          text-align: center;
          margin: 1.4rem 0;
          color: #94a3b8;
          font-size: 0.74rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 700;
        }

        .uneg-divider-line::before, .uneg-divider-line::after {
          content: '';
          flex: 1;
          border-bottom: 1px solid #e2e8f0;
        }

        .uneg-divider-line::before { margin-right: 0.9em; }
        .uneg-divider-line::after { margin-left: 0.9em; }

        .uneg-form-group {
          margin-bottom: 1.15rem;
          text-align: left;
        }

        .uneg-label {
          display: block;
          font-size: 0.84rem;
          font-weight: 700;
          margin-bottom: 0.4rem;
          color: #173b6c;
        }

        .uneg-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }

        .uneg-input-icon {
          position: absolute;
          left: 1rem;
          color: #64748b;
          pointer-events: none;
          display: flex;
        }

        .uneg-input {
          width: 100%;
          padding: 0.78rem 1rem 0.78rem 2.6rem;
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          color: #0f2744;
          font-size: 0.92rem;
          transition: all 0.2s ease;
        }

        .uneg-input:focus {
          outline: none;
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3.5px rgba(37, 99, 235, 0.15);
        }

        .uneg-toggle-btn {
          position: absolute;
          right: 0.85rem;
          background: none;
          border: none;
          color: #64748b;
          cursor: pointer;
          padding: 0.25rem;
          display: flex;
        }

        .uneg-toggle-btn:hover {
          color: #1e3a8a;
        }

        .uneg-biometric-detected {
          background: #ecfdf5;
          border: 1px solid #a7f3d0;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          font-size: 0.82rem;
          color: #065f46;
          margin-bottom: 1.1rem;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 0.55rem;
        }

        .uneg-btn-submit {
          width: 100%;
          padding: 0.85rem;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .uneg-btn-submit:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.28);
        }

        .uneg-btn-submit:disabled {
          opacity: 0.65;
          cursor: not-allowed;
        }

        .uneg-auth-footer {
          text-align: center;
          margin-top: 1.8rem;
          padding-top: 1.25rem;
          border-top: 1px solid #f1f5f9;
          font-size: 0.86rem;
          color: #64748b;
        }

        .uneg-auth-link {
          color: #2563eb;
          text-decoration: none;
          font-weight: 700;
        }

        .uneg-auth-link:hover {
          color: #1d4ed8;
          text-decoration: underline;
        }

        .uneg-security-badge {
          margin-top: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.4rem;
          font-size: 0.72rem;
          color: #94a3b8;
          font-weight: 600;
        }
      `}</style>

      <div className="uneg-login-card">
        <div className="uneg-card-accent-line"></div>

        <div className="uneg-auth-header">
          <div className="uneg-auth-emblem">
            <UnegLogo size={58} />
          </div>
          <p className="uneg-inst-pretitle">Universidad Nacional Experimental de Guayana</p>
          <h1 className="uneg-inst-title">Control de Acceso y Asistencia</h1>
          <p className="uneg-inst-subtitle">Acceso Centralizado con FaceSentinel SSO</p>
        </div>

        {error && (
          <div className="uneg-alert-danger">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        {/* Sección Biometría Facial FaceSentinel */}
        <div className="uneg-biometric-panel">
          <div className="uneg-biometric-badge">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            AUTENTICACIÓN RECOMENDADA
          </div>
          <h2 className="uneg-biometric-heading">Acceso Biométrico Facial</h2>
          <p className="uneg-biometric-desc">
            Marcaje instantáneo y sin contacto validado por FaceSentinel mediante WebSockets y Blockchain.
          </p>
          <button
            type="button"
            onClick={handleBiometricLogin}
            className="uneg-btn-face"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z" />
              <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
              <path d="M16 8a4 4 0 0 1-8 0" />
              <path d="M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5" />
            </svg>
            Ingresar con FaceSentinel
          </button>
        </div>

        <div className="uneg-divider-line">o con credenciales institucionales</div>

        <form onSubmit={handleSubmit}>
          <div className="uneg-form-group">
            <label className="uneg-label">Correo institucional o de contacto</label>
            <div className="uneg-input-wrapper">
              <span className="uneg-input-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </span>
              <input
                type="email"
                value={email}
                onChange={e => {
                  setEmail(e.target.value);
                  setHasBiometrics(false);
                }}
                onBlur={handleEmailBlur}
                required
                className="uneg-input"
                placeholder="ejemplo@uneg.edu.ve"
              />
            </div>
          </div>

          {hasBiometrics && (
            <div className="uneg-biometric-detected">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '2px' }}>
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <span>
                Este usuario tiene <strong>Biometría Facial Vinculada</strong>. Puedes ingresar directamente con FaceSentinel arriba o continuar con tu contraseña.
              </span>
            </div>
          )}

          <div className="uneg-form-group">
            <label className="uneg-label">Contraseña institucional</label>
            <div className="uneg-input-wrapper">
              <span className="uneg-input-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
              </span>
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="uneg-input"
                placeholder="••••••••"
              />
              <button
                type="button"
                className="uneg-toggle-btn"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? 'Ocultar contraseña' : 'Ver contraseña'}
              >
                {showPassword ? (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                    <line x1="1" y1="1" x2="23" y2="23" />
                  </svg>
                ) : (
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="uneg-btn-submit"
          >
            {loading ? (
              'Autenticando en portal...'
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" y1="12" x2="3" y2="12" />
                </svg>
                Iniciar Sesión Institucional
              </>
            )}
          </button>
        </form>

        <p className="uneg-auth-footer">
          ¿Nuevo usuario o personal no registrado?{' '}
          <Link to="/signup" className="uneg-auth-link">
            Crear cuenta de acceso
          </Link>
        </p>

        <div className="uneg-security-badge">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span>Conexión segura cifrada • Vicerrectorado Académico UNEG</span>
        </div>

        <div style={{ textAlign: 'center', marginTop: '0.85rem' }}>
          <Link to="/settings" style={{ fontSize: '0.76rem', color: '#64748b', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.3rem', fontWeight: 600 }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            ⚙️ Panel de Variables y Configuración
          </Link>
        </div>
      </div>
    </div>
  );
}
