import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth

function Profile() {
  const { user, logout } = useAuth(); // Ambil data user dan fungsi logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login'); // Arahkan ke login setelah logout
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '30px',
        borderBottom: '1px solid #eee',
        paddingBottom: '15px'
      }}>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: '#007bff' }}>&lt; Kembali</Link>
        <h1 style={{ margin: 0, color: '#333' }}>Profil Pengguna</h1>
        <div></div> {/* Placeholder for alignment */}
      </header>

      <div style={{
        backgroundColor: '#fff',
        padding: '30px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '30px' }}>
          <div style={{
            width: '100px',
            height: '100px',
            borderRadius: '50%',
            backgroundColor: '#ddd',
            display: 'inline-flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '3em',
            color: '#666'
          }}>👤</div> {/* Placeholder for avatar */}
          <h2 style={{ marginTop: '15px', marginBottom: '5px', color: '#333' }}>{user ? user.email : 'Nama Pengguna'}</h2>
          <p style={{ color: '#666' }}>{user ? user.email : 'pengguna@example.com'}</p>
        </div>

        <h3 style={{ borderBottom: '1px solid #eee', paddingBottom: '10px', marginBottom: '20px', color: '#333' }}>Statistik Belajar</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '30px' }}>
          <div>
            <p style={statLabelStyle}>Total Waktu Belajar:</p>
            <p style={statValueStyle}>15 Jam 30 Menit</p>
          </div>
          <div>
            <p style={statLabelStyle}>Modul Selesai:</p>
            <p style={statValueStyle}>5 dari 10</p>
          </div>
          <div>
            <p style={statLabelStyle}>Kuis Diikuti:</p>
            <p style={statValueStyle}>20 Kuis</p>
          </div>
          <div>
            <p style={statLabelStyle}>Poin:</p>
            <p style={statValueStyle}>1250 Poin</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <button onClick={handleLogout} style={logoutButtonStyle}>Logout</button>
        </div>
      </div>
    </div>
  );
}

const statLabelStyle = {
  margin: '0',
  fontSize: '0.9em',
  color: '#888'
};

const statValueStyle = {
  margin: '0',
  fontSize: '1.2em',
  fontWeight: 'bold',
  color: '#333'
};

const logoutButtonStyle = {
  padding: '10px 20px',
  borderRadius: '4px',
  border: 'none',
  backgroundColor: '#dc3545',
  color: 'white',
  fontSize: '1em',
  cursor: 'pointer',
};

export default Profile;