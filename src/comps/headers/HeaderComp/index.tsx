import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode
}

export const HeaderComp: React.FC<Props> = (p) => {
  return (
    <Container>
      { p.children }
    </Container>
  );
};

const Container = styled.div``;