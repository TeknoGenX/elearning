import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Auth.module.css'; // Import CSS module

function ForgotPassword() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authFormContainer}>
        <h2 className={styles.title}>Lupa Password</h2>
        <p style={{ marginBottom: '20px', fontSize: '0.9em' }}>Masukkan email Anda untuk reset password.</p>
        <form className={styles.form}>
          <input type="email" placeholder="Email Anda" className={styles.input} />
          <button type="submit" className={`${styles.button} ${styles.buttonWarning}`}>Kirim Link Reset</button>
        </form>
        <div className={styles.links}>
          <Link to="/login">Kembali ke Login</Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;