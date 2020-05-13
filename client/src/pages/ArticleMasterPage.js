import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ListCard from '../components/ListCard';
import useGetArticles from '../hooks/useGetArticles';
import DeleteModal from '../components/DeleteModal';
import ChangeModal from '../components/ChangeModal';
import AddModal from '../components/AddModal';
import Loader from '../animations/Loader';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
`;

export default function ArticleMasterPage() {
  const [{ articles, error, loading }, doGetArticles] = useGetArticles();
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showAddModal, setAddModal] = React.useState(false);
  const [showChangeModal, setShowChangeModal] = React.useState(false);
  const [articleId, setArticleId] = React.useState(null);
  const [articleNumber, setArticleNumber] = React.useState(null);
  const [client, setClient] = React.useState(null);
  const [bbd, setBbd] = React.useState(false);
  const [pzn, setPzn] = React.useState(false);
  const [ean, setEan] = React.useState(false);

  const handleChangeOnClick = (
    articleId,
    articleNumber,
    client,
    bbd,
    pzn,
    ean
  ) => {
    setArticleId(articleId);
    setArticleNumber(articleNumber);
    setClient(client);
    setBbd(bbd);
    setPzn(pzn);
    setEan(ean);
    setShowChangeModal(!showChangeModal);
  };

  const handleRemoveOnClick = (articleId, articleNumber) => {
    setArticleId(articleId);
    setArticleNumber(articleNumber);

    setShowDeleteModal(!showDeleteModal);
  };

  const onClickCloseChangeModal = () => {
    setShowChangeModal(!showChangeModal);
    doGetArticles();
  };

  const onClickCloseAddModal = () => {
    setAddModal(!showAddModal);
    doGetArticles();
  };

  const onClickOpenAddModal = () => {
    setAddModal(true);
  };

  const onClickCloseDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
    doGetArticles();
  };

  return (
    <PageContainer>
      {showAddModal ? <AddModal close={onClickCloseAddModal} /> : null}
      {showDeleteModal ? (
        <DeleteModal
          close={onClickCloseDeleteModal}
          articleId={articleId}
          article={articleNumber}
        />
      ) : null}
      {showChangeModal ? (
        <ChangeModal
          close={onClickCloseChangeModal}
          articleId={articleId}
          article={articleNumber}
          client={client}
          bbd={bbd}
          pzn={pzn}
          ean={ean}
        />
      ) : null}
      <Header type="menu" />
      <MainContainer>
        {loading && <Loader />}
        {error && 'Error'}
        {articles && (
          <ListCard
            content={articles}
            change={handleChangeOnClick}
            remove={handleRemoveOnClick}
          />
        )}
      </MainContainer>
      <AddButton modal={onClickOpenAddModal} />
    </PageContainer>
  );
}
