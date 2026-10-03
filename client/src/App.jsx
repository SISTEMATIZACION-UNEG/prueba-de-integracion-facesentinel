import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate, NavLink, Link } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="uneg-loader-container">
        <div className="uneg-spinner"></div>
        <p className="uneg-loader-text">Verificando credenciales universitarias UNEG...</p>
        <style>{`
          .uneg-loader-container {
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            background: #f4f7fb;
            color: #173b6c;
            gap: 1rem;
          }
          .uneg-spinner {
            width: 44px;
            height: 44px;
            border: 4px solid #dbeafe;
            border-top: 4px solid #2563eb;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .uneg-loader-text {
            font-size: 0.95rem;
            font-weight: 600;
            color: #1e3a8a;
          }
        `}</style>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function PublicRoute({ children }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f4f7fb' }}>
        <p style={{ color: '#173b6c', fontWeight: 600 }}>Cargando portal UNEG...</p>
      </div>
    );
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return children;
}

// UNEG University Shield SVG Component
export function UnegLogo({ size = 42 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0f2744" />
          <stop offset="50%" stopColor="#173b6c" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
        <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#d97706" />
        </linearGradient>
      </defs>
      {/* Escudo exterior */}
      <path
        d="M50 8 L86 22 V54 C86 74 70 88 50 94 C30 88 14 74 14 54 V22 Z"
        fill="url(#shieldGrad)"
        stroke="#ffffff"
        strokeWidth="3.5"
      />
      {/* Borde interior dorado */}
      <path
        d="M50 15 L80 27 V52 C80 69 66 82 50 87 C34 82 20 69 20 52 V27 Z"
        fill="none"
        stroke="url(#goldGrad)"
        strokeWidth="2.5"
        strokeDasharray="4 2"
      />
      {/* Sol / Lucero de Guayana */}
      <circle cx="50" cy="38" r="12" fill="url(#goldGrad)" />
      <path
        d="M50 20 V26 M50 50 V56 M32 38 H38 M62 38 H68 M37 25 L41 29 M59 47 L63 51 M37 51 L41 47 M59 29 L63 25"
        stroke="#ffffff"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Libro / Ondas del río Caroní y Orinoco */}
      <path
        d="M32 64 C40 60 48 64 50 67 C52 64 60 60 68 64 V75 C60 71 52 75 50 78 C48 75 40 71 32 75 Z"
        fill="#ffffff"
        opacity="0.95"
      />
      {/* Indicador digital biométrico */}
      <circle cx="50" cy="38" r="4" fill="#ffffff" />
    </svg>
  );
}

function Navbar() {
  const { user, logout } = useAuth();
  const [timeStr, setTimeStr] = useState('');

  useEffect(() => {
    function updateClock() {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString('es-VE', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true
        })
      );
    }
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  if (!user) return null;

  return (
    <header className="uneg-header-wrapper">
      <style>{`
        .uneg-header-wrapper {
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(15, 39, 68, 0.08);
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-topbar {
          background: #0a192f;
          color: #94a3b8;
          font-size: 0.72rem;
          padding: 0.35rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          letter-spacing: 0.03em;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }

        .uneg-topbar-left {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          font-weight: 600;
          color: #cbd5e1;
        }

        .uneg-topbar-right {
          display: flex;
          align-items: center;
          gap: 1.25rem;
        }

        .uneg-topbar-clock {
          display: flex;
          align-items: center;
          gap: 0.35rem;
          color: #f1f5f9;
          font-weight: 600;
          background: rgba(255, 255, 255, 0.08);
          padding: 0.15rem 0.55rem;
          border-radius: 4px;
        }

        .uneg-main-nav {
          background: #ffffff;
          padding: 0.75rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 2px solid #e2e8f0;
        }

        .uneg-brand {
          display: flex;
          align-items: center;
          gap: 0.9rem;
          text-decoration: none;
        }

        .uneg-brand-text {
          display: flex;
          flex-direction: column;
        }

        .uneg-brand-title {
          font-size: 1.08rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.01em;
          line-height: 1.2;
        }

        .uneg-brand-sub {
          font-size: 0.75rem;
          font-weight: 600;
          color: #2563eb;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .uneg-nav-center {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .uneg-nav-link {
          display: flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.55rem 1rem;
          border-radius: 8px;
          color: #334e68;
          font-weight: 600;
          font-size: 0.88rem;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .uneg-nav-link:hover {
          color: #173b6c;
          background: #f1f5f9;
        }

        .uneg-nav-link.active {
          color: #2563eb;
          background: #eff6ff;
          border-bottom: 2px solid #2563eb;
        }

        .uneg-nav-right {
          display: flex;
          align-items: center;
          gap: 1.1rem;
        }

        .uneg-sede-badge {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          font-size: 0.76rem;
          font-weight: 700;
        }

        .uneg-pulse-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 0 2px rgba(34, 197, 94, 0.25);
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5); }
          70% { box-shadow: 0 0 0 6px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }

        .uneg-user-pill {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          padding: 0.35rem 0.75rem 0.35rem 0.45rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 999px;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .uneg-user-pill:hover {
          border-color: #bfdbfe;
          background: #eff6ff;
        }

        .uneg-avatar-badge {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #173b6c 0%, #2563eb 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.82rem;
          box-shadow: 0 2px 5px rgba(37, 99, 235, 0.25);
        }

        .uneg-user-details {
          display: flex;
          flex-direction: column;
          line-height: 1.1;
        }

        .uneg-user-name {
          font-size: 0.85rem;
          font-weight: 700;
          color: #0f2744;
        }

        .uneg-user-role {
          font-size: 0.68rem;
          font-weight: 600;
          color: #2563eb;
        }

        .uneg-btn-logout {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          background: transparent;
          border: 1px solid #cbd5e1;
          color: #475569;
          padding: 0.45rem 0.85rem;
          border-radius: 8px;
          cursor: pointer;
          font-size: 0.8rem;
          font-weight: 600;
          transition: all 0.2s ease;
        }

        .uneg-btn-logout:hover {
          background: #fef2f2;
          border-color: #fca5a5;
          color: #b91c1c;
        }

        @media (max-width: 900px) {
          .uneg-topbar {
            display: none;
          }
          .uneg-main-nav {
            padding: 0.6rem 1rem;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          .uneg-brand-title {
            font-size: 0.95rem;
          }
          .uneg-nav-center {
            order: 3;
            width: 100%;
            justify-content: center;
            border-top: 1px solid #f1f5f9;
            padding-top: 0.5rem;
          }
        }
      `}</style>

      {/* Franja superior institucional */}
      <div className="uneg-topbar">
        <div className="uneg-topbar-left">
          <span>REPÚBLICA BOLIVARIANA DE VENEZUELA</span>
          <span>•</span>
          <span>UNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA</span>
        </div>
        <div className="uneg-topbar-right">
          <span>Coordinación General de Control de Accesos y Asistencia</span>
          <div className="uneg-topbar-clock">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            <span>{timeStr || 'Sincronizando...'}</span>
          </div>
        </div>
      </div>

      {/* Barra principal de navegación */}
      <nav className="uneg-main-nav">
        <Link to="/" className="uneg-brand">
          <UnegLogo size={42} />
          <div className="uneg-brand-text">
            <span className="uneg-brand-title">UNIVERSIDAD DE GUAYANA</span>
            <span className="uneg-brand-sub">Portal de Accesos y Asistencia • UNEG</span>
          </div>
        </Link>

        <div className="uneg-nav-center">
          <NavLink
            to="/"
            end
            className={({ isActive }) => `uneg-nav-link ${isActive ? 'active' : ''}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="7" height="9" />
              <rect x="14" y="3" width="7" height="5" />
              <rect x="14" y="12" width="7" height="9" />
              <rect x="3" y="16" width="7" height="5" />
            </svg>
            Panel de Accesos
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) => `uneg-nav-link ${isActive ? 'active' : ''}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="16" rx="2" />
              <circle cx="9" cy="10" r="2" />
              <line x1="15" y1="8" x2="17" y2="8" />
              <line x1="15" y1="12" x2="17" y2="12" />
              <line x1="7" y1="16" x2="17" y2="16" />
            </svg>
            Credencial Universitaria
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) => `uneg-nav-link ${isActive ? 'active' : ''}`}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="3" />
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
            </svg>
            Variables .env
          </NavLink>
        </div>

        <div className="uneg-nav-right">
          <div className="uneg-sede-badge" title="Terminal biométrico conectado al servidor central">
            <span className="uneg-pulse-dot"></span>
            <span>Sede Atlántico • Online</span>
          </div>

          <Link to="/profile" className="uneg-user-pill" title="Ver mi credencial">
            <div className="uneg-avatar-badge">
              {user.name ? user.name.charAt(0).toUpperCase() : 'U'}
            </div>
            <div className="uneg-user-details">
              <span className="uneg-user-name">{user.name.split(' ')[0]}</span>
              <span className="uneg-user-role">
                {user.has_biometrics_enrolled ? 'Biometría Activa' : 'Personal UNEG'}
              </span>
            </div>
          </Link>

          <button onClick={logout} className="uneg-btn-logout" title="Cerrar sesión del sistema">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
              <polyline points="16 17 21 12 16 7" />
              <line x1="21" y1="12" x2="9" y2="12" />
            </svg>
            Salir
          </button>
        </div>
      </nav>
    </header>
  );
}

function InstitutionalFooter() {
  return (
    <footer className="uneg-footer">
      <style>{`
        .uneg-footer {
          background: #0f2744;
          color: #94a3b8;
          border-top: 3px solid #2563eb;
          padding: 2.25rem 2rem 1.5rem;
          margin-top: auto;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }
        .uneg-footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
          padding-bottom: 1.5rem;
        }
        .uneg-footer-brand {
          display: flex;
          align-items: center;
          gap: 1rem;
        }
        .uneg-footer-text h4 {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 700;
          margin-bottom: 0.2rem;
        }
        .uneg-footer-text p {
          font-size: 0.8rem;
          color: #94a3b8;
        }
        .uneg-footer-badges {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .uneg-tag {
          font-size: 0.72rem;
          background: rgba(37, 99, 235, 0.15);
          color: #93c5fd;
          border: 1px solid rgba(37, 99, 235, 0.3);
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          font-weight: 600;
        }
        .uneg-footer-bottom {
          max-width: 1200px;
          margin: 1.25rem auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 0.75rem;
          color: #64748b;
          flex-wrap: wrap;
          gap: 0.75rem;
        }
        @media (max-width: 768px) {
          .uneg-footer-content, .uneg-footer-bottom {
            flex-direction: column;
            text-align: center;
            align-items: center;
          }
        }
      `}</style>
      <div className="uneg-footer-content">
        <div className="uneg-footer-brand">
          <UnegLogo size={36} />
          <div className="uneg-footer-text">
            <h4>Universidad Nacional Experimental de Guayana (UNEG)</h4>
            <p>Dirección de Tecnologías de Información y Comunicación • Sistema FaceSentinel SSO</p>
          </div>
        </div>
        <div className="uneg-footer-badges">
          <span className="uneg-tag">Sede Atlántico</span>
          <span className="uneg-tag">Sede Chilemex</span>
          <span className="uneg-tag">Sede Villa Asia</span>
          <span className="uneg-tag">Sede Ciudad Bolívar</span>
        </div>
      </div>
      <div className="uneg-footer-bottom">
        <span>© 2026 UNEG • Control de Accesos y Asistencia. Todos los derechos reservados.</span>
        <span>Puerto Ordaz, Estado Bolívar, Venezuela. "La Luz de Guayana".</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
          <Navbar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/signup" element={<PublicRoute><Signup /></PublicRoute>} />
              <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
          <InstitutionalFooter />
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}
