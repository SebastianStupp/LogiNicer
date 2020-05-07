import React from 'react';
import styled from '@emotion/styled';
import Close from '../assets/close.svg';
import PropTypes from 'prop-types';

const CloseImage = styled.img`
  align-self: flex-end;
  padding-top: 8px;
  padding-right: 8px;
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
  height: 95vh;
  width: 100%;
`;

export default function DefaultModal({ close }) {
  return (
    <>
      <ModalContainer>
        <Modal>
          <CloseImage src={Close} onClick={close} />
          <ModalContent />
        </Modal>
      </ModalContainer>
    </>
  );
}

DefaultModal.propTypes = {
  close: PropTypes.func,
};
