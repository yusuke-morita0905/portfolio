import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HeaderApp } from '../apps/HeaderApp';

export const HeaderRoute: React.FC = () => {
  return (
    <Routes>
      <Route path='/' element={<HeaderApp />} />
    </Routes>
  );
};