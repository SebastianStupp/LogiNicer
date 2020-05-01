import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import Close from '../assets/close.svg';
import usePatchClient from '../hooks/usePatchClient';
import Button from '../components/Button';
import Input from '../components/Input';
import PropTypes from 'prop-types';

const fadeIn = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

const CloseImage = styled.img`
  align-self: flex-end;
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.texttertiary};
  margin-bottom: 40px;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 65%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  height: 45%;
  width: 90%;
  min-height: 250px;
  max-width: 500px;
  border-radius: 5px;
  animation: 0.8s ${fadeIn} ease-in;
`;

const ClientInput = styled(Input)`
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.3rem;
`;

export default function ChangeModal({ close, client, clientId }) {
  const [{ loading, errormsg }, doPatchClient] = usePatchClient();
  const [clientname, setClientName] = React.useState(client);

  async function handleClick() {
    await doPatchClient(clientId, clientname);
    close();
  }

  return (
    <>
      {loading}
      {errormsg && 'Error'}
      <ModalContainer>
        <Modal>
          <CloseImage src={Close} onClick={close}></CloseImage>
          <Title>Change Client</Title>
          <ClientInput
            value={clientname}
            maxLength="24"
            onChange={(event) => {
              setClientName(event.target.value);
            }}
          ></ClientInput>
          <Button onClick={handleClick}>CHANGE</Button>
        </Modal>
      </ModalContainer>
    </>
  );
}

ChangeModal.propTypes = {
  close: PropTypes.func,
  client: PropTypes.string,
  clientId: PropTypes.string,
};
