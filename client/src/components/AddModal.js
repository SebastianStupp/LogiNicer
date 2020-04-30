import React from 'react';
import styled from '@emotion/styled';
import Close from '../assets/close.svg';
import usePostClient from '../hooks/usePostClient';
import Button from '../components/Button';
import Input from '../components/Input';
import PropTypes from 'prop-types';

const CloseImage = styled.img`
  align-self: flex-end;
  padding-right: 10px;
  margin-right: 3px;
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
  justify-content: space-around;
  height: 45%;
  width: 90%;
  min-height: 250px;
  max-width: 500px;
  border-radius: 5px;
`;

const ClientInput = styled(Input)`
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.3rem;
`;

export default function DeleteModal({ close }) {
  const [{ loading, errormsg }, doPostClient] = usePostClient();
  const [name, setName] = React.useState('');
  async function handleClick() {
    await doPostClient(name);
    close();
  }

  return (
    <>
      {loading}
      {errormsg && 'Error'}
      <ModalContainer>
        <Modal>
          <CloseImage src={Close} onClick={close}></CloseImage>
          <ClientInput
            placeholder="Please Enter ClientName"
            maxLength="24"
            onChange={(event) => {
              setName(event.target.value);
            }}
          ></ClientInput>
          <Button onClick={handleClick}>CREATE</Button>
        </Modal>
      </ModalContainer>
    </>
  );
}

DeleteModal.propTypes = {
  close: PropTypes.func,
};