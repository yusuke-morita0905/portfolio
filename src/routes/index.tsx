import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { HeaderRoute } from './HeaderRoute';
import { FooterRoute } from './FooterRoute';
import { MainRoute } from './MainRoute';
import { mediaQuery, useMediaQuery } from '../modules/lib';

export const IndexRouter: React.FC = () => {
  const isSp = useMediaQuery(mediaQuery.sp);

  return (
    <Container id='container' $isSp={isSp}>
      <Router>
        <HeaderRoute />
        <MainRoute />
        <FooterRoute />
      </Router>
    </Container>
  );
};

const Container = styled.div<{$isSp:boolean}>`
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin: auto;
  background-color: #fff;
  padding-bottom: ${p => p.$isSp ? '5vw' : '5vw'};
`;
