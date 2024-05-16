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
            <Item key={v.item.cd}>
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
  display: flex;
  justify-content: center;
  gap: ${(p) => (p.$isSp ? '5vw' : '1.5vw')};
  font-family: 'Inter', sans-serif;
  color: #777;
  font-size: ${(p) => (p.$isSp ? '2.8vw' : '0.93vw')};
`;

const Item = styled.li``;
