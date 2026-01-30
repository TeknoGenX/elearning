import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useModules } from '../context/ModuleContext'; // Import useModules hook

function Quiz() {
  const { moduleId } = useParams();
  const navigate = useNavigate();
  const { getModuleById } = useModules(); // Gunakan hook
  const module = getModuleById(moduleId);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  if (!module || !module.quiz) {
    return <div>Kuis untuk modul ini tidak tersedia.</div>;
  }

  const handleAnswerSelect = (option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: option,
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < module.quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      // Selesai kuis, hitung hasil
      let score = 0;
      module.quiz.forEach((q, index) => {
        if (selectedAnswers[index] === q.answer) {
          score++;
        }
      });
      // Arahkan ke halaman hasil dengan state
      navigate('/quiz/result', { state: { score, total: module.quiz.length } });
    }
  };

  const currentQuestion = module.quiz[currentQuestionIndex];

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif', maxWidth: '800px', margin: 'auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Kuis: {module.title}</h1>
      <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <div style={{ marginBottom: '20px' }}>
          <h2 style={{ fontSize: '1.2em' }}>Pertanyaan {currentQuestionIndex + 1}/{module.quiz.length}</h2>
          <p style={{ fontSize: '1.1em' }}>{currentQuestion.question}</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswerSelect(option)}
              style={{
                ...optionButtonStyle,
                backgroundColor: selectedAnswers[currentQuestionIndex] === option ? '#d0e7ff' : '#f0f0f0',
                border: selectedAnswers[currentQuestionIndex] === option ? '2px solid #007bff' : '2px solid #ddd',
              }}
            >
              {option}
            </button>
          ))}
        </div>
        <div style={{ textAlign: 'right', marginTop: '30px' }}>
          <button onClick={handleNextQuestion} style={nextButtonStyle}>
            {currentQuestionIndex < module.quiz.length - 1 ? 'Selanjutnya' : 'Selesai'}
          </button>
        </div>
      </div>
    </div>
  );
}

const optionButtonStyle = {
  padding: '15px',
  borderRadius: '5px',
  border: '1px solid #ddd',
  textAlign: 'left',
  fontSize: '1em',
  cursor: 'pointer',
  backgroundColor: '#f0f0f0',
  width: '100%',
};

const nextButtonStyle = {
  padding: '10px 20px',
  borderRadius: '5px',
  border: 'none',
  backgroundColor: '#28a745',
  color: 'white',
  fontSize: '1em',
  cursor: 'pointer',
};

export default Quiz;
