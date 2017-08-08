import React from 'react';
import { render } from 'react-dom';
import './scss/index.scss';
import './scss/mediaqueries.scss';
import App from './components/App';

render(
  <App />,
  document.getElementById('react-container'),
);
