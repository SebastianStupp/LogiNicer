import React from 'react';
import styled from '@emotion/styled';
import Edit from '../assets/edit.svg';
import Delete from '../assets/delete.svg';
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

const EditSymbolImage = styled.img`
  padding: 8px;
  cursor: pointer;
`;

const DeleteSymbolImage = styled.img`
  padding: 8px;
  cursor: pointer;
`;

export default function ListCard({ change, content, remove }) {
  return content.map((data) => (
    <ListCardContainer key={data._id}>
      <ListCardContent>{data.clientname}</ListCardContent>
      <ListSymbolContainer>
        <EditSymbolImage
          src={Edit}
          alt="Edit Symbol"
          onClick={change}
        ></EditSymbolImage>
        <DeleteSymbolImage
          src={Delete}
          alt="Delete Symbol"
          onClick={() => remove(data._id)}
        ></DeleteSymbolImage>
      </ListSymbolContainer>
    </ListCardContainer>
  ));
}

ListCard.propTypes = {
  content: PropTypes.array.isRequired,
  change: PropTypes.func,
  remove: PropTypes.func,
};
