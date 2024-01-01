// src/routes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import Profile from './pages/Profile';
import Form from './components/Form';
import LoginForm from './components/LoginForm';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/register" element={<Form />} />
      <Route path="/profile" element={<Profile />} />

    </Routes>
  );
};

export default AppRoutes;
