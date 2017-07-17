import React from 'react';
import { render } from 'react-dom';
import './scss/index.scss';
import FitDayCount from './components/FitDayCount';
import './scss/mediaqueries.scss';


render(
  <FitDayCount
    groupDays={20}
    atWorkDays={40}
    goalDays={30}
  />,
  document.getElementById('react-container'),
);
