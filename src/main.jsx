import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Login from './pages/Login.jsx';
import Dashboard from './pages/Dashboard.jsx';
import Register from './pages/Register.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Profile from './pages/Profile.jsx';
import ModuleDetail from './pages/ModuleDetail.jsx';
import Quiz from './pages/Quiz.jsx';
import QuizResult from './pages/QuizResult.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import { ModuleProvider } from './context/ModuleContext.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import AdminDashboard from './pages/AdminDashboard.jsx'; // Import AdminDashboard
import ModuleEditor from './pages/ModuleEditor.jsx'; // Import ModuleEditor

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <AuthProvider>
        <ModuleProvider>
          <Routes>
            {/* Rute Siswa */}
            <Route path="/" element={<App />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/module/:moduleId" element={<ProtectedRoute><ModuleDetail /></ProtectedRoute>} />
            <Route path="/quiz/:moduleId" element={<ProtectedRoute><Quiz /></ProtectedRoute>} />
            <Route path="/quiz/result" element={<ProtectedRoute><QuizResult /></ProtectedRoute>} />

            {/* Rute Admin/Guru */}
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/admin/create" element={<ModuleEditor />} />
            <Route path="/admin/edit/:moduleId" element={<ModuleEditor />} />
          </Routes>
        </ModuleProvider>
      </AuthProvider>
    </Router>
  </React.StrictMode>
);