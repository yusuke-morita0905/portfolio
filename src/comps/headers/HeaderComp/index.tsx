import React from 'react';
import styled, { css } from 'styled-components';
import { mediaQuery, useMediaQuery } from '../../../modules/lib';

type Props = {
  children: React.ReactNode;
  isSp: boolean;
};

export const HeaderComp: React.FC<Props> = (p) => {
  const isSp: boolean = p.isSp;
  return (
    <Container $isSp={isSp}>
      { p.children }
    </Container>
  );
};

const Container = styled.div<{ $isSp: boolean }>`
  ${(p) => {
    if (p.$isSp) {
      return css`
        /* margin: 3rem 1.2rem 6rem; */
      `;
    } else {
      return css`
        /* width: 114rem; */
        /* margin-right: auto; */
        /* margin-left: auto; */
        margin-bottom: 5vw;
      `;
    }
  }}
`;
