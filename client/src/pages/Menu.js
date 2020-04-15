import styled from '@emotion/styled';
import React from 'react';
import Header from '../components/Header';
import AppContainer from '../components/AppContainer';
import { MenuButton, MenuButtonTransparent } from '../components/MenuButtons';

const MenuContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function DefaultMenu() {
  return (
    <>
      <AppContainer>
        <Header type="logout"></Header>
        <MenuContainer>
          <MenuButton>Client Master</MenuButton>
          <MenuButtonTransparent>Item Master</MenuButtonTransparent>
          <MenuButton>Storage System</MenuButton>
          <MenuButtonTransparent>Inbound</MenuButtonTransparent>
          <MenuButton>Outbound</MenuButton>
        </MenuContainer>
      </AppContainer>
    </>
  );
}