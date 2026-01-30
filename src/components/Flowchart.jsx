import React, { useEffect, useRef, useState } from 'react';

// Komponen ini sekarang mengasumsikan 'mermaid' ada di 'window'
const Flowchart = ({ chartDefinition }) => {
  const chartRef = useRef(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!chartRef.current) return;
      
      // Pastikan mermaid dari CDN sudah dimuat
      if (!window.mermaid) {
        setError("Gagal memuat library Mermaid dari CDN.");
        return;
      }
      
      const mermaidAPI = window.mermaid;
      mermaidAPI.initialize({
        theme: 'default',
        securityLevel: 'loose',
      });

      setError(null);
      chartRef.current.innerHTML = 'Loading diagram...';

      try {
        const id = `mermaid-diagram-${Math.random().toString(36).substr(2, 9)}`;
        const { svg: svgCode } = await mermaidAPI.render(id, chartDefinition);
        chartRef.current.innerHTML = svgCode;
      } catch (err) {
        console.error('Error rendering mermaid diagram:', err);
        setError("Gagal merender diagram. Periksa sintaks.");
        chartRef.current.innerHTML = "Gagal merender diagram.";
      }
    };

    if (chartDefinition) {
      renderDiagram();
    }
  }, [chartDefinition]);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return <div ref={chartRef}>Memuat library diagram...</div>;
};

export default Flowchart;