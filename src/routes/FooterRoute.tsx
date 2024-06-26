import React from 'react'
import { Routes, Route } from "react-router-dom";
import { FooterApp } from '../apps/FooterApp'

export const FooterRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/portfolio" element={<FooterApp />} />
    </Routes>
  );
};