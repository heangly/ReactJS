import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ContextProvider } from './context.js';
import './index.css';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.querySelector('#root')
);
