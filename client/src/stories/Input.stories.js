import React from 'react';
import { action } from '@storybook/addon-actions';
import Input from '../components/Input';

export default {
  title: 'Input',
};

export const ExampleInput = () => <Input onChange={action('Change')}></Input>;
