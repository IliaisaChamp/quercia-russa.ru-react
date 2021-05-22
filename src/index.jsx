import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/scss/bootstrap';
import './styles/index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// module.hot.accept();
