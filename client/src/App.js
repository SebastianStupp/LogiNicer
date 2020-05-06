import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Menu from './pages/Menu';
import ClientMasterPage from './pages/ClientMasterPage';
import ArticleMasterPage from './pages/ArticleMasterPage';
import StorageMasterPage from './pages/StorageMasterPage';
import Inbound from './pages/Inbound';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path="/menu">
            <Menu></Menu>
          </Route>
          <Route path="/clientmaster">
            <ClientMasterPage />
          </Route>
          <Route path="/articlemaster">
            <ArticleMasterPage />
          </Route>
          <Route path="/storagesystem">
            <StorageMasterPage />
          </Route>
          <Route path="/inbound">
            <Inbound></Inbound>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
