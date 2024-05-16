import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { HeaderRoute } from './HeaderRoute';
import { FooterRoute } from './FooterRoute';
import { MainRoute } from './MainRoute';
import { mediaQuery, useMediaQuery } from '../modules/lib';

export const IndexRouter: React.FC = () => {
  const isSp: boolean = useMediaQuery(mediaQuery.sp);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Container
      id='container'
      $isSp={isSp}
      $loading={loading}
    >
      {loading ? (
        <Loader $isSp={isSp} />
      ) : (
        <FadeIn>
          <Router>
            <HeaderRoute />
            <MainRoute />
            <FooterRoute />
          </Router>
        </FadeIn>
      )}
    </Container>
  );
};

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(720deg);
  }
`;

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Container = styled.div<{ $isSp: boolean; $loading: boolean }>`
  height: ${(p) => (p.$loading ? '100vh' : 'auto')};
  position: relative;
  z-index: 1;
  overflow: hidden;
  margin: auto;
  background-color: #fff;
  padding-bottom: ${(p) => (p.$isSp ? '5vw' : '5vw')};
`;

const FadeIn = styled.div`
  opacity: 0;
  animation: ${fadeIn} 1s ease-out forwards;
`;

const Loader = styled.div<{ $isSp: boolean }>`
  border-radius: 50%;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 9999;
  margin: auto;
  width: ${p => p.$isSp ? '10vh' : '4vh'};
  height: ${p => p.$isSp ? '10vh' : '4vh'};
  border: ${p => p.$isSp ? '1vw' : '0.4vw'} solid rgba(0, 0, 0, 0.1);
  border-top-color: #ffb6c1;
  animation: ${rotate} 2s linear infinite;
  top: ${(p) => (p.$isSp ? '0' : '26vw')};
  ${p => p.$isSp ? 'bottom: 0' : ''};
`;
