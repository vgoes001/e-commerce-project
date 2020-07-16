import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AppProvider from './hooks';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';

ReactDOM.render(
  <React.StrictMode>
      <AppProvider>
        <Router>
          <App />
        </Router>
      </AppProvider>
        <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root')
);
