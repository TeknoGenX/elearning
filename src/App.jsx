import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulasikan waktu loading splash screen
    const timer = setTimeout(() => {
      setIsLoading(false);
      navigate('/login'); // Arahkan ke halaman login setelah splash
    }, 3000); // Tampilkan splash screen selama 3 detik

    return () => clearTimeout(timer); // Bersihkan timer saat komponen di-unmount
  }, [navigate]);

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0', // Warna latar belakang terang
        color: '#333', // Warna teks gelap
        fontSize: '2em'
      }}>
        <h1>FUNDAMENTALS CODE</h1>
        <p>Belajar Konsep Pemrograman Lebih Mudah</p>
        {/* Logo aplikasi akan ditambahkan di sini nantinya */}
      </div>
    );
  }

  // Komponen ini akan mengarahkan via navigate('/login'), jadi bagian return null; ini seharusnya tidak tercapai
  return null;
}

export default App;