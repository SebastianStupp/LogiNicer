import React from 'react';
import styled from '@emotion/styled';
import MenuLogo from '../assets/logosmall.svg';
import Logout from '../assets/logout.svg';
import MenuButton from '../assets/menubutton.svg';
import PropTypes from 'prop-types';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  margin-bottom: 20px;
  top: 0;
  border-bottom: 2.5px solid ${(props) => props.theme.colors.tertiary};
  max-height: 150px;
`;

const HeaderTitle = styled.h2`
  color: ${(props) => props.theme.colors.secondary};
  font-size: 1.2 rem;
`;

const HeaderImg = styled.img``;

const headerButtons = {
  menu: {
    src: MenuButton,
    alt: 'Menu Symbol',
  },
  logout: {
    src: Logout,
    alt: 'Logout Symbol',
  },
};

export default function DefaultHeading(props) {
  return (
    <Header>
      <HeaderImg src={MenuLogo} alt="MenuLogo" />
      <HeaderTitle>LogiNicer</HeaderTitle>
      <HeaderImg
        src={headerButtons[props.type].src}
        alt={headerButtons[props.type].alt}
        onClick={console.log('Clicked')}
      />
    </Header>
  );
}
DefaultHeading.propTypes = {
  type: PropTypes.string,
};
