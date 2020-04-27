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

const menuRoutes = [
  {
    route: 'clientmaster',
    label: 'Client Master',
  },
  {
    route: 'itemmaster',
    label: 'Item Master',
  },
  {
    route: 'storagesystem',
    label: 'Storage System',
  },
  {
    route: 'inbound',
    label: 'Inbound',
  },
  {
    route: 'outbound',
    label: 'Outbound',
  },
];

const CreateMenuOptions = () => {
  let history = useHistory();

  function handleClick(route) {
    history.push(`/${route}`);
  }

  return menuRoutes.map((menuRoute) => (
    <MenuButton
      key={menuRoute.label}
      value={menuRoute.label}
      onClick={() => handleClick(menuRoute.route)}
    >
      {menuRoute.label}
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
