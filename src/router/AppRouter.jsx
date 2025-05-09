import React from 'react';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import UserApplication from './UserApplication';
import AdminApplication from './AdminApplication';
import OuterApplication from './OuterApplication';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/*" element={<OuterApplication />} />
        <Route path="/app/*" element={<UserApplication />} />
        <Route path="/admin/*" element={<AdminApplication />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
