import React from 'react';
import styled from '@emotion/styled';
import Input from '../components/Input';
import Button from '../components/Button';
import LogoLarge from '../assets/logolarge.svg';
import Truck from '../animations/Truck';
import { useHistory } from 'react-router-dom';

const LoginContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  overflow: hidden;
`;

const LoginLogo = styled.img`
  margin-top: 65px;
  margin-bottom: 5px;
`;

const LoginTitle = styled.div`
  margin-bottom: 40px;
  color: ${(props) => props.theme.colors.textsecondary};
  font-size: 1.8rem;
`;

const LoginInput = styled(Input)`
  margin-bottom: 20px;
  text-align: center;
  font-size: 1.2rem;
`;

export default function Login() {
  let history = useHistory();

  function HandleOnClick() {
    history.push('/menu');
  }

  return (
    <LoginContainer>
      <LoginLogo src={LogoLarge}></LoginLogo>
      <LoginTitle>LogiNicer</LoginTitle>
      <LoginInput placeholder="Username"></LoginInput>
      <LoginInput placeholder="Password"></LoginInput>
      <Button onClick={HandleOnClick}>Login</Button>
      <Truck></Truck>
    </LoginContainer>
  );
}
