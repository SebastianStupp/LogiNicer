import styled from '@emotion/styled';

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  min-width: 200px;
  min-height: 47px;
  font-size: 1.7rem;
  padding: 0px;
  border: 0;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textprimary};
  font-weight: bold;
`;

export default Button;
