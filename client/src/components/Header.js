import React from 'react';
import styled from '@emotion/styled';
import MenuLogo from '../assets/logo.svg';
import Logout from '../assets/logout.svg';
import MenuButton from '../assets/menubutton.svg';
import PropTypes from 'prop-types';

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #0d3955;
  top: 0;
  border-bottom: 2px;
  border-color: #707070;
  max-height: 150px;
`;

const HeaderTitle = styled.h2`
  color: #fff6d6;
  font-size: 1.5 rem;
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
