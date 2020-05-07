import React from 'react';
import styled from '@emotion/styled';
import Add from '../assets/add.svg';
import PropTypes from 'prop-types';

const AddButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 15px;
  cursor: pointer;
`;

export default function AddButton({ modal }) {
  return (
    <AddButtonContainer onClick={modal}>
      <img src={Add} alt="A Plus Symbol" />
    </AddButtonContainer>
  );
}

AddButton.propTypes = {
  modal: PropTypes.func,
};
