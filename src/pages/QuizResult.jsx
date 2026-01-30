import React from 'react';
import { useLocation, Link } from 'react-router-dom';

function QuizResult() {
  const location = useLocation();
  const { score, total } = location.state || { score: 0, total: 0 };
  const percentage = total > 0 ? (score / total) * 100 : 0;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
      textAlign: 'center',
      backgroundColor: '#f8f8f8'
    }}>
      <div style={{
        backgroundColor: '#fff',
        padding: '50px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{ marginBottom: '20px', color: '#333' }}>Hasil Kuis</h1>
        <p style={{ fontSize: '1.2em' }}>Anda menjawab benar {score} dari {total} pertanyaan.</p>
        <div style={{ fontSize: '3em', fontWeight: 'bold', margin: '30px 0', color: percentage > 50 ? '#28a745' : '#dc3545' }}>
          {percentage.toFixed(0)}%
        </div>
        <p style={{ color: '#666' }}>{percentage > 50 ? 'Kerja bagus!' : 'Coba lagi untuk hasil yang lebih baik!'}</p>
        <div style={{ marginTop: '40px' }}>
          <Link to="/dashboard" style={buttonStyle}>Kembali ke Dashboard</Link>
        </div>
      </div>
    </div>
  );
}

const buttonStyle = {
  display: 'inline-block',
  padding: '12px 25px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#007bff',
  color: 'white',
  fontSize: '1em',
  cursor: 'pointer',
  textDecoration: 'none'
};

export default QuizResult;