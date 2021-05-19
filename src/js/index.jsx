import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import '../styles/index.sass';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

module.hot.accept();
