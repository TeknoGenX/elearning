import React from 'react';
import Flowchart from '../components/Flowchart';
import { Link } from 'react-router-dom';

function Documentation() {
  // Definisi flowchart dalam sintaks Mermaid yang sudah diperbaiki
  const flowchartDefinition = `
    graph TD
      subgraph "Alur Pengguna Belum Login"
        A[Mulai] --> B(Buka Aplikasi);
        B --> C[/login];
        C --> D{Input Kredensial};
        D -- Gagal --> C;
        D -- Sukses --> E;
      end
      
      subgraph "Alur Pengguna Sudah Login"
        E[/dashboard] --> F(Pilih Modul);
        F --> G[/module/id];
        G --> H(Kerjakan Kuis);
        H --> I[/quiz/result];
        I --> E;
        E --> J(Lihat Profil);
        J --> K{Logout?};
        K -- Ya --> C;
      end
    `;

  return (
    <div style={{ padding: '30px', maxWidth: '1000px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Dokumentasi Alur Aplikasi</h1>
      <p style={{ textAlign: 'center' }}>
        Ini adalah visualisasi alur logika dan navigasi aplikasi yang dirender menggunakan Mermaid.js.
        <br />
        <Link to="/dashboard">Kembali ke Dashboard</Link>
      </p>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '40px',
        padding: '20px',
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.08)'
      }}>
        <Flowchart chartDefinition={flowchartDefinition} />
      </div>
    </div>
  );
}

export default Documentation;