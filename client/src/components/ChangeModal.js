import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import Close from '../assets/close.svg';
import usePatchClient from '../hooks/usePatchClient';
import usePatchArticle from '../hooks/usePatchArticle';
import usePatchStorage from '../hooks/usePatchStorage';
import Button from '../components/Button';
import Input from '../components/Input';
import Checkbox from '../components/Checkbox';
import ClientDropdown from '../components/ClientDropdown';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';

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

const ClientInput = styled(Input)`
  margin-bottom: 30px;
  text-align: center;
  font-size: 1.3rem;
`;
const InputContainer = styled(Input)`
  text-align: center;
  font-size: 1.1rem;
  margin: 20px;
`;
const StorageContainer = styled(Input)`
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

export default function ChangeModal({
  close,
  client,
  clientId,
  articleId,
  article,
  bbd,
  pzn,
  ean,
  storageId,
  storage,
}) {
  const [{ loading, error }, doPatchClient] = usePatchClient();
  const [clientName, setClientName] = React.useState(client);
  const [storageName, setStorageName] = React.useState(storage);
  const [articleNumber, setArticleNumber] = React.useState(article);
  const [bbdValue, setBbdValue] = React.useState(bbd);
  const [pznValue, setPznValue] = React.useState(pzn);
  const [eanValue, setEanValue] = React.useState(ean);
  const [modalTypeClient, setModalTypeClient] = React.useState(false);
  const [modalTypeArticle, setModalTypeArticle] = React.useState(false);
  const [modalTypeStorage, setModalTypeStorage] = React.useState(false);
  const [{ loadingArticle, errorArticle }, doPatchArticle] = usePatchArticle();
  const [{ loadingStorage, errorStorage }, doPatchStorage] = usePatchStorage();

  const location = useLocation();
  React.useEffect(() => {
    if (location.pathname === '/articlemaster') {
      setModalTypeArticle(true);
    }
    if (location.pathname === '/clientmaster') {
      setModalTypeClient(true);
    }
    if (location.pathname === '/storagesystem') {
      setModalTypeStorage(true);
    }
  }, [location, modalTypeArticle, modalTypeStorage, modalTypeClient]);

  async function handleOnClickClient() {
    await doPatchClient(clientId, clientName);
    close();
  }
  async function handleOnClickStorage() {
    await doPatchStorage(storageId, storageName);
    close();
  }

  async function handleOnClickArticle() {
    await doPatchArticle(articleId, articleNumber, client, bbd, pzn, ean);
    close();
  }

  function handleClientChange(clientName) {
    setClientName(clientName);
  }

  return (
    <>
      {modalTypeArticle ? (
        <>
          {loadingArticle}
          {errorArticle && 'Error'}
          <ModalContainer>
            <Modal>
              <CloseImage src={Close} onClick={close} />
              <Title>Change Article</Title>
              <ClientDropdown
                value={clientName}
                optionTitle="Please Select Client"
                onContentChange={handleClientChange}
              />
              <InputContainer
                value={articleNumber}
                maxLength="24"
                onChange={(event) => {
                  setArticleNumber(event.target.value);
                }}
              />
              <CheckboxContainer>
                <Checkbox
                  checkStatus={bbd ? 'checked' : null}
                  option="Best-Before-Date"
                  checked={() => {
                    setBbdValue(!bbdValue);
                  }}
                />
                <Checkbox
                  checkStatus={pzn ? 'checked' : null}
                  option="PZN Number"
                  checked={() => {
                    setPznValue(!pznValue);
                  }}
                />
                <Checkbox
                  checkStatus={ean ? 'checked' : null}
                  option="EAN Number"
                  checked={() => {
                    setEanValue(!eanValue);
                  }}
                />
              </CheckboxContainer>
              <CreateArticleButton onClick={handleOnClickArticle}>
                CHANGE
              </CreateArticleButton>
            </Modal>
          </ModalContainer>
        </>
      ) : null}

      {modalTypeClient ? (
        <>
          {loading}
          {error && 'Error'}
          <ModalContainer>
            <Modal>
              <CloseImage src={Close} onClick={close} />
              <Title>Change Client</Title>
              <ClientInput
                value={clientName}
                maxLength="24"
                onChange={(event) => {
                  setClientName(event.target.value);
                }}
              />
              <Button onClick={handleOnClickClient}>CHANGE</Button>
            </Modal>
          </ModalContainer>
        </>
      ) : null}
      {modalTypeStorage ? (
        <>
          {loadingStorage}
          {errorStorage && 'Error'}
          <ModalContainer>
            <Modal>
              <CloseImage src={Close} onClick={close} />
              <Title>Change Storage</Title>
              <StorageContainer
                value={storageName}
                maxLength="24"
                onChange={(event) => {
                  setStorageName(event.target.value);
                }}
              />
              <Button onClick={handleOnClickStorage}>CHANGE</Button>
            </Modal>
          </ModalContainer>
        </>
      ) : null}
    </>
  );
}

ChangeModal.propTypes = {
  close: PropTypes.func,
  client: PropTypes.string,
  clientId: PropTypes.string,
  articleId: PropTypes.string,
  article: PropTypes.string,
  bbd: PropTypes.string,
  pzn: PropTypes.string,
  ean: PropTypes.string,
  storageId: PropTypes.string,
  storage: PropTypes.string,
};
