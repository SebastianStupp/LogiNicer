import { addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { configure, addDecorator } from '@storybook/react';
import themeDecorator from './themeDecorator';

addDecorator(themeDecorator);

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'iphone6',
  },
});
