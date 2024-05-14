import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HeaderRoute } from './HeaderRoute';
import { FooterRoute } from './FooterRoute';
import { MainRoute } from './MainRoute';

export const IndexRouter: React.FC = () => {
  return (
    <Router>
      <HeaderRoute />
      <MainRoute />
      <FooterRoute />
    </Router>
  );
};