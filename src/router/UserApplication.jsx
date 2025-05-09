import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { UsersPage } from '@pages/pageListAsync';

const UserApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<UsersPage />} />
      <Route path="/*" element={<Navigate to="/app" replace />} />
    </Routes>
  );
};

export default UserApplication;
