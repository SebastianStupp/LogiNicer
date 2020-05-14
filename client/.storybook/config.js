import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';
import StoryRouter from 'storybook-react-router';

addDecorator(themeDecorator);
addDecorator(StoryRouter());
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
});
