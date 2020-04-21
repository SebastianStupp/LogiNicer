import React from 'react';
import styled from '@emotion/styled';
import Add from '../assets/add.svg';

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function AddButton() {
  return (
    <AddButtonContainer>
      <img src={Add} alt="A Plus Symbol"></img>
    </AddButtonContainer>
  );
}
