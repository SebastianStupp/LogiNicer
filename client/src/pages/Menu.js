import styled from '@emotion/styled';
import React from 'react';
import Header from '../components/Header';
import MenuButton from '../components/MenuButton';
import { useHistory } from 'react-router-dom';

const MenuContainer = styled.div`
  width: 100vw;
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  & button:nth-of-type(even) {
    background-color: rgb(219, 143, 0, 63%);
  }
`;

const menuRoutes = {
  'Client Master': 'clientmaster',
  'Item Master': 'itemmaster',
  'Storage System': 'storgesystem',
  Inbound: 'inbound',
  Outbound: 'outbound',
};

const CreateMenuOptions = () => {
  let history = useHistory();

  function handleOnClick(event) {
    history.push(menuRoutes[event.currentTarget.value]);
  }

  return Object.keys(menuRoutes).map((menuOptions) => (
    <MenuButton key={menuOptions} value={menuOptions} onClick={handleOnClick}>
      {menuOptions}
    </MenuButton>
  ));
};

export default function DefaultMenu() {
  return (
    <>
      <Header type="logout"></Header>
      <MenuContainer>
        <CreateMenuOptions></CreateMenuOptions>
      </MenuContainer>
    </>
  );
}
