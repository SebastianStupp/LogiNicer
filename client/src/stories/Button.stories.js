import { action } from '@storybook/addon-actions';
import React from 'react';
import Button from '../components/Button';

export default {
  title: 'Button',
};

export const LoginButton = () => (
  <Button onClick={action('click')}>LOGIN</Button>
);
export const CreateButton = () => (
  <Button onClick={action('click')}>CREATE</Button>
);
export const ChangeButton = () => (
  <Button onClick={action('click')}>CHANGE</Button>
);
export const DeleteButton = () => (
  <Button onClick={action('click')}>DELETE</Button>
);
