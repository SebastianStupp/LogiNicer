import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import GlobalStyles from './GlobalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
    </ThemeProvider>
  );
}

export default App;
