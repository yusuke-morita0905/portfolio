import React from 'react';
import styled from 'styled-components';
import parse from 'html-react-parser';

type Props = {
  about: string;
  isSp: boolean;
};

export const AboutComp: React.FC<Props> = (p) => {
  const isSp: boolean = p.isSp;

  return (
    <Container
      id='about'
      $isSp={isSp}
    >
      <Wrap $isSp={isSp}>
        <Title $isSp={isSp}>About</Title>
        <About $isSp={isSp}>{parse(p.about)}</About>
      </Wrap>
    </Container>
  );
};

const Container = styled.section<{ $isSp: boolean }>`
  position: relative;
  padding: ${(p) => (p.$isSp ? 'calc(60vw / 3.2) 0 calc(80vw / 3.2)' : 'calc(80vw / 19.2) 0 calc(150vw / 19.2)')};
  margin-bottom: ${p => p.$isSp ? 'calc(70vw / 3.2)' : 'calc(300vw / 19.2)'};

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 1vw;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #afeeee;
    z-index: -1;
    transform: skewY(10deg);
    margin: auto;
  }
`;

const Wrap = styled.div<{ $isSp: boolean }>`
  width: ${(p) => (p.$isSp ? '90vw' : '43vw')};
  margin: 0 auto;
`;

const Title = styled.h2<{ $isSp: boolean }>`
  font-size: ${(p) => (p.$isSp ? 'calc(23vw / 3.2)' : 'calc(40vw / 19.2)')};
  text-align: center;
  font-family: 'Inter', sans-serif;
  position: relative;
  width: fit-content;
  margin: 0 auto ${(p) => (p.$isSp ? ' 10vw' : '6vw')};

  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-right: 4vw solid transparent;
    border-left: 4vw solid transparent;
    border-top: 6.5vw solid #ffb6c1;
    border-bottom: 0;
    z-index: -1;
    bottom: 0;
    left: 0;
    margin: auto;
    right: 0;
    top: ${(p) => (p.$isSp ? '1.5vw' : '1vw')};
    margin-right: ${(p) => (p.$isSp ? '11vw' : '3vw')};
    transform: rotate(10deg);
  }
`;

const About = styled.div<{ $isSp: boolean }>`
  p {
    font-size: ${(p) => (p.$isSp ? 'calc(12vw / 3.2)' : 'calc(20vw / 19.2)')};
    line-height: ${(p) => (p.$isSp ? '2' : '1.8')};

    &:not(:last-child) {
      margin-bottom: ${(p) => (p.$isSp ? '3vw' : '0.8vw ')};
    }
  }
`;
