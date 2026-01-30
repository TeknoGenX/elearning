import React from 'react';
import Flowchart from '../components/Flowchart';
import { Link } from 'react-router-dom';

function Documentation() {
  // Definisi flowchart dalam sintaks Mermaid
  const flowchartDefinition = `
    graph TD
      A[Start] --> B(Akses URL);
      B --> C{Rute Publik?};
      C -- Ya --> D[Tampil Halaman Publik / Admin];
      C -- Tidak --> E{Sudah Login?};
      E -- Ya --> F[Tampil Halaman Dashboard];
      E -- Tidak --> G[Tampil Halaman Login];
      F --> H(Pilih Modul);
      H --> I[Tampil Materi];
      I --> J(Kerjakan Kuis);
      J --> K[Tampil Hasil];
      K --> F;
      F --> L(Akses Profil);
      L --> M{Logout?};
      M -- Ya --> G;
      M -- Tidak --> F;
      D --> Z[End];
      G --> Z;
      F --> Z[End];
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