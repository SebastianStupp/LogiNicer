import styled from '@emotion/styled';

const MenuButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  max-width: 500px;
  height: 30%;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.textprimary};
  padding: 0px;
  border: 0;
`;

export default MenuButton;
