import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Button from '../components/Button';
import ClientDropdown from '../components/ClientDropdown';
import ArticleDropdown from '../components/ArticleDropdown';
import StorageDropdown from '../components/StorageDropdown';
import Input from '../components/Input';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
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
  const [client, setClient] = React.useState(null);
  const [article, setArticle] = React.useState(null);
  const [amount, setAmount] = React.useState('');
  const [storage, setStorage] = React.useState('');
  const [bbd, setBbd] = React.useState('');
  const [pzn, setPzn] = React.useState('');
  const [ean, setEan] = React.useState('');
  function handleClientChange(client) {
    setClient(client);
  }

  function handleArticleChange(article) {
    setArticle(article);
  }

  function handleStorageChange(storage) {
    setStorage(storage);
  }

  return (
    <PageContainer>
      <Header type="menu" />
      <MainContainer>
        <Title>Store Your Items</Title>
        <ClientDropdown
          value={client}
          optionTitle="Please Select Client"
          onContentChange={handleClientChange}
        />
        <ArticleDropdown
          value={article}
          optionTitle="Please Select Article"
          onContentChange={handleArticleChange}
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
          onContentChange={handleStorageChange}
        />
        <VariableContainer>
          <VariableInputContainer
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
        <Button>SAVE</Button>
      </MainContainer>
    </PageContainer>
  );
}
