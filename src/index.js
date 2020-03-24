import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheets/application.scss';
import App from './App';

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <App />,
    root
  );
}

