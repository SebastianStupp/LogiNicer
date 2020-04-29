import React from 'react';
import styled from '@emotion/styled';
import Close from '../assets/close.svg';
import useDeleteClient from '../hooks/useDeleteClient';
import Button from '../components/Button';
import PropTypes from 'prop-types';

const CloseImage = styled.img`
  align-self: flex-start;
  padding-top: 8px;
  padding-left: 8px;
`;

const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Modal = styled.div`
  background-color: rgba(0, 0, 0, 30%);
  display: flex;
  flex-direction: column;
  height: 50%;
  width: 90%;
  max-width: 500px;
  border-radius: 3px;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 100%;
  width: 100%;
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
          <ModalContent></ModalContent>
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
