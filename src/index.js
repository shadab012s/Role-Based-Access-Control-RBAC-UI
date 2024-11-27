// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { RBACProvider } from './contexts/RBACContext';

ReactDOM.render(
  <RBACProvider>
    <App />
  </RBACProvider>,
  document.getElementById('root')
);
