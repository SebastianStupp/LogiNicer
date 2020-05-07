import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

const menuItemAnimation = keyframes`
from {
  transform: translateX(60%);
  opacity: 0
} to  {
  transform: translateX(0);
  opacity: 1;
}
`;
const MenuButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  max-width: 500px;
  height: 30%;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.textprimary};
  padding: 0px;
  border: 0;
  font-weight: bold;

  :nth-of-type(1) {
    animation: ${menuItemAnimation} 0.6s ease-in-out forwards 0.5s;
    opacity: 0;
  }
  :nth-of-type(2) {
    animation: ${menuItemAnimation} 0.6s ease-in-out forwards 0.7s;
    opacity: 0;
  }
  :nth-of-type(3) {
    animation: ${menuItemAnimation} 0.6s ease-in-out forwards 0.9s;
    opacity: 0;
  }
  :nth-of-type(4) {
    animation: ${menuItemAnimation} 0.6s ease-in-out forwards 1.1s;
    opacity: 0;
  }
  :nth-of-type(5) {
    animation: ${menuItemAnimation} 0.6s ease-in-out forwards 1.3s;
    opacity: 0;
  }
`;

export default MenuButton;
