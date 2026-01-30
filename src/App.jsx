import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext'; // Import useAuth

function App() {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Dapatkan status otentikasi

  useEffect(() => {
    // Redirect langsung setelah App dimuat
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // App.jsx ini sekarang berfungsi sebagai pengalih saja, tidak menampilkan UI
  return null; 
}

export default App;