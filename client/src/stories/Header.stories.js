import React from 'react';
import DefaultHeading from '../components/Header';

export default {
  title: 'Header',
  component: DefaultHeading,
};

export const DefaultHeader = () => (
  <DefaultHeading type="menu"></DefaultHeading>
);

export const LogoutHeader = () => (
  <DefaultHeading type="logout"></DefaultHeading>
);
