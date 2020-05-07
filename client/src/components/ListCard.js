import React from 'react';
import styled from '@emotion/styled';
import Edit from '../assets/edit.svg';
import Delete from '../assets/delete.svg';
import PropTypes from 'prop-types';
import { keyframes } from '@emotion/core';

const menuItemAnimation = keyframes`
from {
  transform: translateY(60%);
  opacity: 0
} to  {
  transform: translateY(0);
  opacity: 1;
}
`;
const ListCardContainer = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.primary};
  width: 100%;
  margin-top: 2px;
  max-width: 500px;
  max-height: 200px;
  color: ${(props) => props.theme.colors.textprimary};
  border: 1px solid black;

  :nth-of-type(1) {
    animation: ${menuItemAnimation} 0.8s ease-in-out forwards 0.5s;
    opacity: 0;
  }
  :nth-of-type(2) {
    animation: ${menuItemAnimation} 0.8s ease-in-out forwards 0.7s;
    opacity: 0;
  }
  :nth-of-type(3) {
    animation: ${menuItemAnimation} 0.8s ease-in-out forwards 0.9s;
    opacity: 0;
  }
  :nth-of-type(4) {
    animation: ${menuItemAnimation} 0.8s ease-in-out forwards 1.1s;
    opacity: 0;
  }
  :nth-of-type(5) {
    animation: ${menuItemAnimation} 0.8s ease-in-out forwards 1.3s;
    opacity: 0;
  }
`;

const ListCardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 80%;
  padding-top: 10px;
  padding-left: 10px;
  font-weight: bold;
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
      <ListCardContent>
        {data.clientname || data.articleNumber || data.storage}
      </ListCardContent>
      <ListSymbolContainer>
        <EditSymbolImage
          src={Edit}
          alt="Edit Symbol"
          onClick={() =>
            change(
              data._id,
              data.clientname
                ? data.clientname
                : data.storage
                ? data.storage
                : data.articleNumber,
              data.client,
              data.bbd,
              data.pzn,
              data.ean
            )
          }
        />
        <DeleteSymbolImage
          src={Delete}
          alt="Delete Symbol"
          onClick={() =>
            remove(
              data._id,
              data.clientname || data.articleNumber || data.storage
            )
          }
        />
      </ListSymbolContainer>
    </ListCardContainer>
  ));
}

ListCard.propTypes = {
  content: PropTypes.array.isRequired,
  change: PropTypes.func,
  remove: PropTypes.func,
};
