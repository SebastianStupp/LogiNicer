import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ListCard from '../components/ListCard';
import useGetClients from '../hooks/useGetClients';
import DeleteModal from '../components/DeleteModal';
import DefaultModal from '../components/Modal';
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

export default function ClientMasterPage() {
  const [{ clients, error, loading }, doGetClients] = useGetClients();
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showAddModal, setAddModal] = React.useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [clientId, setClientId] = React.useState(null);

  const handleClickChange = () => {
    setShowModal(!showModal);
  };

  const handleRemoveOnClick = (clientId) => {
    setClientId(clientId);
    setShowDeleteModal(!showDeleteModal);
  };

  const onClickCloseModal = () => {
    setShowModal(!showModal);
  };

  const onClickCloseAddModal = () => {
    setAddModal(!showAddModal);
    doGetClients();
  };

  const onClickOpenAddModal = () => {
    setAddModal(true);
  };

  const onClickCloseDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
    doGetClients();
  };

  return (
    <PageContainer>
      {showAddModal ? <AddModal close={onClickCloseAddModal}></AddModal> : null}
      {showDeleteModal ? (
        <DeleteModal
          close={onClickCloseDeleteModal}
          clientId={clientId}
        ></DeleteModal>
      ) : null}
      {showModal ? (
        <DefaultModal
          close={onClickCloseModal}
          clientId={clientId}
        ></DefaultModal>
      ) : null}
      <Header type="menu"></Header>
      <MainContainer>
        {loading && 'loading'}
        {error && 'Error'}
        {clients && (
          <ListCard
            content={clients}
            change={handleClickChange}
            remove={handleRemoveOnClick}
          ></ListCard>
        )}
      </MainContainer>
      <AddButton modal={onClickOpenAddModal}></AddButton>
    </PageContainer>
  );
}
