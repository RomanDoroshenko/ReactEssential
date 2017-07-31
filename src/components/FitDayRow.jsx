import React from 'react';
import PropTypes from 'prop-types';
import Icons from './Icons';

const FitDayRow = ({ date, duration, note, type }) => {
  const EventIcon = Icons[type];
  return (
    <tr>
      <td><EventIcon /></td>
      <td>{date.getDate()}/{(date.getMonth() + 1)}/{date.getFullYear()}</td>
      <td>{duration}</td>
      <td>{note}</td>
    </tr>
  );
};

export default FitDayRow;

FitDayRow.propTypes = {
  date: PropTypes.instanceOf(Date).isRequired,
  duration: PropTypes.number.isRequired,
  note: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
