import React from 'react';
import styled from '@emotion/styled';
import Header from '../components/Header';
import AddButton from '../components/AddButton';
import ListCard from '../components/ListCard';
import useGetClients from '../hooks/getHook';

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
  return (
    <PageContainer>
      <Header type="menu"></Header>
      <MainContainer>
        {loading && 'loading'}
        {error && alert('Error')}
        {clients && <ListCard content={clients}></ListCard>}
      </MainContainer>
      <AddButton></AddButton>
    </PageContainer>
  );
}
