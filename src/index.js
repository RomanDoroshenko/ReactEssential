import React from 'react';
import { render } from 'react-dom';
import indexSass from './scss/index.scss';
import FitDayCount from './components/FitDayCount';


render(
  <FitDayCount />,
  document.getElementById('react-container'),
);
