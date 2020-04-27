import React from 'react';
import styled from '@emotion/styled';
import Edit from '../assets/edit.svg';
import Delete from '../assets/delete.svg';
import { action } from '@storybook/addon-actions';
import PropTypes from 'prop-types';

const ListCardContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  max-width: 500px;
  max-height: 200px;
  color: ${(props) => props.theme.colors.textprimary};
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

const ListSymbolImage = styled.img`
  padding: 8px;
`;

const CreateListExampleContent = ({ content }) => {
  return content.map((data) => (
    <ListCardContainer key={data}>
      <ListCardContent>{data}</ListCardContent>
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

export default function ListCard(props) {
  return (
    <>
      <CreateListExampleContent
        content={props.content}
      ></CreateListExampleContent>
    </>
  );
}

ListCard.propTypes = {
  content: PropTypes.array.isRequired,
};
