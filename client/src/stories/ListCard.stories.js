import React from 'react';
import ListCard from '../components/ListCard';
export default {
  title: 'ListCard',
};

const listCardExmaples = ['Example'];

export const DefaultListCard = () => (
  <ListCard content={listCardExmaples}></ListCard>
);
