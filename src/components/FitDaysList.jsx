import React from 'react';
import PropTypes from 'prop-types';
import FitDayRow from './FitDayRow';
import '../scss/fitdaylist.scss';

const fitDayList = props => (
  <table>
    <thead>
      <tr>
        <th>Event</th>
        <th>Date</th>
        <th>Duration</th>
        <th>Note</th>
      </tr>
    </thead>
    <tbody>
      {(props.days).map((day, i) => (
        <FitDayRow
          key={i}
          date={day.date}
          note={day.note}
          duration={day.duration}
          type={Object.keys(day.type).filter(key => (day.type[key])).toString()}
        />),
      )}
    </tbody>


  </table>
  );

export default fitDayList;
