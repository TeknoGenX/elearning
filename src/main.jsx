import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';

// Layouts & Routes
import PublicLayout from './components/PublicLayout.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';

// Context Providers
import { AuthProvider } from './context/AuthContext.jsx';
import { ModuleProvider } from './context/ModuleContext.jsx';

// Pages
import Login from './pages/Login.jsx';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Profile from './pages/Profile.jsx';
import ModuleDetail from './pages/ModuleDetail.jsx';
import Quiz from './pages/Quiz.jsx';
import QuizResult from './pages/QuizResult.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx';
import Documentation from './pages/Documentation.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ModuleProvider>
          <Routes>
            {/* Rute Publik & Admin dibungkus oleh PublicLayout */}
            <Route element={<PublicLayout />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/admin/create" element={<ModuleEditor />} />
              <Route path="/admin/edit/:moduleId" element={<ModuleEditor />} />
              <Route path="/documentation" element={<Documentation />} /> {/* Pindahkan ke sini */}
              {/* Rute utama sekarang adalah login */}
              <Route path="/" element={<Login />} />
            </Route>

            {/* Rute Siswa yang Terlindungi */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/module/:moduleId" element={<ProtectedRoute><ModuleDetail /></ProtectedRoute>} />
            <Route path="/quiz/:moduleId" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
            <Route path="/quiz/result" element={<ProtectedRoute><QuizResult /></ProtectedRoute>} />
            
          </Routes>
        </ModuleProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);