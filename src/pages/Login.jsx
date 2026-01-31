import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import styles from './Auth.module.css'; // Import CSS module

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login attempt with:', email);
    login({ email: email });
    navigate('/dashboard');
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authFormContainer}>

        <h2 className={styles.title}>Masuk ke Akun Anda</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.input}
          />
          <button type="submit" className={`${styles.button} ${styles.buttonPrimary}`}>Masuk</button>
        </form>
        <div className={styles.links}>
          <Link to="/forgot-password">Lupa Password?</Link>
          <p>Belum punya akun? <Link to="/register">Daftar di sini</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Login;