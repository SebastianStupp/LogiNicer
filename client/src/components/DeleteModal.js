import React from 'react';
import styled from '@emotion/styled';
import Close from '../assets/close.svg';
import useDeleteClient from '../hooks/useDeleteClient';
import useDeleteArticle from '../hooks/useDeleteArticle';
import useDeleteStorage from '../hooks/useDeleteStorage';
import Button from '../components/Button';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core';
import { useLocation } from 'react-router-dom';

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

const Title = styled.h1`
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

export default function DeleteModal({
  close,
  clientId,
  client,
  articleId,
  article,
  storageId,
  storage,
}) {
  const [{ loading, error }, doDeleteClient] = useDeleteClient(clientId);
  const [{ loadingArticle, errorArticle }, doDeleteArticle] = useDeleteArticle(
    articleId
  );
  const [{ loadingStorage, errorStorage }, doDeleteStorage] = useDeleteStorage(
    storageId
  );
  const [modalTypeClient, setModalTypeClient] = React.useState(false);
  const [modalTypeArticle, setModalTypeArticle] = React.useState(false);
  const [modalTypeStorage, setModalTypeStorage] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    if (location.pathname === '/articlemaster') {
      setModalTypeArticle(!modalTypeArticle);
    }
    if (location.pathname === '/clientmaster') {
      setModalTypeClient(!modalTypeClient);
    }
    if (location.pathname === '/storagesystem') {
      setModalTypeStorage(!modalTypeStorage);
    }
  }, []);

  async function handleonClickClient() {
    await doDeleteClient(clientId);
    close();
  }
  async function handleonClickArticle() {
    await doDeleteArticle(articleId);
    close();
  }
  async function handleOnClickStorage() {
    await doDeleteStorage(storageId);
    close();
  }

  return (
    <>
      {modalTypeArticle ? (
        <>
          {loadingArticle && 'loading...'}
          {errorArticle && 'Error'}
          <ModalContainer>
            <Modal>
              <CloseImage src={Close} onClick={close}></CloseImage>
              <Title>{`Delete Article <${article}>?`}</Title>
              <Button onClick={handleonClickArticle}>Delete</Button>
            </Modal>
          </ModalContainer>
        </>
      ) : null}

      {modalTypeClient ? (
        <>
          {loading && 'loading...'}
          {error && 'Error'}
          <ModalContainer>
            <Modal>
              <CloseImage src={Close} onClick={close}></CloseImage>
              <Title>{`Delete Client <${client}>?`}</Title>
              <Button onClick={handleonClickClient}>Delete</Button>
            </Modal>
          </ModalContainer>
        </>
      ) : null}

      {modalTypeStorage ? (
        <>
          {loadingStorage && 'loading...'}
          {errorStorage && 'Error'}
          <ModalContainer>
            <Modal>
              <CloseImage src={Close} onClick={close}></CloseImage>
              <Title>{`Delete Client <${storage}>?`}</Title>
              <Button onClick={handleOnClickStorage}>Delete</Button>
            </Modal>
          </ModalContainer>
        </>
      ) : null}
    </>
  );
}

DeleteModal.propTypes = {
  close: PropTypes.func,
  clientId: PropTypes.string,
  client: PropTypes.string,
  articleId: PropTypes.string,
  article: PropTypes.string,
  storageId: PropTypes.string,
  storage: PropTypes.string,
};
