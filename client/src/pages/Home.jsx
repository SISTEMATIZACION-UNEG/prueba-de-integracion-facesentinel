import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UnegLogo } from '../App';

// Datos simulados iniciales de marcajes institucionales de la UNEG
const INITIAL_LOGS = [
  {
    id: 'log-101',
    user: 'Prof. Carlos Mendoza',
    email: 'cmendoza@uneg.edu.ve',
    role: 'Docente Titular',
    roleType: 'docente',
    sede: 'Sede Atlántico - Entrada Principal',
    tipo: 'Entrada',
    metodo: 'Biometría FaceSentinel',
    isBiometric: true,
    hora: '07:45:12 AM',
    fecha: 'Hoy',
    status: 'Autorizado'
  },
  {
    id: 'log-102',
    user: 'Ing. María Elena Rivas',
    email: 'mrivas@uneg.edu.ve',
    role: 'Coordinación de Informática',
    roleType: 'administrativo',
    sede: 'Sede Atlántico - Edif. Aulas II',
    tipo: 'Entrada',
    metodo: 'Biometría FaceSentinel',
    isBiometric: true,
    hora: '07:58:30 AM',
    fecha: 'Hoy',
    status: 'Autorizado'
  },
  {
    id: 'log-103',
    user: 'Alejandro Bastardo',
    email: 'abastardo@uneg.edu.ve',
    role: 'Estudiante (Ing. Informática)',
    roleType: 'estudiante',
    sede: 'Sede Atlántico - Biblioteca Central',
    tipo: 'Entrada',
    metodo: 'Biometría FaceSentinel',
    isBiometric: true,
    hora: '08:05:19 AM',
    fecha: 'Hoy',
    status: 'Autorizado'
  },
  {
    id: 'log-104',
    user: 'Dra. Carmen Teresa Soto',
    email: 'csoto@uneg.edu.ve',
    role: 'Investigadora / Docente',
    roleType: 'docente',
    sede: 'Sede Chilemex - Rectorado',
    tipo: 'Entrada',
    metodo: 'Biometría FaceSentinel',
    isBiometric: true,
    hora: '08:14:45 AM',
    fecha: 'Hoy',
    status: 'Autorizado'
  },
  {
    id: 'log-105',
    user: 'Lic. Roberto Díaz',
    email: 'rdiaz@uneg.edu.ve',
    role: 'Control de Estudios',
    roleType: 'administrativo',
    sede: 'Sede Atlántico - Taquilla 3',
    tipo: 'Entrada',
    metodo: 'Credencial Institucional',
    isBiometric: false,
    hora: '08:20:02 AM',
    fecha: 'Hoy',
    status: 'Autorizado'
  },
  {
    id: 'log-106',
    user: 'Valeria Gómez',
    email: 'vgomez@uneg.edu.ve',
    role: 'Estudiante (Ciencias Fiscales)',
    roleType: 'estudiante',
    sede: 'Sede Villa Asia - Puerta 1',
    tipo: 'Entrada',
    metodo: 'Biometría FaceSentinel',
    isBiometric: true,
    hora: '08:29:50 AM',
    fecha: 'Hoy',
    status: 'Autorizado'
  },
  {
    id: 'log-107',
    user: 'Tec. Manuel Zambrano',
    email: 'mzambrano@uneg.edu.ve',
    role: 'Soporte Técnico DTIC',
    roleType: 'administrativo',
    sede: 'Sede Atlántico - Laboratorio 4',
    tipo: 'Salida',
    metodo: 'Biometría FaceSentinel',
    isBiometric: true,
    hora: '08:42:10 AM',
    fecha: 'Hoy',
    status: 'Autorizado'
  }
];

export default function Home() {
  const { user } = useAuth();
  const [logs, setLogs] = useState(INITIAL_LOGS);
  const [filterRole, setFilterRole] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSede, setSelectedSede] = useState('Todas');
  const [feedbackMsg, setFeedbackMsg] = useState(null);

  // Registro de marcaje interactivo por el usuario actual
  function handleMarcaje(tipo) {
    const now = new Date();
    const hora = now.toLocaleTimeString('es-VE', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });

    const newLog = {
      id: `log-${Date.now()}`,
      user: user?.name || 'Usuario UNEG',
      email: user?.email || 'usuario@uneg.edu.ve',
      role: 'Personal Autenticado',
      roleType: 'mi_marcaje',
      sede: 'Sede Atlántico - Terminal de Acceso',
      tipo: tipo,
      metodo: user?.has_biometrics_enrolled
        ? 'Biometría FaceSentinel'
        : 'Credencial Institucional',
      isBiometric: !!user?.has_biometrics_enrolled,
      hora: hora,
      fecha: 'Hoy',
      status: 'Autorizado'
    };

    setLogs(prev => [newLog, ...prev]);

    setFeedbackMsg({
      tipo,
      hora,
      metodo: user?.has_biometrics_enrolled ? 'Biometría Facial FaceSentinel' : 'Credencial de Usuario'
    });

    setTimeout(() => {
      setFeedbackMsg(null);
    }, 5000);
  }

  // Filtrado de registros
  const filteredLogs = useMemo(() => {
    return logs.filter(log => {
      const matchRole =
        filterRole === 'all'
          ? true
          : filterRole === 'mis_marcajes'
          ? log.email === user?.email || log.roleType === 'mi_marcaje'
          : log.roleType === filterRole;

      const matchSede =
        selectedSede === 'Todas' ? true : log.sede.toLowerCase().includes(selectedSede.toLowerCase());

      const matchSearch =
        searchQuery === ''
          ? true
          : log.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
            log.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            log.sede.toLowerCase().includes(searchQuery.toLowerCase());

      return matchRole && matchSede && matchSearch;
    });
  }, [logs, filterRole, selectedSede, searchQuery, user?.email]);

  return (
    <div className="uneg-home-container">
      <style>{`
        .uneg-home-container {
          min-height: calc(100vh - 120px);
          background: #f4f7fb;
          padding: 2rem 1.5rem 3.5rem;
          font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
        }

        .uneg-home-wrapper {
          max-width: 1240px;
          margin: 0 auto;
        }

        /* Hero Banner del Panel */
        .uneg-hero-panel {
          background: linear-gradient(135deg, #0f2744 0%, #173b6c 50%, #2563eb 100%);
          border-radius: 20px;
          padding: 2.2rem 2.5rem;
          color: #ffffff;
          box-shadow: 0 10px 30px -5px rgba(15, 39, 68, 0.2);
          margin-bottom: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1.5rem;
          position: relative;
          overflow: hidden;
        }

        .uneg-hero-panel::after {
          content: '';
          position: absolute;
          right: -50px;
          bottom: -50px;
          width: 250px;
          height: 250px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }

        .uneg-hero-info {
          max-width: 680px;
        }

        .uneg-hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(8px);
          padding: 0.3rem 0.8rem;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 700;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: #dbeafe;
          margin-bottom: 0.8rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }

        .uneg-hero-title {
          font-size: 1.85rem;
          font-weight: 800;
          color: #ffffff;
          line-height: 1.25;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .uneg-hero-sub {
          font-size: 0.95rem;
          color: #bfdbfe;
          line-height: 1.5;
        }

        /* Botonera de Acción de Marcaje en el Hero */
        .uneg-hero-actions {
          background: rgba(255, 255, 255, 0.98);
          padding: 1.25rem;
          border-radius: 16px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          min-width: 280px;
          color: #0f2744;
        }

        .uneg-hero-actions-title {
          font-size: 0.82rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          color: #173b6c;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .uneg-btn-marcaje-in {
          padding: 0.75rem 1rem;
          background: #10b981;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(16, 185, 129, 0.25);
        }

        .uneg-btn-marcaje-in:hover {
          background: #059669;
          transform: translateY(-1px);
        }

        .uneg-btn-marcaje-out {
          padding: 0.75rem 1rem;
          background: #2563eb;
          color: #ffffff;
          border: none;
          border-radius: 10px;
          font-size: 0.88rem;
          font-weight: 700;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.2s ease;
          box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
        }

        .uneg-btn-marcaje-out:hover {
          background: #1d4ed8;
          transform: translateY(-1px);
        }

        /* Notificación de feedback de marcaje */
        .uneg-toast-feedback {
          background: #ecfdf5;
          border: 1.5px solid #10b981;
          color: #065f46;
          border-radius: 14px;
          padding: 1rem 1.4rem;
          margin-bottom: 1.8rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          box-shadow: 0 6px 18px rgba(16, 185, 129, 0.15);
          animation: slideIn 0.3s ease-out;
        }

        @keyframes slideIn {
          from { opacity: 0; transform: translateY(-8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Tarjetas de Métricas Institucionales (KPIs) */
        .uneg-metrics-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: 1.25rem;
          margin-bottom: 2rem;
        }

        .uneg-metric-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 16px;
          padding: 1.35rem;
          box-shadow: 0 4px 12px rgba(15, 39, 68, 0.05);
          display: flex;
          align-items: flex-start;
          gap: 1.1rem;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .uneg-metric-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(15, 39, 68, 0.08);
          border-color: #93c5fd;
        }

        .uneg-metric-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .icon-navy {
          background: #eff6ff;
          color: #2563eb;
        }

        .icon-emerald {
          background: #ecfdf5;
          color: #10b981;
        }

        .icon-amber {
          background: #fef3c7;
          color: #d97706;
        }

        .icon-indigo {
          background: #e0e7ff;
          color: #4f46e5;
        }

        .uneg-metric-info {
          display: flex;
          flex-direction: column;
        }

        .uneg-metric-label {
          font-size: 0.78rem;
          font-weight: 700;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          margin-bottom: 0.25rem;
        }

        .uneg-metric-val {
          font-size: 1.65rem;
          font-weight: 800;
          color: #0f2744;
          letter-spacing: -0.02em;
          line-height: 1.1;
        }

        .uneg-metric-trend {
          font-size: 0.72rem;
          font-weight: 600;
          color: #10b981;
          margin-top: 0.35rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        /* Sección de Puntos de Acceso / Torniquetes por Sede */
        .uneg-terminals-section {
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 18px;
          padding: 1.4rem 1.6rem;
          margin-bottom: 2rem;
          box-shadow: 0 4px 12px rgba(15, 39, 68, 0.04);
        }

        .uneg-section-title {
          font-size: 1.15rem;
          font-weight: 800;
          color: #0f2744;
          margin-bottom: 0.3rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .uneg-section-sub {
          font-size: 0.82rem;
          color: #64748b;
          margin-bottom: 1.25rem;
        }

        .uneg-terminals-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
          gap: 1rem;
        }

        .uneg-terminal-item {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          transition: all 0.2s ease;
        }

        .uneg-terminal-item:hover {
          background: #eff6ff;
          border-color: #bfdbfe;
        }

        .uneg-terminal-title {
          font-size: 0.86rem;
          font-weight: 700;
          color: #173b6c;
          margin-bottom: 0.15rem;
        }

        .uneg-terminal-loc {
          font-size: 0.75rem;
          color: #64748b;
        }

        .uneg-terminal-status {
          display: inline-flex;
          align-items: center;
          gap: 0.35rem;
          font-size: 0.72rem;
          font-weight: 700;
          padding: 0.25rem 0.55rem;
          border-radius: 999px;
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
        }

        /* Tabla de Registros en Vivo */
        .uneg-table-card {
          background: #ffffff;
          border: 1px solid #cbd5e1;
          border-radius: 18px;
          box-shadow: 0 6px 20px rgba(15, 39, 68, 0.06);
          overflow: hidden;
        }

        .uneg-table-header {
          padding: 1.5rem 1.6rem;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .uneg-search-input {
          padding: 0.6rem 0.9rem 0.6rem 2.2rem;
          background: #f8fafc;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          font-size: 0.85rem;
          color: #0f2744;
          width: 280px;
          outline: none;
          transition: all 0.2s ease;
        }

        .uneg-search-input:focus {
          border-color: #2563eb;
          background: #ffffff;
          box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.12);
        }

        .uneg-filter-pills {
          display: flex;
          gap: 0.4rem;
          flex-wrap: wrap;
          padding: 0.8rem 1.6rem;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .uneg-pill {
          padding: 0.35rem 0.75rem;
          border-radius: 999px;
          font-size: 0.78rem;
          font-weight: 600;
          cursor: pointer;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #475569;
          transition: all 0.15s ease;
        }

        .uneg-pill:hover {
          border-color: #2563eb;
          color: #2563eb;
        }

        .uneg-pill.active {
          background: #2563eb;
          color: #ffffff;
          border-color: #2563eb;
        }

        .uneg-table-responsive {
          width: 100%;
          overflow-x: auto;
        }

        .uneg-table {
          width: 100%;
          border-collapse: collapse;
          text-align: left;
          font-size: 0.86rem;
        }

        .uneg-table th {
          background: #f1f5f9;
          color: #173b6c;
          font-weight: 700;
          padding: 0.9rem 1.25rem;
          border-bottom: 1.5px solid #cbd5e1;
          white-space: nowrap;
          font-size: 0.76rem;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .uneg-table td {
          padding: 0.95rem 1.25rem;
          border-bottom: 1px solid #e2e8f0;
          color: #1e293b;
          vertical-align: middle;
        }

        .uneg-table tr:hover td {
          background: #f8fafc;
        }

        .uneg-user-cell {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .uneg-avatar-circle {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          background: linear-gradient(135deg, #173b6c 0%, #2563eb 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .uneg-role-badge {
          display: inline-block;
          font-size: 0.74rem;
          padding: 0.2rem 0.55rem;
          border-radius: 6px;
          font-weight: 600;
        }

        .badge-docente {
          background: #eff6ff;
          color: #1d4ed8;
          border: 1px solid #bfdbfe;
        }

        .badge-admin {
          background: #fef3c7;
          color: #92400e;
          border: 1px solid #fde68a;
        }

        .badge-estudiante {
          background: #f0fdf4;
          color: #166534;
          border: 1px solid #bbf7d0;
        }

        .badge-marcaje {
          background: #faf5ff;
          color: #6b21a8;
          border: 1px solid #e9d5ff;
        }

        .badge-tipo-in {
          background: #ecfdf5;
          color: #065f46;
          border: 1px solid #a7f3d0;
          padding: 0.25rem 0.55rem;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .badge-tipo-out {
          background: #eff6ff;
          color: #1e40af;
          border: 1px solid #bfdbfe;
          padding: 0.25rem 0.55rem;
          border-radius: 999px;
          font-size: 0.74rem;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 0.3rem;
        }

        .uneg-biometric-verified {
          display: flex;
          align-items: center;
          gap: 0.4rem;
          color: #059669;
          font-weight: 600;
          font-size: 0.8rem;
        }

        .uneg-table-empty {
          text-align: center;
          padding: 3rem 1rem;
          color: #64748b;
        }
      `}</style>

      <div className="uneg-home-wrapper">
        {/* Banner Superior Principal del Sistema */}
        <div className="uneg-hero-panel">
          <div className="uneg-hero-info">
            <div className="uneg-hero-badge">
              <UnegLogo size={18} />
              <span>Universidad Nacional Experimental de Guayana</span>
            </div>
            <h1 className="uneg-hero-title">
              Portal de Control de Accesos y Asistencia
            </h1>
            <p className="uneg-hero-sub">
              Monitoreo y marcaje de jornada universitaria en tiempo real. Validado con el motor de reconocimiento facial biométrico <strong>FaceSentinel SSO</strong>.
            </p>
          </div>

          {/* Marcaje Rápido Personal */}
          <div className="uneg-hero-actions">
            <div className="uneg-hero-actions-title">
              <span>Marcaje Personal</span>
              <span style={{ color: '#2563eb', fontWeight: 600 }}>{user?.name?.split(' ')[0]}</span>
            </div>
            <button
              onClick={() => handleMarcaje('Entrada')}
              className="uneg-btn-marcaje-in"
              title="Registrar marcaje de entrada en la jornada actual"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              Marcar Entrada
            </button>
            <button
              onClick={() => handleMarcaje('Salida')}
              className="uneg-btn-marcaje-out"
              title="Registrar marcaje de salida"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
              Marcar Salida
            </button>
          </div>
        </div>

        {/* Feedback visual si se realiza un marcaje */}
        {feedbackMsg && (
          <div className="uneg-toast-feedback">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              <div>
                <strong>¡Marcaje de {feedbackMsg.tipo} Registrado Exitosamente!</strong>
                <p style={{ margin: 0, fontSize: '0.82rem', color: '#047857' }}>
                  Hora: {feedbackMsg.hora} • Método de verificación: {feedbackMsg.metodo} • Sede Atlántico
                </p>
              </div>
            </div>
            <Link to="/profile" style={{ fontSize: '0.82rem', fontWeight: 700, color: '#047857', textDecoration: 'underline' }}>
              Ver mi credencial
            </Link>
          </div>
        )}

        {/* Métricas Principales (KPIs) */}
        <div className="uneg-metrics-grid">
          <div className="uneg-metric-card">
            <div className="uneg-metric-icon icon-navy">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <div className="uneg-metric-info">
              <span className="uneg-metric-label">Accesos Totales Hoy</span>
              <span className="uneg-metric-val">1,482</span>
              <span className="uneg-metric-trend">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <polyline points="18 15 12 9 6 15" />
                </svg>
                +8.2% vs. ayer
              </span>
            </div>
          </div>

          <div className="uneg-metric-card">
            <div className="uneg-metric-icon icon-emerald">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <path d="M9 11.5a3 3 0 1 0 6 0c0-1.66-1.34-3-3-3s-3 1.34-3 3z" />
                <path d="M12 2a4 4 0 0 1 4 4c0 1.95-1.4 3.58-3.25 3.93" />
                <path d="M16 8a4 4 0 0 1-8 0" />
                <path d="M5 16c0-2.76 2.24-5 5-5h4c2.76 0 5 2.24 5 5" />
              </svg>
            </div>
            <div className="uneg-metric-info">
              <span className="uneg-metric-label">Biometría FaceSentinel</span>
              <span className="uneg-metric-val">96.8%</span>
              <span className="uneg-metric-trend">
                Alta precisión de coincidencia
              </span>
            </div>
          </div>

          <div className="uneg-metric-card">
            <div className="uneg-metric-icon icon-amber">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <div className="uneg-metric-info">
              <span className="uneg-metric-label">Asistencia Docente</span>
              <span className="uneg-metric-val">97.4%</span>
              <span className="uneg-metric-trend">
                312 Docentes registrados
              </span>
            </div>
          </div>

          <div className="uneg-metric-card">
            <div className="uneg-metric-icon icon-indigo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
                <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
                <line x1="6" y1="6" x2="6.01" y2="6" />
                <line x1="6" y1="18" x2="6.01" y2="18" />
              </svg>
            </div>
            <div className="uneg-metric-info">
              <span className="uneg-metric-label">Torniquetes Activos</span>
              <span className="uneg-metric-val">12 / 12</span>
              <span className="uneg-metric-trend">
                100% Operatividad en sedes
              </span>
            </div>
          </div>
        </div>

        {/* Puntos de Acceso / Sedes Universitarias */}
        <div className="uneg-terminals-section">
          <div className="uneg-section-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#2563eb" strokeWidth="2.5">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Puntos de Control y Acceso por Sede
          </div>
          <p className="uneg-section-sub">
            Estado de enlace y sincronización biométrica con los módulos de torniquetes de la universidad.
          </p>

          <div className="uneg-terminals-grid">
            <div className="uneg-terminal-item">
              <div>
                <div className="uneg-terminal-title">Sede Atlántico (Principal)</div>
                <div className="uneg-terminal-loc">Pto. Ordaz • Torniquetes 1, 2 y 3</div>
              </div>
              <span className="uneg-terminal-status">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }}></span>
                Operativo
              </span>
            </div>

            <div className="uneg-terminal-item">
              <div>
                <div className="uneg-terminal-title">Sede Chilemex</div>
                <div className="uneg-terminal-loc">Pto. Ordaz • Rectorado y Admón.</div>
              </div>
              <span className="uneg-terminal-status">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }}></span>
                Operativo
              </span>
            </div>

            <div className="uneg-terminal-item">
              <div>
                <div className="uneg-terminal-title">Sede Villa Asia</div>
                <div className="uneg-terminal-loc">Pto. Ordaz • Talleres e Ingeniería</div>
              </div>
              <span className="uneg-terminal-status">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }}></span>
                Operativo
              </span>
            </div>

            <div className="uneg-terminal-item">
              <div>
                <div className="uneg-terminal-title">Sede Ciudad Bolívar</div>
                <div className="uneg-terminal-loc">Jardín Botánico • Edif. Académico</div>
              </div>
              <span className="uneg-terminal-status">
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }}></span>
                Operativo
              </span>
            </div>
          </div>
        </div>

        {/* Tabla de Registros en Vivo */}
        <div className="uneg-table-card">
          <div className="uneg-table-header">
            <div>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f2744', margin: 0 }}>
                Registros de Acceso y Asistencia en Vivo
              </h2>
              <p style={{ margin: '0.2rem 0 0', fontSize: '0.82rem', color: '#64748b' }}>
                Monitoreo de entradas y salidas registradas en los torniquetes universitarios
              </p>
            </div>

            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <span style={{ position: 'absolute', left: '0.8rem', color: '#64748b', display: 'flex' }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Buscar por nombre, correo o sede..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="uneg-search-input"
              />
            </div>
          </div>

          {/* Filtros de estamentos */}
          <div className="uneg-filter-pills">
            <button
              onClick={() => setFilterRole('all')}
              className={`uneg-pill ${filterRole === 'all' ? 'active' : ''}`}
            >
              Todos los estamentos ({logs.length})
            </button>
            <button
              onClick={() => setFilterRole('mis_marcajes')}
              className={`uneg-pill ${filterRole === 'mis_marcajes' ? 'active' : ''}`}
            >
              Mis marcajes
            </button>
            <button
              onClick={() => setFilterRole('docente')}
              className={`uneg-pill ${filterRole === 'docente' ? 'active' : ''}`}
            >
              Docentes e Investigadores
            </button>
            <button
              onClick={() => setFilterRole('administrativo')}
              className={`uneg-pill ${filterRole === 'administrativo' ? 'active' : ''}`}
            >
              Personal Administrativo
            </button>
            <button
              onClick={() => setFilterRole('estudiante')}
              className={`uneg-pill ${filterRole === 'estudiante' ? 'active' : ''}`}
            >
              Estudiantes
            </button>
          </div>

          {/* Tabla de Datos */}
          <div className="uneg-table-responsive">
            <table className="uneg-table">
              <thead>
                <tr>
                  <th>Hora / Fecha</th>
                  <th>Personal / Estudiante</th>
                  <th>Estamento / Rol</th>
                  <th>Sede & Ubicación</th>
                  <th>Tipo Marcaje</th>
                  <th>Método de Validación</th>
                  <th>Estado</th>
                </tr>
              </thead>
              <tbody>
                {filteredLogs.length > 0 ? (
                  filteredLogs.map(log => (
                    <tr key={log.id}>
                      <td style={{ whiteSpace: 'nowrap', fontWeight: 600, color: '#173b6c' }}>
                        <div>{log.hora}</div>
                        <div style={{ fontSize: '0.72rem', color: '#94a3b8' }}>{log.fecha}</div>
                      </td>
                      <td>
                        <div className="uneg-user-cell">
                          <div className="uneg-avatar-circle">
                            {log.user ? log.user.charAt(0).toUpperCase() : 'U'}
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, color: '#0f2744' }}>{log.user}</div>
                            <div style={{ fontSize: '0.75rem', color: '#64748b' }}>{log.email}</div>
                          </div>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`uneg-role-badge ${
                            log.roleType === 'docente'
                              ? 'badge-docente'
                              : log.roleType === 'administrativo'
                              ? 'badge-admin'
                              : log.roleType === 'estudiante'
                              ? 'badge-estudiante'
                              : 'badge-marcaje'
                          }`}
                        >
                          {log.role}
                        </span>
                      </td>
                      <td style={{ color: '#334e68' }}>{log.sede}</td>
                      <td>
                        {log.tipo === 'Entrada' ? (
                          <span className="badge-tipo-in">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <polyline points="15 3 21 3 21 9" />
                              <polyline points="9 21 3 21 3 15" />
                              <line x1="21" y1="3" x2="14" y2="10" />
                              <line x1="3" y1="21" x2="10" y2="14" />
                            </svg>
                            Entrada
                          </span>
                        ) : (
                          <span className="badge-tipo-out">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                            Salida
                          </span>
                        )}
                      </td>
                      <td>
                        {log.isBiometric ? (
                          <div className="uneg-biometric-verified">
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                              <polyline points="22 4 12 14.01 9 11.01" />
                            </svg>
                            <span>{log.metodo}</span>
                          </div>
                        ) : (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: '#64748b', fontSize: '0.8rem' }}>
                            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                              <rect x="3" y="4" width="18" height="16" rx="2" />
                              <line x1="7" y1="8" x2="17" y2="8" />
                              <line x1="7" y1="12" x2="13" y2="12" />
                            </svg>
                            <span>{log.metodo}</span>
                          </div>
                        )}
                      </td>
                      <td>
                        <span style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '0.3rem',
                          background: '#ecfdf5',
                          color: '#065f46',
                          border: '1px solid #a7f3d0',
                          fontSize: '0.74rem',
                          fontWeight: 700,
                          padding: '0.2rem 0.6rem',
                          borderRadius: '6px'
                        }}>
                          {log.status}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="uneg-table-empty">
                      No se encontraron registros de acceso coincidentes con el criterio de búsqueda.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
