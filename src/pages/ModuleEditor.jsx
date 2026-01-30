import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useModules } from '../context/ModuleContext';

function ModuleEditor() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { getModuleById, addModule, updateModule } = useModules();

  const isCreating = !moduleId;
  const [moduleData, setModuleData] = useState({
    title: '',
    description: '',
    icon: '📚',
    chapters: [{ chapterTitle: '', subChapters: [{ subChapterTitle: '', subChapterContent: '' }] }],
    quiz: []
  });

  useEffect(() => {
    if (!isCreating) {
      const existingModule = getModuleById(moduleId);
      if (existingModule) {
        // Memastikan data yang ada memiliki struktur yang benar
        const validData = {
          ...existingModule,
          chapters: existingModule.chapters && existingModule.chapters.length > 0 ? existingModule.chapters : [{ chapterTitle: '', subChapters: [{ subChapterTitle: '', subChapterContent: '' }] }],
          quiz: existingModule.quiz || []
        };
        setModuleData(validData);
      }
    }
  }, [moduleId, isCreating, getModuleById]);

  // --- Handlers ---
  const handleInputChange = (e) => setModuleData({ ...moduleData, [e.target.name]: e.target.value });

  const handleChapterChange = (cIndex, value) => {
    const newChapters = [...moduleData.chapters];
    newChapters[cIndex].chapterTitle = value;
    setModuleData({ ...moduleData, chapters: newChapters });
  };

  const addChapter = () => setModuleData({ ...moduleData, chapters: [...moduleData.chapters, { chapterTitle: '', subChapters: [{ subChapterTitle: '', subChapterContent: '' }] }] });
  
  const removeChapter = (cIndex) => setModuleData({ ...moduleData, chapters: moduleData.chapters.filter((_, i) => i !== cIndex) });

  const handleSubChapterChange = (cIndex, sIndex, field, value) => {
    const newChapters = [...moduleData.chapters];
    newChapters[cIndex].subChapters[sIndex][field] = value;
    setModuleData({ ...moduleData, chapters: newChapters });
  };

  const addSubChapter = (cIndex) => {
    const newChapters = [...moduleData.chapters];
    newChapters[cIndex].subChapters.push({ subChapterTitle: '', subChapterContent: '' });
    setModuleData({ ...moduleData, chapters: newChapters });
  };

  const removeSubChapter = (cIndex, sIndex) => {
    const newChapters = [...moduleData.chapters];
    newChapters[cIndex].subChapters = newChapters[cIndex].subChapters.filter((_, i) => i !== sIndex);
    setModuleData({ ...moduleData, chapters: newChapters });
  };
  
  // Quiz handlers (tetap sama)
  const handleQuizChange = (qIndex, field, value) => {
    const newQuiz = [...moduleData.quiz];
    newQuiz[qIndex][field] = value;
    setModuleData({ ...moduleData, quiz: newQuiz });
  };
  const handleOptionChange = (qIndex, oIndex, value) => {
    const newQuiz = [...moduleData.quiz];
    newQuiz[qIndex].options[oIndex] = value;
    setModuleData({ ...moduleData, quiz: newQuiz });
  };
  const addQuestion = () => setModuleData({ ...moduleData, quiz: [...(moduleData.quiz || []), { question: '', options: ['', '', '', ''], answer: '' }] });
  const removeQuestion = (index) => setModuleData({ ...moduleData, quiz: moduleData.quiz.filter((_, i) => i !== index) });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCreating) {
      addModule(moduleData);
    } else {
      updateModule(moduleId, moduleData);
    }
    navigate('/admin');
  };

  return (
    <div style={{ padding: '30px', maxWidth: '900px', margin: 'auto' }}>
      <h1>{isCreating ? 'Buat Modul Baru' : 'Edit Modul'}</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
        
        <div style={sectionStyle}>
          <h3>Detail Modul</h3>
          <input name="title" value={moduleData.title} onChange={handleInputChange} placeholder="Judul Modul" required style={inputStyle} />
          <input name="description" value={moduleData.description} onChange={handleInputChange} placeholder="Deskripsi Singkat" required style={inputStyle} />
          <input name="icon" value={moduleData.icon} onChange={handleInputChange} placeholder="Ikon Modul (emoji)" style={inputStyle} />
        </div>

        <div style={sectionStyle}>
          <h3>Konten Materi</h3>
          {moduleData.chapters.map((chap, cIndex) => (
            <div key={cIndex} style={{ ...sectionStyle, backgroundColor: '#fcfcfc', border: '1px solid #e9ecef' }}>
              <input value={chap.chapterTitle} onChange={(e) => handleChapterChange(cIndex, e.target.value)} placeholder={`Judul Bab ${cIndex + 1}`} style={{...inputStyle, fontWeight: 'bold', fontSize: '1.2em', marginBottom: '15px'}} />
              {chap.subChapters.map((sub, sIndex) => (
                <div key={sIndex} style={{ borderTop: '1px dashed #ccc', padding: '15px', marginLeft: '20px' }}>
                  <input value={sub.subChapterTitle} onChange={(e) => handleSubChapterChange(cIndex, sIndex, 'subChapterTitle', e.target.value)} placeholder={`Judul Sub-Bab ${cIndex + 1}.${sIndex + 1}`} style={{...inputStyle, marginBottom: '10px'}} />
                  <textarea value={sub.subChapterContent} onChange={(e) => handleSubChapterChange(cIndex, sIndex, 'subChapterContent', e.target.value)} placeholder={`Konten Sub-Bab`} style={{...inputStyle, height: '100px'}} />
                  <button type="button" onClick={() => removeSubChapter(cIndex, sIndex)} style={removeBtnStyle}>Hapus Sub-Bab</button>
                </div>
              ))}
              <button type="button" onClick={() => addSubChapter(cIndex)}>+ Tambah Sub-Bab</button>
              <button type="button" onClick={() => removeChapter(cIndex)} style={{...removeBtnStyle, marginLeft: '20px'}}>Hapus Bab Ini</button>
            </div>
          ))}
          <button type="button" onClick={addChapter} style={{marginTop: '10px'}}>+ Tambah Bab</button>
        </div>
        
        <div style={sectionStyle}>
          <h3>Editor Kuis</h3>
          {(moduleData.quiz || []).map((q, qIndex) => (
            <div key={qIndex} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '5px', marginBottom: '15px' }}>
              <input value={q.question} onChange={(e) => handleQuizChange(qIndex, 'question', e.target.value)} placeholder={`Pertanyaan ${qIndex + 1}`} style={{...inputStyle, marginBottom: '10px'}} />
              {q.options.map((opt, oIndex) => (
                <input key={oIndex} value={opt} onChange={(e) => handleOptionChange(qIndex, oIndex, e.target.value)} placeholder={`Opsi ${oIndex + 1}`} style={{...inputStyle, marginBottom: '5px'}} />
              ))}
              <input value={q.answer} onChange={(e) => handleQuizChange(qIndex, 'answer', e.target.value)} placeholder="Jawaban Benar" style={{...inputStyle, marginTop: '10px'}} />
              <button type="button" onClick={() => removeQuestion(qIndex)} style={removeBtnStyle}>Hapus Pertanyaan</button>
            </div>
          ))}
          <button type="button" onClick={addQuestion}>+ Tambah Pertanyaan</button>
        </div>

        <button type="submit" style={{ padding: '15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1.2em', fontWeight: 'bold' }}>
          {isCreating ? 'Simpan Modul' : 'Update Modul'}
        </button>
      </form>
    </div>
  );
}

const inputStyle = { width: '100%', padding: '10px', borderRadius: '4px', border: '1px solid #ccc', fontSize: '1em', marginBottom: '10px' };
const sectionStyle = { border: '1px solid #eee', padding: '20px', borderRadius: '8px', backgroundColor: '#fdfdfd' };
const removeBtnStyle = { marginTop: '10px', color: 'red', background: 'none', border: 'none', cursor: 'pointer', padding: '5px' };

export default ModuleEditor;
