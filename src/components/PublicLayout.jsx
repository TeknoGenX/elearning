// src/components/PublicLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

function PublicLayout() {
  // Outlet akan me-render komponen anak (misal: Login, AdminDashboard, dll.)
  return <Outlet />;
}

export default PublicLayout;