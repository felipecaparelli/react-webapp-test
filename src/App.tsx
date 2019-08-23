import React from 'react';
import { createBrowserHistory } from 'history';

import { ThemeProvider } from 'styled-components';
import { Router } from 'react-router';
import Routes from './Routes';
import { Patient } from './models/patient';

const browserHistory = createBrowserHistory();

// Define what props.theme will look like
const theme = {
  main: "royalblue"
};

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
