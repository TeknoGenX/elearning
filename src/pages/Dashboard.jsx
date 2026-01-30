import React from 'react';
import { Link } from 'react-router-dom';
import { useModules } from '../context/ModuleContext'; // Import useModules hook
import styles from './Dashboard.module.css';

function Dashboard() {
  const { modules } = useModules(); // Gunakan hook untuk mendapatkan modul

  const getStatusClass = (status) => {
    if (status === 'completed') return styles.moduleCardCompleted;
    if (status === 'in_progress') return styles.moduleCardInProgress;
    return '';
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Dashboard</h1>
        <Link to="/profile">Profil</Link>
      </header>

      <div className={styles.welcomeBanner}>
        <h2>Halo, Siswa!</h2>
        <p>Selamat datang kembali di Fundamentals Code. Mari lanjutkan perjalanan belajarmu!</p>
        <div className={styles.progressBarContainer}>
          <div className={styles.progressBar} style={{ width: '30%' }}></div>
        </div>
        <p style={{ fontSize: '0.9em', marginTop: '5px' }}>Progres Keseluruhan: 30%</p>
      </div>

      <h2>Modul Pembelajaran</h2>
      <div className={styles.moduleGrid}>
        {modules.map(module => (
          <Link to={`/module/${module.id}`} key={module.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={`${styles.moduleCard} ${getStatusClass(module.status)}`}>
              <div>
                <div className={styles.moduleIcon}>{module.icon}</div>
                <h3 style={{ marginTop: 0, marginBottom: '10px' }}>{module.title}</h3>
                <p style={{ fontSize: '0.9em', color: '#666' }}>{module.description}</p>
              </div>
              <div className={styles.moduleInfo}>
                Status: <span>
                  {module.status === 'completed' ? 'Selesai' :
                   module.status === 'in_progress' ? 'Dalam Proses' : 'Belum Dimulai'}
                </span>
                {module.status !== 'completed' && module.progress > 0 && ` (${module.progress}%)`}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;