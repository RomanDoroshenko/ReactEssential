import React from 'react';
import { render } from 'react-dom';
import './scss/index.scss';
import FitDaysList from './components/FitDaysList';
import './scss/mediaqueries.scss';

render(
  <FitDaysList days={
  [
    {
      date: new Date('1/24/2018'),
      duration: 20,
      note: 'job wokout',
      type: {
        Group: false,
        AtWork: false,
        Gym: true,
      },

    },
    {
      date: new Date('7/30/2017'),
      duration: 30,
      note: 'hello',
      type: {
        Group: false,
        AtWork: true,
        Gym: false,
      },

    },
    {
      date: new Date('3/4/2016'),
      duration: 60,
      note: 'gym a bit',
      type: {
        Group: true,
        AtWork: false,
        Gym: false,
      },
    },
  ]
    }

  />,
  document.getElementById('react-container'),
);
