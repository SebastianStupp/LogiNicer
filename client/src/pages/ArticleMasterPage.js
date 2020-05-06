import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ListCard from '../components/ListCard';
import useGetArticles from '../hooks/useGetArticles';
import DeleteModal from '../components/DeleteModal';
import ChangeModal from '../components/ChangeModal';
import AddModal from '../components/AddModal';

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
  const [articlenumber, setArticleNumber] = React.useState(null);
  const [client, setClient] = React.useState(null);
  const [bbd, setBbd] = React.useState(false);
  const [pzn, setPzn] = React.useState(false);
  const [ean, setEan] = React.useState(false);

  const handleChangeOnClick = (
    articleId,
    articlenumber,
    client,
    bbd,
    pzn,
    ean
  ) => {
    setArticleId(articleId);
    setArticleNumber(articlenumber);
    setClient(client);
    setBbd(bbd);
    setPzn(pzn);
    setEan(ean);
    setShowChangeModal(!showChangeModal);
  };

  const handleRemoveOnClick = (articleId, articlenumber) => {
    setArticleId(articleId);
    setArticleNumber(articlenumber);

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
      {showAddModal ? <AddModal close={onClickCloseAddModal}></AddModal> : null}
      {showDeleteModal ? (
        <DeleteModal
          close={onClickCloseDeleteModal}
          articleId={articleId}
          article={articlenumber}
        ></DeleteModal>
      ) : null}
      {showChangeModal ? (
        <ChangeModal
          close={onClickCloseChangeModal}
          articleId={articleId}
          article={articlenumber}
          client={client}
          bbd={bbd}
          pzn={pzn}
          ean={ean}
        ></ChangeModal>
      ) : null}
      <Header type="menu"></Header>
      <MainContainer>
        {loading && 'loading'}
        {error && 'Error'}
        {articles && (
          <ListCard
            content={articles}
            change={handleChangeOnClick}
            remove={handleRemoveOnClick}
          ></ListCard>
        )}
      </MainContainer>
      <AddButton modal={onClickOpenAddModal}></AddButton>
    </PageContainer>
  );
}
