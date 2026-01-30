import React, { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

// Konfigurasi awal untuk Mermaid
mermaid.initialize({
  // startOnLoad: true, // Hapus ini
  theme: 'default',
  securityLevel: 'loose',
});

const Flowchart = ({ chartDefinition }) => {
  const chartRef = useRef(null); // Ref untuk elemen div target
  const [error, setError] = useState(null); // State untuk menangani error render

  useEffect(() => {
    const renderDiagram = async () => {
      if (!chartRef.current) return; // Pastikan ref sudah ada

      setError(null); // Reset error
      chartRef.current.innerHTML = 'Loading diagram...'; // Tampilkan pesan loading

      try {
        const id = `mermaid-diagram-${Math.random().toString(36).substr(2, 9)}`;
        // mermaid.render() ke elemen div target
        const { svg: svgCode } = await mermaid.render(id, chartDefinition);
        chartRef.current.innerHTML = svgCode; // Masukkan SVG ke dalam div
      } catch (err) {
        console.error('Error rendering mermaid diagram:', err);
        setError("Gagal merender diagram. Pastikan sintaks Mermaid benar.");
        chartRef.current.innerHTML = "Gagal merender diagram."; // Tampilkan pesan error di UI
      }
    };

    if (chartDefinition) {
      renderDiagram();
    }
  }, [chartDefinition]);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return <div ref={chartRef}>Loading diagram...</div>; // Render ke div dengan ref
};

export default Flowchart;