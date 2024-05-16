import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  nav: {
    item: {
      cd: string;
      title: string;
      link: string;
    };
  }[];
  isSp: boolean;
};

export const NavComp: React.FC<Props> = (p) => {
  const isSp: boolean = p.isSp;
  return (
    <Header $isSp={isSp}>
      <Nav>
        <List $isSp={isSp}>
          {p.nav.map((v) => (
            <Item
              key={v.item.cd}
              $isSp={isSp}
            >
              <a href={`#${v.item.link}`}>{v.item.title}</a>
            </Item>
          ))}
        </List>
      </Nav>
    </Header>
  );
};

const Header = styled.header<{ $isSp: boolean }>`
  padding: ${(p) => (p.$isSp ? '5vw 0vw 0' : '2.4vw 0 ')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 99999;
`;

const Nav = styled.nav``;

const List = styled.ul<{ $isSp: boolean }>`
  font-family: 'Inter', sans-serif;
  color: #777;
  display: flex;
  justify-content: center;
  gap: ${(p) => (p.$isSp ? '5vw' : '1.5vw')};
  font-size: ${(p) => (p.$isSp ? '2.8vw' : '1.1vw')};
`;

const Item = styled.li<{ $isSp: boolean }>`
  position: relative;

  ${(p) => {
    if (p.$isSp) {
      return css`
        &::after {
          content: '';
          display: block;
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 0.2vw;
          background-color: transparent;
          transition: background-color 0.3s ease;
        }

        &:hover::after {
          background-color: #ffb6c1;
        }
      `;
    }
  }}
`;
