import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ListCard from '../components/ListCard';
import useGetClients from '../hooks/clientHook';
import DefaultModal from '../components/Modal';

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
  const [{ clients, error, loading }] = useGetClients();
  const [showModal, setShowModal] = React.useState(false);

  const handleClickChange = () => {
    setShowModal(!showModal);
  };

  const handleClickRemove = () => {
    setShowModal(!showModal);
  };

  const handleClickClose = () => {
    setShowModal(!showModal);
  };

  const handleClickAdd = () => {
    setShowModal(!showModal);
  };
  return (
    <PageContainer>
      {showModal ? (
        <DefaultModal close={handleClickClose}></DefaultModal>
      ) : null}
      <Header type="menu"></Header>
      <MainContainer>
        {loading && 'loading'}
        {error && alert('Error')}
        {clients && (
          <ListCard
            content={clients}
            change={handleClickChange}
            remove={handleClickRemove}
          ></ListCard>
        )}
      </MainContainer>
      <AddButton modal={handleClickAdd}></AddButton>
    </PageContainer>
  );
}
