import React from 'react';
import styled from 'styled-components';

type Props = {
  children: React.ReactNode
}

export const FooterComp: React.FC<Props> = (p) => {

  return (
    <ContainerFooter>
      <Footer role='contentinfo'>
        <FooterInner>
          { p.children }
        </FooterInner>
      </Footer>
    </ContainerFooter>
  );
};

const ContainerFooter = styled.div``;

const Footer = styled.footer<{role: 'contentinfo'}>``;

const FooterInner = styled.div``;
