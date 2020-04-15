import styled from '@emotion/styled';

export const MenuButton = styled.button`
  background-color: rgb(219, 143, 0);
  width: 100%;
  max-width: 500px;
  height: 30%;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.textprimary};
  padding: 0px;
  border: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;

export const MenuButtonTransparent = styled.button`
  background-color: rgb(219, 143, 0, 63%);
  width: 100%;
  max-width: 500px;
  height: 30%;
  font-size: 2rem;
  color: ${(props) => props.theme.colors.textprimary};
  padding: 0px;
  border: 0;
`;
