import React from 'react'
import styled, { css } from 'styled-components'

type Props = {
  main: React.ReactNode
}
export const ContainerBodyComp: React.FC<Props> = p => {

  return (
    <Container>
      <ContainerMain 
          role='main' 
          itemProp='mainContentOfPage' 
          itemScope 
          itemType='https://schema.org/Blog'
        >
        {p.main}
      </ContainerMain>
    </Container>
  );
}


const Container = styled.div`
`;

const ContainerMain = styled.main``;