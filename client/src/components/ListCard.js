import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import Edit from '../assets/edit.svg';
import Delete from '../assets/delete.svg';
import { action } from '@storybook/addon-actions';

const ListCardContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  max-width: 500px;
  height: 20vh;
  max-height: 150px;
  color: ${(props) => props.theme.colors.textprimary};
  padding: 0px;
  border: 1px solid black;
`;

const ListCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
  padding-top: 10px;
  padding-left: 10px;
  font-size: 1.8rem;
`;

const ListSymbolContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 20%;
  flex-direction: column;
  justify-content: space-around;
`;

const ListSymbolImage = styled.img``;

const ListExampleContent = ['ClientNameOne', 'ClientNameTwo'];

const CreateListExampleContent = () => {
  return ListExampleContent.map((Content) => (
    <ListCardContainer key={Content}>
      <ListCardContent>{Content}</ListCardContent>
      <ListSymbolContainer>
        <ListSymbolImage
          src={Edit}
          alt="Edit Symbol"
          onClick={action('click')}
        ></ListSymbolImage>
        <ListSymbolImage
          src={Delete}
          alt="Delete Symbol"
          onClick={action('click')}
        ></ListSymbolImage>
      </ListSymbolContainer>
    </ListCardContainer>
  ));
};

export default function DefaultListCard() {
  return (
    <>
      <CreateListExampleContent></CreateListExampleContent>
    </>
  );
}

DefaultListCard.propTypes = {
  type: PropTypes.string,
};
