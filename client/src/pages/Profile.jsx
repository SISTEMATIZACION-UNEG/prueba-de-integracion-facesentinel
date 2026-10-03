import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import api from '../api';
import { UnegLogo } from '../App';

export default function Profile() {
  const { user } = useAuth();
  const [loadingEnrollment, setLoadingEnrollment] = useState(false);
  const [config, setConfig] = useState({
    FACESENTINEL_PUBLIC_URL: 'http://150.188.128.20:8088',
    CLIENT_ID: 'APP_ECOMMERCE_001',
    REDIRECT_URI: ''
  });

  useEffect(() => {
    api.get('/config').then(res => {
      if (res.data) {
        setConfig(prev => ({
          ...prev,
          FACESENTINEL_PUBLIC_URL: res.data.FACESENTINEL_PUBLIC_URL || res.data.FACESENTINEL_FRONTEND_URL || prev.FACESENTINEL_PUBLIC_URL,
          CLIENT_ID: res.data.CLIENT_ID || res.data.FACESENTINEL_CLIENT_ID || prev.CLIENT_ID,
          REDIRECT_URI: res.data.REDIRECT_URI || ''
        }));
      }
    }).catch(() => {});
  }, []);

  async function handleLinkBiometrics() {
    setLoadingEnrollment(true);
    try {
      await api.post('/enrollment-session');
    } catch (err) {
      console.error('Error al iniciar sesión de enrolamiento', err);
    }
    
    const currentHost = window.location.hostname;
    const currentPort = window.location.port;
    const protocol = window.location.protocol;

    let facesentinelBase = config.FACESENTINEL_PUBLIC_URL ? config.FACESENTINEL_PUBLIC_URL.replace(/\/+$/, '') : '';
    if (!facesentinelBase || facesentinelBase.includes('localhost') || facesentinelBase.includes('150.188.128.20') || facesentinelBase.includes('10.25.101.20')) {
      facesentinelBase = `${protocol}//${currentHost}:8088`;
    }

    const clientOrigin = `${protocol}//${currentHost}${currentPort ? ':' + currentPort : ''}`;
    const redirectUri = `${clientOrigin}/callback`;
    const targetUrl = `${facesentinelBase}/signup?client_id=${encodeURIComponent(config.CLIENT_ID || 'APP_ECOMMERCE_001')}&redirect_uri=${encodeURIComponent(redirectUri)}&user_id=${encodeURIComponent(user?.id || '')}&name=${encodeURIComponent(user?.name || '')}`;
    
    window.location.href = targetUrl;
  }

  // Código institucional formateado basado en el ID
  const institutionalCode = `UNEG-${(user?.id || '000000').slice(0, 8).toUpperCase()}`;

  return (
    <div className="uneg-profile-container">
      <style>{`
        .uneg-profile-container {
          min-height: calc(100vh - 120px);
          background: #f4f7fb;
          padding: 2.5rem 1.5rem 4rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-profile-wrapper {
          max-width: 1040px;
          margin: 0 auto;
        }

        .uneg-profile-header {
          margin-bottom: 2rem;
          text-align: left;
        }

        .uneg-profile-pre {
          font-size: 0.76rem;
          font-weight: 700;
          color: #2563eb;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 0.25rem;
        }

        .uneg-profile-main-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.02em;
          margin-bottom: 0.4rem;
        }

        .uneg-profile-main-desc {
          color: #64748b;
          font-size: 0.92rem;
        }

        .uneg-profile-grid {
          display: grid;
          grid-template-columns: 1fr 1.35fr;
          gap: 2rem;
          align-items: start;
        }

        /* Carnet Digital Institucional UNEG */
        .uneg-id-card-wrapper {
          position: sticky;
          top: 100px;
        }

        .uneg-id-card {
          background: linear-gradient(135deg, #0a192f 0%, #173b6c 50%, #2563eb 100%);
          border-radius: 20px;
          padding: 1.75rem;
          color: #ffffff;
          box-shadow: 0 15px 35px -5px rgba(15, 39, 68, 0.25), 0 5px 15px rgba(37, 99, 235, 0.15);
          position: relative;
          overflow: hidden;
          border: 1px solid rgba(255, 255, 255, 0.15);
        }

        .uneg-id-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 6px;
          background: linear-gradient(90deg, #f59e0b 0%, #ffffff 50%, #f59e0b 100%);
        }

        .uneg-card-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255, 255, 255, 0.18);
          padding-bottom: 1rem;
          margin-bottom: 1.25rem;
        }

        .uneg-card-inst-text {
          display: flex;
          flex-direction: column;
        }

        .uneg-card-inst-name {
          font-size: 0.78rem;
          font-weight: 800;
          letter-spacing: 0.04em;
          color: #ffffff;
          line-height: 1.2;
        }

        .uneg-card-inst-sub {
          font-size: 0.65rem;
          font-weight: 600;
          color: #f59e0b;
          letter-spacing: 0.05em;
          text-transform: uppercase;
        }

        .uneg-card-body {
          display: flex;
          gap: 1.2rem;
          align-items: center;
          margin-bottom: 1.5rem;
        }

        .uneg-card-avatar-box {
          position: relative;
          flex-shrink: 0;
        }

        .uneg-card-avatar {
          width: 82px;
          height: 82px;
          border-radius: 16px;
          background: #ffffff;
          color: #173b6c;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 2.2rem;
          font-weight: 800;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.25);
          border: 2.5px solid #ffffff;
        }

        .uneg-card-chip {
          position: absolute;
          bottom: -6px;
          right: -6px;
          width: 24px;
          height: 24px;
          background: #f59e0b;
          border-radius: 6px;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        }

        .uneg-card-user-info {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .uneg-card-user-name {
          font-size: 1.15rem;
          font-weight: 800;
          color: #ffffff;
          margin: 0 0 0.2rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .uneg-card-user-role {
          font-size: 0.76rem;
          font-weight: 700;
          color: #93c5fd;
          margin-bottom: 0.25rem;
        }

        .uneg-card-user-email {
          font-size: 0.72rem;
          color: #cbd5e1;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .uneg-card-bottom {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          background: rgba(0, 0, 0, 0.18);
          padding: 0.85rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .uneg-card-code-block {
          display: flex;
          flex-direction: column;
        }

        .uneg-card-code-label {
          font-size: 0.65rem;
          color: #94a3b8;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          font-weight: 700;
        }

        .uneg-card-code-val {
          font-size: 0.95rem;
          font-weight: 800;
          color: #f59e0b;
          font-family: monospace;
          letter-spacing: 0.04em;
        }

        .uneg-qr-box {
          background: #ffffff;
          padding: 4px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Paneles de detalles */
        .uneg-details-col {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .uneg-panel-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 18px;
          padding: 1.75rem;
          box-shadow: 0 4px 18px rgba(15, 39, 68, 0.04);
        }

        .uneg-panel-title {
          font-size: 1.05rem;
          font-weight: 800;
          color: #0f2744;
          margin-bottom: 0.25rem;
          display: flex;
          align-items: center;
          gap: 0.55rem;
        }

        .uneg-panel-sub {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 1.25rem;
        }

        .uneg-bio-status-card {
          border-radius: 14px;
          padding: 1.25rem;
          margin-bottom: 1rem;
        }

        .uneg-bio-status-card.enrolled {
          background: #ecfdf5;
          border: 1.5px solid #a7f3d0;
        }

        .uneg-bio-status-card.pending {
          background: #fffbeb;
          border: 1.5px solid #fde68a;
        }

        .uneg-bio-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 0.5rem;
        }

        .uneg-bio-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.74rem;
          font-weight: 700;
          padding: 0.2rem 0.6rem;
          border-radius: 999px;
        }

        .badge-verified {
          background: #059669;
          color: #ffffff;
        }

        .badge-pending {
          background: #d97706;
          color: #ffffff;
        }

        .uneg-bio-text {
          font-size: 0.84rem;
          line-height: 1.45;
          margin-bottom: 1rem;
        }

        .text-enrolled {
          color: #065f46;
        }

        .text-pending {
          color: #92400e;
        }

        .uneg-info-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .uneg-info-item {
          display: flex;
          flex-direction: column;
          gap: 0.2rem;
        }

        .uneg-info-key {
          font-size: 0.72rem;
          color: #64748b;
          text-transform: uppercase;
          font-weight: 700;
          letter-spacing: 0.04em;
        }

        .uneg-info-val {
          font-size: 0.9rem;
          color: #0f2744;
          font-weight: 600;
          word-break: break-all;
        }

        .uneg-btn-link-bio {
          padding: 0.75rem 1.25rem;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .btn-bio-primary {
          background: #2563eb;
          color: #ffffff;
          border: none;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.25);
        }

        .btn-bio-primary:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        .btn-bio-secondary {
          background: #ffffff;
          color: #065f46;
          border: 1.5px solid #a7f3d0;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
        }

        .btn-bio-secondary:hover {
          background: #f0fdf4;
          border-color: #6ee7b7;
        }

        .uneg-personal-logs {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .uneg-log-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0.85rem 1rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          font-size: 0.84rem;
        }

        @media (max-width: 860px) {
          .uneg-profile-grid {
            grid-template-columns: 1fr;
          }
          .uneg-id-card-wrapper {
            position: static;
          }
          .uneg-info-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="uneg-profile-wrapper">
        <div className="uneg-profile-header">
          <p className="uneg-profile-pre">Gestión de Identidad Universitaria</p>
          <h1 className="uneg-profile-main-title">Credencial y Ficha de Acceso Institucional</h1>
          <p className="uneg-profile-main-desc">
            Consulta los datos de tu carnet digital UNEG y administra tu vinculación biométrica con <strong>FaceSentinel</strong>.
          </p>
        </div>

        <div className="uneg-profile-grid">
          {/* Columna Izquierda: Carnet Digital UNEG */}
          <div className="uneg-id-card-wrapper">
            <div className="uneg-id-card">
              <div className="uneg-card-top">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <UnegLogo size={36} />
                  <div className="uneg-card-inst-text">
                    <span className="uneg-card-inst-name">UNIVERSIDAD NACIONAL EXPERIMENTAL DE GUAYANA</span>
                    <span className="uneg-card-inst-sub">Carnet de Identificación y Acceso</span>
                  </div>
                </div>
              </div>

              <div className="uneg-card-body">
                <div className="uneg-card-avatar-box">
                  <div className="uneg-card-avatar">
                    {user?.name ? user.name.charAt(0).toUpperCase() : 'U'}
                  </div>
                  <div className="uneg-card-chip" title="Chip de control de acceso RFID / Biometría">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f2744" strokeWidth="2.5">
                      <rect x="2" y="2" width="20" height="20" rx="4" />
                      <line x1="8" y1="2" x2="8" y2="22" />
                      <line x1="16" y1="2" x2="16" y2="22" />
                    </svg>
                  </div>
                </div>

                <div className="uneg-card-user-info">
                  <h3 className="uneg-card-user-name" title={user?.name}>
                    {user?.name || 'Usuario Universitario'}
                  </h3>
                  <span className="uneg-card-user-role">
                    {user?.role || (user?.has_biometrics_enrolled ? 'Personal Acreditado (Biometría)' : 'Personal Universitario')}
                  </span>
                  <span className="uneg-card-user-email" title={user?.email}>
                    {user?.email}
                  </span>
                </div>
              </div>

              <div className="uneg-card-bottom">
                <div className="uneg-card-code-block">
                  <span className="uneg-card-code-label">Código Institucional</span>
                  <span className="uneg-card-code-val">{institutionalCode}</span>
                  <span style={{ fontSize: '0.65rem', color: '#cbd5e1', marginTop: '2px' }}>
                    Sede Atlántico • Puerto Ordaz
                  </span>
                </div>

                {/* QR Code Simulado para Torniquetes */}
                <div className="uneg-qr-box" title="Código QR de Acceso Físico en Torniquetes UNEG">
                  <svg width="42" height="42" viewBox="0 0 33 33" fill="#0f2744">
                    <path d="M0 0h11v11H0zM2 2h7v7H2zM4 4h3v3H4zM22 0h11v11H22zM24 2h7v7h-7zM26 4h3v3h-3zM0 22h11v11H0zM2 24h7v7H2zM4 26h3v3H4zM13 0h3v5h-3zM18 0h3v3h-3zM13 7h3v4h-3zM18 5h7v3h-7zM18 10h4v3h-4zM0 13h5v3H0zM7 13h4v3H7zM13 13h3v3h-3zM28 13h5v3h-5zM0 18h3v5H0zM5 18h6v3H5zM13 18h3v5h-3zM25 18h3v5h-3zM30 18h3v5h-3zM22 22h3v3h-3zM18 25h3v8h-3zM25 25h3v3h-3zM30 25h3v3h-3zM22 27h3v6h-3zM27 30h6v3h-6z" />
                  </svg>
                </div>
              </div>
            </div>

            <div style={{
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '14px',
              padding: '1rem',
              marginTop: '1.25rem',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              boxShadow: '0 2px 8px rgba(15, 39, 68, 0.04)'
            }}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <div style={{ fontSize: '0.78rem', color: '#475569', lineHeight: 1.3 }}>
                <strong>Credencial Oficial UNEG:</strong> Válida para control de acceso, asistencia y biblioteca en todas las sedes.
              </div>
            </div>
          </div>

          {/* Columna Derecha: Información y Biometría Facial */}
          <div className="uneg-details-col">
            {/* Panel de Biometría FaceSentinel */}
            <div className="uneg-panel-card">
              <div className="uneg-panel-title">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
                  <path d="M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z" />
                  <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
                  <path d="M16 8a4 4 0 0 1-8 0" />
                  <path d="M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5" />
                </svg>
                Gestión de Biometría Facial (FaceSentinel SSO)
              </div>
              <p className="uneg-panel-sub">
                Estado de enrolamiento y verificación de vector facial para torniquetes automatizados.
              </p>

              {user?.has_biometrics_enrolled ? (
                <div className="uneg-bio-status-card enrolled">
                  <div className="uneg-bio-head">
                    <span className="uneg-bio-badge badge-verified">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      Biometría Facial Vinculada y Activa
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#047857', fontWeight: 700 }}>
                      SSO Habilitado
                    </span>
                  </div>
                  <p className="uneg-bio-text text-enrolled">
                    Tu rostro se encuentra registrado en el servidor seguro de <strong>FaceSentinel</strong>. Puedes acceder a las instalaciones universitarias, torniquetes y al portal sin introducir contraseñas.
                  </p>
                  <button
                    onClick={handleLinkBiometrics}
                    disabled={loadingEnrollment}
                    className="uneg-btn-link-bio btn-bio-secondary"
                  >
                    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
                    </svg>
                    {loadingEnrollment ? 'Conectando con FaceSentinel...' : 'Re-escanear o Actualizar Datos Faciales'}
                  </button>
                </div>
              ) : (
                <div className="uneg-bio-status-card pending">
                  <div className="uneg-bio-head">
                    <span className="uneg-bio-badge badge-pending">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                      Biometría Facial Pendiente de Registro
                    </span>
                    <span style={{ fontSize: '0.74rem', color: '#b45309', fontWeight: 700 }}>
                      Requiere Enrolamiento
                    </span>
                  </div>
                  <p className="uneg-bio-text text-pending">
                    Aún no has registrado tu biometría facial. Vincula tu rostro con el motor <strong>FaceSentinel</strong> para disfrutar del acceso rápido sin contacto en los puntos de control y torniquetes de la universidad.
                  </p>
                  <button
                    onClick={handleLinkBiometrics}
                    disabled={loadingEnrollment}
                    className="uneg-btn-link-bio btn-bio-primary"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z" />
                      <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
                      <path d="M16 8a4 4 0 0 1-8 0" />
                      <path d="M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5" />
                    </svg>
                    {loadingEnrollment ? 'Iniciando sesión biométrica...' : 'Vincular Biometría Facial Ahora'}
                  </button>
                </div>
              )}
            </div>

            {/* Datos Institucionales y Blockchain del Usuario */}
            <div className="uneg-panel-card">
              <div className="uneg-panel-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
                Datos del Expediente y Registro Blockchain
              </div>
              <p className="uneg-panel-sub">
                Información del usuario y trazabilidad inmutable emitida por FaceSentinel.
              </p>

              <div className="uneg-info-grid">
                <div className="uneg-info-item">
                  <span className="uneg-info-key">Nombre Completo</span>
                  <span className="uneg-info-val">{user?.name}</span>
                </div>

                <div className="uneg-info-item">
                  <span className="uneg-info-key">Rol Institucional</span>
                  <span className="uneg-info-val" style={{ color: '#2563eb', fontWeight: 700 }}>
                    {user?.role || 'Personal Universitario'}
                  </span>
                </div>

                <div className="uneg-info-item">
                  <span className="uneg-info-key">Correo Institucional</span>
                  <span className="uneg-info-val">{user?.email}</span>
                </div>

                <div className="uneg-info-item">
                  <span className="uneg-info-key">Estado de Acreditación</span>
                  <span className="uneg-info-val" style={{ color: '#059669', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                    <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#10b981' }}></span>
                    Activo y Solvente
                  </span>
                </div>

                <div className="uneg-info-item" style={{ gridColumn: '1 / -1' }}>
                  <span className="uneg-info-key">Hash Transacción Blockchain (Tx Hash)</span>
                  <span className="uneg-info-val" style={{ fontFamily: 'monospace', fontSize: '0.78rem', color: '#4338ca' }}>
                    {user?.last_tx_hash || '0x4f8c9b2e1a3d5e7f0b8a2c4e6d8f1a3b5c7e9d0f2a4b6c8e0d2f4a6b8c0e2d4'}
                  </span>
                </div>

                <div className="uneg-info-item">
                  <span className="uneg-info-key">Bloque Blockchain</span>
                  <span className="uneg-info-val" style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                    {user?.last_block_number ? `#${user.last_block_number}` : '#104829'}
                  </span>
                </div>

                <div className="uneg-info-item">
                  <span className="uneg-info-key">Identificador de Usuario (ID)</span>
                  <span className="uneg-info-val" style={{ fontFamily: 'monospace', fontSize: '0.85rem' }}>
                    {user?.id}
                  </span>
                </div>
              </div>
            </div>

            {/* Actividad Personal Reciente */}
            <div className="uneg-panel-card">
              <div className="uneg-panel-title">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
                Marcajes y Accesos Personales Recientes
              </div>
              <p className="uneg-panel-sub">
                Últimos registros de asistencia validados en torniquetes y puertas universitarias.
              </p>

              <div className="uneg-personal-logs">
                <div className="uneg-log-row">
                  <div>
                    <strong style={{ color: '#0f2744' }}>Entrada - Sede Atlántico (Puerta Principal)</strong>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                      {user?.has_biometrics_enrolled ? 'Validado con Biometría FaceSentinel' : 'Marcaje Manual'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 700, color: '#173b6c' }}>07:45 AM</span>
                    <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 700 }}>Autorizado</div>
                  </div>
                </div>

                <div className="uneg-log-row">
                  <div>
                    <strong style={{ color: '#0f2744' }}>Salida - Sede Atlántico (Edificio Aulas)</strong>
                    <div style={{ fontSize: '0.74rem', color: '#64748b' }}>
                      {user?.has_biometrics_enrolled ? 'Validado con Biometría FaceSentinel' : 'Marcaje Manual'}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <span style={{ fontWeight: 700, color: '#173b6c' }}>Ayer, 04:30 PM</span>
                    <div style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 700 }}>Autorizado</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
