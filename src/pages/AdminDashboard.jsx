import React from 'react';
import { Link } from 'react-router-dom';
import { useModules } from '../context/ModuleContext';
import styles from './Dashboard.module.css'; // Kita bisa gunakan ulang style dari Dashboard

function AdminDashboard() {
  const { modules } = useModules();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Panel Admin Guru</h1>
        <Link to="/admin/create">
          <button style={{padding: '8px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px'}}>
            + Tambah Modul Baru
          </button>
        </Link>
      </header>

      <h2>Manajemen Modul</h2>
      <div className={styles.moduleGrid}>
        {modules.map(module => (
          <div key={module.id} className={styles.moduleCard} style={{borderLeftColor: '#6c757d'}}>
            <div>
              <h3 style={{ marginTop: 0, marginBottom: '10px' }}>{module.title}</h3>
              <p style={{ fontSize: '0.9em', color: '#666' }}>ID: {module.id}</p>
            </div>
            <div style={{textAlign: 'right'}}>
              <Link to={`/admin/edit/${module.id}`}>
                <button style={{padding: '5px 10px', backgroundColor: '#ffc107', color: 'black', border: 'none', borderRadius: '5px'}}>
                  Edit
                </button>
              </Link>
              {/* Tombol Delete bisa ditambahkan di sini */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;