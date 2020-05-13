import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Button from '../components/Button';
import ClientDropdown from '../components/ClientDropdown';
import ArticleDropdown from '../components/ArticleDropdown';
import StorageDropdown from '../components/StorageDropdown';
import Input from '../components/Input';
import usePostArticleStock from '../hooks/usePostArticleStock';
import Confirm from '../components/Confirm';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  max-width: 100%;
  overflow: hidden;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  select {
    margin-bottom: 15px;
  }
  button {
    margin-top: 20px;
  }
`;

const VariableContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

const Title = styled.h2`
  color: ${(props) => props.theme.colors.texttertiary};
  margin-bottom: 25px;
`;

const InputContainer = styled(Input)`
  text-align: center;
  font-size: 0.9rem;
  margin-bottom: 20px;
`;

const VariableInputContainer = styled(Input)`
  text-align: center;
  height: 30px;
  font-size: 1rem;
  margin-bottom: 10px;
`;

export default function Inbound() {
  const [, doPostArticleStock] = usePostArticleStock();
  const [client, setClient] = React.useState(null);
  const [clientId, setClientId] = React.useState(null);
  const [article, setArticle] = React.useState(null);
  const [articleId, setArticleId] = React.useState(null);
  const [amount, setAmount] = React.useState('');
  const [storage, setStorage] = React.useState('');
  const [storageId, setStorageId] = React.useState('');
  const [confirm, setConfirm] = React.useState(false);
  const [bbd, setBbd] = React.useState('');
  const [pzn, setPzn] = React.useState('');
  const [ean, setEan] = React.useState('');

  function handleClientChange(client) {
    setClientId(client._id);
    setClient(client);
  }

  function handleArticleChange(article) {
    setArticleId(article._id);
    setArticle(article);
  }

  function handleStorageChange(storage) {
    setStorage(storage);
    setStorageId(storage._id);
  }

  async function handleOnClickArticleStock() {
    await doPostArticleStock(
      clientId,
      articleId,
      amount,
      storageId,
      bbd,
      pzn,
      ean
    );
    setConfirm(!confirm);
  }

  return (
    <PageContainer>
      <Header type="menu" />
      {confirm ? (
        <Confirm>{`Article ${article.articleNumber} was successfully stored`}</Confirm>
      ) : null}
      <MainContainer>
        <Title>Store Your Items</Title>
        <ClientDropdown
          value={client}
          optionTitle="Please Select Client"
          onChange={handleClientChange}
        />
        <ArticleDropdown
          value={article}
          optionTitle="Please Select Article"
          onChange={handleArticleChange}
        />
        <InputContainer
          defaultValue={amount}
          placeholder="Please Enter The Amount to Store"
          onChange={(event) => {
            setAmount(event.target.value);
          }}
        />
        <StorageDropdown
          value={storage}
          optionTitle="Please Select Storage"
          onChange={handleStorageChange}
        />
        <VariableContainer>
          <VariableInputContainer
            type="date"
            defaultValue={bbd}
            placeholder="Enter Best-Before-Date"
            onChange={(event) => {
              setBbd(event.target.value);
            }}
          />
          <VariableInputContainer
            defaultValue={pzn}
            placeholder="Enter PZN Number"
            onChange={(event) => {
              setPzn(event.target.value);
            }}
          />
          <VariableInputContainer
            defaultValue={ean}
            placeholder="Enter EAN Number"
            onChange={(event) => {
              setEan(event.target.value);
            }}
          />
        </VariableContainer>
        <Button onClick={handleOnClickArticleStock}>SAVE</Button>
      </MainContainer>
    </PageContainer>
  );
}
