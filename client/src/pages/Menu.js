import styled from '@emotion/styled';
import React from 'react';
import Header from '../components/Header';
import MenuButton from '../components/MenuButtons';

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

const menuOptions = [
  'Client Master',
  'ItemMaster',
  'Storage System',
  'Inbound',
  'Outbound',
];

const CreateMenuOptions = () => {
  return menuOptions.map((menuOptions) => (
    <MenuButton key={menuOptions}>{menuOptions}</MenuButton>
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
