import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UsersAdminPage } from '@pages/pageListAsync';

const AdminApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersAdminPage />} />
      <Route path="/*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default AdminApplication;
