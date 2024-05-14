import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeApp } from '../apps/HomeApp'

export const MainRoute: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeApp />} />
    </Routes>
  );
};