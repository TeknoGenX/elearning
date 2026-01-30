import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

// Konfigurasi awal untuk Mermaid
mermaid.initialize({
  startOnLoad: true,
  theme: 'default',
  securityLevel: 'loose',
});

const Flowchart = ({ chartDefinition }) => {
  const [svg, setSvg] = useState('');

  useEffect(() => {
    const renderDiagram = async () => {
      try {
        // ID unik untuk setiap render untuk menghindari konflik
        const id = `mermaid-diagram-${Math.random().toString(36).substr(2, 9)}`;
        
        // mermaid.render() menghasilkan SVG sebagai teks
        const { svg: svgCode } = await mermaid.render(id, chartDefinition);
        setSvg(svgCode);
      } catch (error) {
        console.error('Error rendering mermaid diagram:', error);
      }
    };

    if (chartDefinition) {
      renderDiagram();
    }
  }, [chartDefinition]);

  // dangerouslySetInnerHTML digunakan karena mermaid.render() menghasilkan string HTML/SVG
  return svg ? <div dangerouslySetInnerHTML={{ __html: svg }} /> : <div>Loading diagram...</div>;
};

export default Flowchart;