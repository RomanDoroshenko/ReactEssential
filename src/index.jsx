import React from 'react';
import { render } from 'react-dom';
import './scss/index.scss';
import FitDayCount from './components/FitDayCount';


render(
  <FitDayCount
    totalDays={12}
    groupDays={20}
    atWorkDays={40}
    goalDays={31}
  />,
  document.getElementById('react-container'),
);
