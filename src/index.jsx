import React from 'react';
import { render } from 'react-dom';
import indexSass from './scss/index.scss';
import FitDayCount from './components/FitDayCount';


render(
  <FitDayCount
    totalDays={30}
    groupDays={20}
    atWorkDays={40}
  />,
  document.getElementById('react-container'),
);
