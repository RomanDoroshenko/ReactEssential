import React from 'react';
import fitdayscount from '../scss/fitdaycount.scss';

function FitDayCount() {
  return (
    <div className="fit-day-count">
      <div className="total-days">
        <span>4 days total</span>
      </div>
      <div className="group-workout-days">
        <span>2 days group</span>
      </div>
      <div className="execize-at-work-days">
        <span>3 days at work</span>
      </div>
    </div>
  );
}

export default FitDayCount;
