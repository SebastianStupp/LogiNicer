import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import Close from '../assets/close.svg';
import usePostArticle from '../hooks/usePostArticle';
import usePostClient from '../hooks/usePostClient';
import Button from '../components/Button';
import Input from '../components/Input';
import PropTypes from 'prop-types';
import ClientDropdown from './ClientDropdown';
import Checkbox from './Checkbox';

const fadeIn = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
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
  padding: 20px;
  min-height: 45%;
  width: 90%;
  min-height: 250px;
  max-width: 500px;
  border-radius: 5px;
  animation: 0.8s ${fadeIn} ease-in;
`;

const CloseImage = styled.img`
  align-self: flex-end;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.texttertiary};
  margin-bottom: 30px;
`;

const CreateArticleButton = styled(Button)`
  padding: 10px;
`;

const InputContainer = styled(Input)`
  text-align: center;
  font-size: 1.1rem;
  margin: 20px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

export default function AddModal({ close }) {
  let location = useLocation();
  const [{ loadingArticle, errorArticle }, doPostArticle] = usePostArticle();
  const [{ loading, errormsg }, doPostClient] = usePostClient();
  const [name, setName] = React.useState('');
  const [articleNumber, setArticleNumber] = React.useState(null);
  const [client, setClient] = React.useState(null);
  const [bbd, setBbd] = React.useState(false);
  const [pzn, setPzn] = React.useState(false);
  const [ean, setEan] = React.useState(false);
  const [modalTypeClient, setModalTypeClient] = React.useState(false);
  const [modalTypeArticle, setModalTypeArticle] = React.useState(false);

  React.useEffect(() => {
    if (location.pathname === '/articlemaster') {
      setModalTypeArticle(!modalTypeArticle);
    }
    if (location.pathname === '/clientmaster') {
      setModalTypeClient(!modalTypeClient);
    }
  }, []);

  async function handleClickClient() {
    await doPostClient(name);
    close();
  }

  async function handleClickArticle() {
    await doPostArticle(articleNumber, client, bbd, pzn, ean);
    close();
  }

  function handleClientChange(client) {
    setClient(client);
  }
  return (
    <>
      {loadingArticle && 'Loading'}
      {errorArticle && 'Error'}
      {modalTypeArticle ? (
        <ModalContainer>
          <Modal>
            <CloseImage src={Close} onClick={close}></CloseImage>
            <Title>Create New Article</Title>
            <ClientDropdown
              optionTitle="Please Select Client"
              onContentChange={handleClientChange}
            ></ClientDropdown>
            <InputContainer
              placeholder="Please Enter ArticleName"
              maxLength="24"
              onChange={(event) => {
                setArticleNumber(event.target.value);
              }}
            ></InputContainer>
            <CheckboxContainer>
              <Checkbox
                option="Best-Before-Date"
                checked={() => {
                  setBbd(!bbd);
                }}
              ></Checkbox>
              <Checkbox
                option="PZN Number"
                checked={() => {
                  setPzn(!pzn);
                }}
              ></Checkbox>
              <Checkbox
                option="EAN Number"
                checked={() => {
                  setEan(!ean);
                }}
              ></Checkbox>
            </CheckboxContainer>
            <CreateArticleButton onClick={handleClickArticle}>
              CREATE
            </CreateArticleButton>
          </Modal>
        </ModalContainer>
      ) : null}
      {loading}
      {errormsg && 'Error'}
      {modalTypeClient ? (
        <ModalContainer>
          <Modal>
            <CloseImage src={Close} onClick={close}></CloseImage>
            <Title>Create New Client</Title>
            <InputContainer
              placeholder="Please Enter ClientName"
              maxLength="24"
              onChange={(event) => {
                setName(event.target.value);
              }}
            ></InputContainer>
            <Button onClick={handleClickClient}>CREATE</Button>
          </Modal>
        </ModalContainer>
      ) : null}
    </>
  );
}

AddModal.propTypes = {
  close: PropTypes.func,
  optionTitle: PropTypes.string,
};
