import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import GlobalStyles from '../src/components/GlobalStyles';
import theme from '../src/theme';

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {storyFn()}
  </ThemeProvider>
);

export default ThemeDecorator;
