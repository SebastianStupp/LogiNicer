import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ListCard from '../components/ListCard';
import useGetClients from '../hooks/useGetClients';
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

export default function ClientMasterPage() {
  const [{ clients, error, loading }, doGetClients] = useGetClients();
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showAddModal, setAddModal] = React.useState(false);
  const [showChangeModal, setShowChangeModal] = React.useState(false);
  const [clientId, setClientId] = React.useState(null);
  const [client, setClient] = React.useState(null);

  const handleChangeOnClick = (clientId, client) => {
    setClientId(clientId);
    setClient(client);

    setShowChangeModal(!showChangeModal);
  };

  const handleRemoveOnClick = (clientId, client) => {
    setClientId(clientId);
    setClient(client);
    setShowDeleteModal(!showDeleteModal);
  };

  const onClickCloseChangeModal = () => {
    setShowChangeModal(!showChangeModal);
    doGetClients();
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
          client={client}
        ></DeleteModal>
      ) : null}
      {showChangeModal ? (
        <ChangeModal
          close={onClickCloseChangeModal}
          clientId={clientId}
          client={client}
        ></ChangeModal>
      ) : null}
      <Header type="menu"></Header>
      <MainContainer>
        {loading && 'loading'}
        {error && 'Error'}
        {clients && (
          <ListCard
            content={clients}
            change={handleChangeOnClick}
            remove={handleRemoveOnClick}
          ></ListCard>
        )}
      </MainContainer>
      <AddButton modal={onClickOpenAddModal}></AddButton>
    </PageContainer>
  );
}
