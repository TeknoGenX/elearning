import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useModules } from '../context/ModuleContext';

function ModuleDetail() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { getModuleById } = useModules();
  const currentModule = getModuleById(moduleId);

  // State untuk melacak bab dan sub-bab yang aktif
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);
  const [activeSubChapterIndex, setActiveSubChapterIndex] = useState(0);
  const [expandedChapters, setExpandedChapters] = useState([0]); // Bab pertama terbuka secara default

  if (!currentModule || !currentModule.chapters) {
    return (
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h2>Materi untuk modul ini tidak tersedia.</h2>
        <Link to="/dashboard">Kembali ke Dashboard</Link>
      </div>
    );
  }

  const handleStartQuiz = () => {
    navigate(`/quiz/${moduleId}`);
  };

  const handleSubChapterSelect = (chapIndex, subChapIndex) => {
    setActiveChapterIndex(chapIndex);
    setActiveSubChapterIndex(subChapIndex);
  };
  
  const toggleChapter = (chapIndex) => {
    setExpandedChapters(prev => 
      prev.includes(chapIndex) ? prev.filter(i => i !== chapIndex) : [...prev, chapIndex]
    );
  };

  const activeSubChapter = currentModule.chapters[activeChapterIndex]?.subChapters[activeSubChapterIndex];
  
  const isLastSubChapter = () => {
      const lastChapIndex = currentModule.chapters.length - 1;
      const lastSubChapIndex = currentModule.chapters[lastChapIndex].subChapters.length - 1;
      return activeChapterIndex === lastChapIndex && activeSubChapterIndex === lastSubChapIndex;
  }

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <header style={headerStyle}>
        <Link to="/dashboard" style={{ textDecoration: 'none', color: '#007bff' }}>&lt; Kembali</Link>
        <h1 style={{ margin: 0, color: '#333', fontSize: '1.8em', textAlign: 'center' }}>{currentModule.title}</h1>
        <div style={{width: '100px'}}></div>
      </header>

      <div style={mainLayoutStyle}>
        {/* Sidebar Navigasi */}
        <aside style={sidebarStyle}>
          <h3 style={{marginTop: 0}}>Daftar Materi</h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {currentModule.chapters.map((chapter, chapIndex) => (
              <li key={chapIndex} style={{marginBottom: '10px'}}>
                <div onClick={() => toggleChapter(chapIndex)} style={chapterTitleStyle}>
                  {chapter.chapterTitle}
                  <span>{expandedChapters.includes(chapIndex) ? '▲' : '▼'}</span>
                </div>
                {expandedChapters.includes(chapIndex) && (
                  <ul style={{ listStyle: 'none', paddingLeft: '20px', marginTop: '5px' }}>
                    {chapter.subChapters.map((sub, subChapIndex) => (
                      <li key={subChapIndex} onClick={() => handleSubChapterSelect(chapIndex, subChapIndex)} style={{
                        ...subChapterLinkStyle,
                        backgroundColor: chapIndex === activeChapterIndex && subChapIndex === activeSubChapterIndex ? '#e9ecef' : 'transparent',
                        fontWeight: chapIndex === activeChapterIndex && subChapIndex === activeSubChapterIndex ? 'bold' : 'normal',
                      }}>
                        {sub.subChapterTitle}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </aside>

        {/* Konten Utama */}
        <main style={contentStyle}>
          <h2>{activeSubChapter?.subChapterTitle || 'Pilih Materi'}</h2>
          <p style={{ lineHeight: '1.7', whiteSpace: 'pre-wrap' }}>
            {activeSubChapter?.subChapterContent || 'Silakan pilih bab dan sub-bab dari daftar di samping untuk memulai belajar.'}
          </p>
          
          {isLastSubChapter() && (
             <div style={{ marginTop: '40px', textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '20px' }}>
                <button onClick={handleStartQuiz} style={quizButtonStyle}>
                    Selesai & Kerjakan Kuis &gt;
                </button>
             </div>
          )}
        </main>
      </div>
    </div>
  );
}

// Styles
const headerStyle = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px', borderBottom: '1px solid #eee', paddingBottom: '15px' };
const mainLayoutStyle = { display: 'flex', gap: '20px', alignItems: 'flex-start' };
const sidebarStyle = { flex: '0 0 300px', backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)' };
const contentStyle = { flex: '1', backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.05)', minHeight: '400px' };
const chapterTitleStyle = { padding: '10px', fontWeight: 'bold', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f0f0f0' };
const subChapterLinkStyle = { padding: '10px', borderRadius: '5px', cursor: 'pointer', margin: '5px 0', transition: 'background-color 0.2s' };
const quizButtonStyle = { padding: '10px 20px', borderRadius: '5px', border: 'none', backgroundColor: '#28a745', color: 'white', fontSize: '1em', cursor: 'pointer', fontWeight: 'bold' };

export default ModuleDetail;