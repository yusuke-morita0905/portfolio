import React from 'react';
import styled from 'styled-components';

type Props = {
  email: string;
  isSp: boolean;
};

export const ContactFormComp: React.FC<Props> = (p) => {
  const isSp: boolean = p.isSp;

  return (
    <Container
      id='contact'
      $isSp={isSp}
    >
      <Title $isSp={isSp}>Contact</Title>
      <Input
        $isSp={isSp}
        type='text'
        value={p.email}
        readOnly
      />
    </Container>
  );
};

const Container = styled.section<{ $isSp: boolean }>`
  width: ${(p) => (p.$isSp ? '90vw' : '66vw')};
  margin-left: auto;
  margin-right: auto;
`;

const Title = styled.h2<{ $isSp: boolean }>`
  font-size: ${(p) => (p.$isSp ? 'calc(20vw / 3.75)' : 'calc(40vw / 19.2)')};
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
    border-top: 6.5vw solid #afeeee;
    border-bottom: 0;
    z-index: -1;
    bottom: 0;
    left: 0;
    margin: auto;
    right: 0;
    top: ${(p) => (p.$isSp ? '1.5vw' : '1vw')};
    margin-left: ${(p) => (p.$isSp ? '16vw' : '3vw')};
    transform: rotate(10deg);
  }
`;

const Input = styled.input<{ $isSp: boolean }>`
  width: ${(p) => (p.$isSp ? 'calc(2450vw / 37.5)' : 'calc(400vw / 19.2)')};
  display: block;
  margin: 0 auto ${(p) => (p.$isSp ? 'calc(400vw / 37.5)' : 'calc(100vw / 19.2)')};;
  font-size: ${(p) => (p.$isSp ? 'calc(16vw / 3.75)' : 'calc(25vw / 19.2)')};
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 0.03vw;
`;
