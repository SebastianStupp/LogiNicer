import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ListCard from '../components/ListCard';
import useGetStorages from '../hooks/useGetStorages';
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
  const [{ storages, error, loading }, doGetStorages] = useGetStorages();
  const [showDeleteModal, setShowDeleteModal] = React.useState(false);
  const [showAddModal, setAddModal] = React.useState(false);
  const [showChangeModal, setShowChangeModal] = React.useState(false);
  const [storageId, setStorageId] = React.useState(null);
  const [storage, setStorage] = React.useState(null);

  const handleChangeOnClick = (storageId, storage) => {
    setStorageId(storageId);
    setStorage(storage);
    console.log(storage, storageId, storages);
    setShowChangeModal(!showChangeModal);
  };

  const handleRemoveOnClick = (storageId, storage) => {
    setStorageId(storageId);
    setStorage(storage);
    console.log(storage);
    setShowDeleteModal(!showDeleteModal);
  };

  const onClickCloseChangeModal = () => {
    setShowChangeModal(!showChangeModal);
    doGetStorages();
  };

  const onClickCloseAddModal = () => {
    setAddModal(!showAddModal);
    doGetStorages();
  };

  const onClickOpenAddModal = () => {
    setAddModal(true);
  };

  const onClickCloseDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
    doGetStorages();
  };
  return (
    <PageContainer>
      {showAddModal ? <AddModal close={onClickCloseAddModal} /> : null}
      {showDeleteModal ? (
        <DeleteModal
          close={onClickCloseDeleteModal}
          storageId={storageId}
          storage={storage}
        />
      ) : null}
      {showChangeModal ? (
        <ChangeModal
          close={onClickCloseChangeModal}
          storageId={storageId}
          storage={storage}
        />
      ) : null}
      <Header type="menu" />
      <MainContainer>
        {loading && 'loading'}
        {error && 'Error'}
        {storages && (
          <ListCard
            content={storages}
            remove={handleRemoveOnClick}
            change={handleChangeOnClick}
          />
        )}
      </MainContainer>
      <AddButton modal={onClickOpenAddModal} />
    </PageContainer>
  );
}
