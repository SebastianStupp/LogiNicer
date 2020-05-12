import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import Button from '../components/Button';
import ClientDropdown from '../components/ClientDropdown';
import ArticleDropdown from '../components/ArticleDropdown';
import ArticleBbdDropdown from '../components/ArticleBbdDropdown';
import ArticlePznDropdown from '../components/ArticlePznDropdown';
import ArticleEanDropdown from '../components/ArticleEanDropdown';
import Input from '../components/Input';
import Confirm from '../components/Confirm';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
    margin-top: 8px;
  }
`;

const VariableContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

const AmountContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 10px;
  width: 100%;
  max-width: 500px;

  h2 {
    color: ${(props) => props.theme.colors.texttertiary};
    margin: 0;
    font-size: 1.4rem;
  }
  input {
    max-width: 100px;
    height: 30px;
    flex-basis: 50%;
    text-align: center;
  }
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

export default function Outbound() {
  const [client, setClient] = React.useState(null);
  const [article, setArticle] = React.useState(null);
  const [amount, setAmount] = React.useState(0);
  const [outboundAmount, setOutboundAmount] = React.useState('');
  const [confirm, setConfirm] = React.useState(false);
  const [bbd, setBbd] = React.useState('');
  const [pzn, setPzn] = React.useState('');
  const [ean, setEan] = React.useState('');
  function handleClientChange(client) {
    setClient(client);
  }

  function handleArticleChange(article) {
    setArticle(article);
    setAmount('1000');
  }
  function handleArticleBbdChange(bbd) {
    setBbd(bbd);
  }
  function handleArticlePznChange(pzn) {
    setPzn(pzn);
  }
  function handleArticleEanChange(ean) {
    setEan(ean);
  }

  function handleOnClickOutbound() {
    setAmount(amount - outboundAmount);
    setConfirm(true);
    setConfirm(false);
  }

  return (
    <PageContainer>
      <Header type="menu" />
      {confirm ? (
        <Confirm>{`Article ${article.articleNumber} was successfully outsourced`}</Confirm>
      ) : null}
      <MainContainer>
        <Title>Outsource Your Items</Title>
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
          placeholder="Enter The Amount to Outsource"
          onChange={(event) => {
            setOutboundAmount(event.target.value);
          }}
        />
        <VariableContainer>
          <ArticleBbdDropdown
            value={bbd}
            readOnly="29.05.2020"
            optionTitle="Select Best-Before-Date"
            onContentChange={handleArticleBbdChange}
          />
          <ArticlePznDropdown
            readOnly="12345678"
            value={pzn}
            optionTitle="Select PZN Number"
            onContentChange={handleArticlePznChange}
          />
          <ArticleEanDropdown
            readOnly="87654321"
            value={ean}
            optionTitle="Select EAN Number"
            onContentChange={handleArticleEanChange}
          />
        </VariableContainer>
        <AmountContainer>
          <h2>Amount in Stock:</h2>
          <Input readOnly="0" value={amount} />
        </AmountContainer>
        <Button onClick={handleOnClickOutbound}>SAVE</Button>
      </MainContainer>
    </PageContainer>
  );
}
