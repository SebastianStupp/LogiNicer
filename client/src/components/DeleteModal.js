import React from 'react';
import styled from '@emotion/styled';
import Close from '../assets/close.svg';
import useDeleteClient from '../hooks/useDeleteClient';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core';

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
  justify-content: space-between;
  align-items: center;
  height: 45%;
  width: 90%;
  min-height: 250px;
  max-width: 500px;
  border-radius: 5px;
  padding: 20px;
  animation: 0.8s ${fadeIn} ease-in;
`;

export default function DeleteModal({ close, clientId }) {
  const [{ loading, error }, doDeleteClient] = useDeleteClient(clientId);

  async function handleClick() {
    await doDeleteClient(clientId);
    close();
  }

  return (
    <>
      {loading && 'loading...'}
      {error && 'Error'}
      <ModalContainer>
        <Modal>
          <CloseImage src={Close} onClick={close}></CloseImage>
          <Button onClick={handleClick}>Delete</Button>
        </Modal>
      </ModalContainer>
    </>
  );
}

DeleteModal.propTypes = {
  close: PropTypes.func,
  clientId: PropTypes.string,
};
