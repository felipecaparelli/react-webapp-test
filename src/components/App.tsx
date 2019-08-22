import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled, { ThemeProvider } from 'styled-components';

// Define what props.theme will look like
const theme = {
  main: "royalblue"
};

const Button = styled.button`
  cursor: pointer;
  background: transparent;
  font-size: 16px;
  border-radius: 10px;
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
  margin: 0 1em;
  padding: 0.25em 1em;
  transition: 0.5s all ease-out;

  &:hover {
    background-color: ${props => props.theme.main};
    color: white;
  }
`;

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Button>Open App</Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
