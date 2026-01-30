import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Auth.module.css'; // Import CSS module

function Register() {
  return (
    <div className={styles.authContainer}>
      <div className={styles.authFormContainer}>
        <h2 className={styles.title}>Daftar Akun Baru</h2>
        <form className={styles.form}>
          <input type="text" placeholder="Nama Lengkap" className={styles.input} />
          <input type="email" placeholder="Email" className={styles.input} />
          <input type="password" placeholder="Password" className={styles.input} />
          <input type="password" placeholder="Konfirmasi Password" className={styles.input} />
          <button type="submit" className={`${styles.button} ${styles.buttonSuccess}`}>Daftar</button>
        </form>
        <div className={styles.links}>
          <p>Sudah punya akun? <Link to="/login">Masuk di sini</Link></p>
        </div>
      </div>
    </div>
  );
}

export default Register;