import styled from '@emotion/styled';

const Input = styled.input`
  background-color: ${(props) => props.theme.colors.secondary};
  border-radius: 3px;
  width: 254px;
  height: 45px;
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.textprimary};
  ::placeholder {
    color: ${(props) => props.theme.colors.textprimary};
  }
`;

export default Input;
