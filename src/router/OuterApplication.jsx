import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { WelcomePage } from '@pages/pageListAsync';

const OuterApplication = () => {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default OuterApplication;
