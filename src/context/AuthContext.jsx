import React, { createContext, useState, useContext } from 'react';

// 1. Membuat Context
const AuthContext = createContext(null);

// 2. Membuat Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null); // 'user' akan null jika belum login, dan berisi data jika sudah login

  // Fungsi untuk login
  const login = (userData) => {
    // Di aplikasi nyata, ini akan melibatkan verifikasi ke server
    // Di sini kita hanya simulasi
    setUser({ email: userData.email });
  };

  // Fungsi untuk logout
  const logout = () => {
    setUser(null);
  };

  const isAuthenticated = !!user;

  const value = {
    user,
    isAuthenticated,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 3. Membuat custom hook untuk menggunakan context dengan mudah
export function useAuth() {
  return useContext(AuthContext);
}