import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import MainJSX from './components/MainJSX';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <MainJSX />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();