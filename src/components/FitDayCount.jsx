import React from 'react';
import PropTypes from 'prop-types';
import '../scss/fitdaycount.scss';

//   <div className="total-days">
//     <span>Total days: { props.totalDays }</span>
//     <div className="goal-days">Goal days: { props.goalDays }</div>
//     <div className="progress">
//       Progress: {calcGoalProgress(props.totalDays, props.goalDays)}
//     </div>
//   </div>
//   <div className="group-workout-days">
//     <span>Group workout days { props.groupDays }</span>
//   </div>
//   <div className="execize-at-work-days">
//     <span>At work days: { props.atWorkDays }</span>
//   </div>

// calcGoalProgress(props.totalDays / props.goalDays)

const FitDayCount = (props) => {
  const calcGoalProgress = (total, goal) => (`${Math.round((total / goal) * 100)} %`);
  return (
    <div className="fit-day-count">
      <h1>Fit Days Counter</h1>
      <div className="card atWorkDays">
        <div className="card-description"><span>At work Days</span></div>
        <div className="card-value">{props.atWorkDays}</div>
      </div>
      <div className="card GroupDays">
        <div className="card-description"><span>Group Days</span></div>
        <div className="card-value">{props.groupDays}</div>
      </div>
      <div className="card goal">
        <div className="card-description"><span>GOAL</span></div>
        <div className="card-value">{props.totalDays}</div>
      </div>
      <div className="card totalDays">
        <div className="card-description"><span>TOTAL</span></div>
        <div className="card-value">
          ({calcGoalProgress(props.totalDays, props.goalDays)}) {props.totalDays}
        </div>
      </div>
    </div>);
};

FitDayCount.propTypes = {
  totalDays: PropTypes.number.isRequired,
  groupDays: PropTypes.number.isRequired,
  atWorkDays: PropTypes.number.isRequired,
  goalDays: PropTypes.number.isRequired,
};


export default FitDayCount;
