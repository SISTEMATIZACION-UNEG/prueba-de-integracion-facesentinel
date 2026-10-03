import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UnegLogo } from '../App';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('docente');
  const [sede, setSede] = useState('atlantico');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await register(name, email, password);
      // Tras registrar con éxito, redirigir al login con mensaje claro
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.error || 'Error al procesar el registro institucional');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="uneg-signup-container">
      <style>{`
        .uneg-signup-container {
          min-height: calc(100vh - 120px);
          display: flex;
          align-items: center;
          justify-content: center;
          background: radial-gradient(circle at 10% 20%, #e0edfd 0%, #f4f7fb 90%);
          padding: 2.5rem 1.25rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-signup-card {
          width: 100%;
          max-width: 520px;
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
          border: 1px solid #fecaca;
          color: #b91c1c;
          padding: 0.85rem 1rem;
          border-radius: 12px;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          animation: shake 0.35s ease;
        }

        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }

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

        .uneg-input, .uneg-select {
          width: 100%;
          padding: 0.78rem 1rem 0.78rem 2.6rem;
          background: #f8fafc;
          border: 1.5px solid #cbd5e1;
          border-radius: 12px;
          color: #0f2744;
          font-size: 0.92rem;
          transition: all 0.2s ease;
        }

        .uneg-select {
          padding-left: 2.6rem;
          cursor: pointer;
        }

        .uneg-input:focus, .uneg-select:focus {
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

        .uneg-form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .uneg-info-box {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 12px;
          padding: 0.85rem 1rem;
          font-size: 0.82rem;
          color: #1e3a8a;
          margin-bottom: 1.3rem;
          line-height: 1.45;
          display: flex;
          align-items: flex-start;
          gap: 0.6rem;
        }

        .uneg-btn-submit {
          width: 100%;
          padding: 0.88rem;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 12px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 14px rgba(37, 99, 235, 0.22);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .uneg-btn-submit:hover:not(:disabled) {
          background: #1d4ed8;
          transform: translateY(-1px);
          box-shadow: 0 6px 18px rgba(37, 99, 235, 0.3);
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

        @media (max-width: 540px) {
          .uneg-form-row {
            grid-template-columns: 1fr;
            gap: 0;
          }
        }
      `}</style>

      <div className="uneg-signup-card">
        <div className="uneg-card-accent-line"></div>

        <div className="uneg-auth-header">
          <div className="uneg-auth-emblem">
            <UnegLogo size={58} />
          </div>
          <p className="uneg-inst-pretitle">Universidad Nacional Experimental de Guayana</p>
          <h1 className="uneg-inst-title">Registro de Personal y Estudiantes</h1>
          <p className="uneg-inst-subtitle">Afiliación al Sistema de Control de Asistencia y Acceso</p>
        </div>

        {error && (
          <div className="uneg-alert-danger">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="uneg-form-group">
            <label className="uneg-label">Nombre y apellido completo</label>
            <div className="uneg-input-wrapper">
              <span className="uneg-input-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </span>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className="uneg-input"
                placeholder="Prof. Carlos Mendoza"
              />
            </div>
          </div>

          <div className="uneg-form-group">
            <label className="uneg-label">Correo institucional o electrónico</label>
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
                onChange={e => setEmail(e.target.value)}
                required
                className="uneg-input"
                placeholder="cmendoza@uneg.edu.ve"
              />
            </div>
          </div>

          <div className="uneg-form-row">
            <div className="uneg-form-group">
              <label className="uneg-label">Estamento / Rol</label>
              <div className="uneg-input-wrapper">
                <span className="uneg-input-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                  </svg>
                </span>
                <select
                  value={role}
                  onChange={e => setRole(e.target.value)}
                  className="uneg-select"
                >
                  <option value="docente">Docente / Investigador</option>
                  <option value="administrativo">Personal Administrativo</option>
                  <option value="estudiante">Estudiante de Pregrado</option>
                  <option value="postgrado">Estudiante de Postgrado</option>
                  <option value="obrero">Personal Técnico / Operativo</option>
                </select>
              </div>
            </div>

            <div className="uneg-form-group">
              <label className="uneg-label">Sede principal</label>
              <div className="uneg-input-wrapper">
                <span className="uneg-input-icon">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <select
                  value={sede}
                  onChange={e => setSede(e.target.value)}
                  className="uneg-select"
                >
                  <option value="atlantico">Sede Atlántico (Pto Ordaz)</option>
                  <option value="chilemex">Sede Chilemex (Pto Ordaz)</option>
                  <option value="villa_asia">Sede Villa Asia (Pto Ordaz)</option>
                  <option value="bolivar">Sede Ciudad Bolívar</option>
                  <option value="upata">Sede Upata</option>
                </select>
              </div>
            </div>
          </div>

          <div className="uneg-form-group">
            <label className="uneg-label">Contraseña de acceso</label>
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
                minLength={6}
                className="uneg-input"
                placeholder="Mínimo 6 caracteres"
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

          <div className="uneg-info-box">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" style={{ flexShrink: 0, marginTop: '1px' }}>
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="16" x2="12" y2="12" />
              <line x1="12" y1="8" x2="12.01" y2="8" />
            </svg>
            <span>
              <strong>Vinculación Biométrica:</strong> Una vez creada tu cuenta, podrás habilitar el reconocimiento facial en tu credencial para acceder por torniquetes automáticos mediante <strong>FaceSentinel</strong>.
            </span>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="uneg-btn-submit"
          >
            {loading ? (
              'Registrando credencial...'
            ) : (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <line x1="20" y1="8" x2="20" y2="14" />
                  <line x1="23" y1="11" x2="17" y2="11" />
                </svg>
                Registrar Credencial Universitaria
              </>
            )}
          </button>
        </form>

        <p className="uneg-auth-footer">
          ¿Ya tienes cuenta activa en el portal?{' '}
          <Link to="/login" className="uneg-auth-link">
            Iniciar sesión
          </Link>
        </p>
      </div>
    </div>
  );
}
