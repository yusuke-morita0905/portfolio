import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { HeaderRoute } from './HeaderRoute';
import { FooterRoute } from './FooterRoute';
import { MainRoute } from './MainRoute';
import { mediaQuery, useMediaQuery } from '../modules/lib';

export const IndexRouter: React.FC = () => {
  const isSp: boolean = useMediaQuery(mediaQuery.sp);
  const fontFamily: "Noto+Sans+JP" = 'Noto+Sans+JP';

  useEffect(() => {
    const link: HTMLLinkElement = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${fontFamily}&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, [fontFamily]);

  return (
    <Container
      id='container'
      $isSp={isSp}
    >
      <FadeIn>
        <Router>
          <HeaderRoute />
          <MainRoute />
          <FooterRoute />
        </Router>
      </FadeIn>
    </Container>
  );
};

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div<{ $isSp: boolean; }>`
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin: auto;
  background-color: #fff;
  padding-bottom: 5vw;
`;

const FadeIn = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
`;