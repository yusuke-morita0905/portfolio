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

const Container = styled.div<{ $isSp: boolean }>`
  width: ${(p) => (p.$isSp ? '90vw' : '66vw')};
  margin-left: auto;
  margin-right: auto;
  padding: 12vw 0 8vw;
`;

const Title = styled.h2<{ $isSp: boolean }>`
  font-size: ${(p) => (p.$isSp ? '4.3vw' : '2vw')};
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
    margin-left: ${(p) => (p.$isSp ? '12vw' : '3vw')};
    transform: rotate(-10deg);
  }
`;

const Input = styled.input<{ $isSp: boolean }>`
  width: ${(p) => (p.$isSp ? '50vw' : '18vw')};
  display: block;
  margin: 0 auto;
  font-size: ${(p) => (p.$isSp ? '3vw' : '1.1vw')};
  text-align: center;
  font-family: 'Inter', sans-serif;
  font-weight: 400;
  letter-spacing: 0.03vw;
`;
