import React from 'react';
import styled from '@emotion/styled';
import Button from './Button';
import Close from '../assets/close.svg';

const CloseImage = styled.img`
  align-self: flex-end;
  padding-top: 8px;
  padding-right: 8px;
`;

const CloseButton = styled(Button)`
  align-self: flex-end;
  justify-content: center;
  margin-bottom: 20px;
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
  height: 50vh;
  width: 90%;
  border-radius: 3px;
`;

const ModalContent = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  height: 95vh;
  width: 100%;
`;

export default function DefaultModal() {
  const [showModal, setShowModal] = React.useState(false);

  const handleOnClick = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Button onClick={handleOnClick}>Open Modal</Button>
      {showModal ? (
        <ModalContainer>
          <Modal>
            <CloseImage src={Close} onClick={handleOnClick}></CloseImage>
            <ModalContent>
              <CloseButton onClick={handleOnClick}>Close Modal</CloseButton>
            </ModalContent>
          </Modal>
        </ModalContainer>
      ) : null}
    </>
  );
}
