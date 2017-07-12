import React from 'react';
import { render } from 'react-dom';
import { hello, goodbye } from './lib';
import FitDayCount from './components/FitDayCount';

render(
  <FitDayCount />,
  document.getElementById('react-container'),
);
