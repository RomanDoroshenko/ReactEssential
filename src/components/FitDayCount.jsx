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
  const totalActs = props.atWorkDays + props.groupDays;
  const calcGoalProgress = (total, goal) => (`${Math.round((total / goal) * 100)} %`);
  return (
    <div className="fit-day-count">

      <div className="heading">Fit Days Counter</div>

      <div className="container">

        <div className="table-container stats">
          <div className="t-header t-row">
            <span className="entry-description">Stats</span>
          </div>
          <div className=" t-row">
            <span className="entry-description">Goal</span>
            <span className="entry-value">{props.goalDays}</span>
          </div>
          <div className="t-row">
            <span className="entry-description">Progress</span>
            <span className="entry-value">{calcGoalProgress(totalActs, props.goalDays)}</span>
          </div>
        </div>

        <div className="table-container">
          <div className="t-header t-row">
            <span className="entry-description">Activity</span>
            <span className="entry-value">Days</span>
          </div>
          <div className="t-row atWorkDays">
            <div className="t-row-description"><span>At work</span></div>
            <div className="t-row-value">{props.atWorkDays}</div>
          </div>
          <div className="t-row GroupDays">
            <div className="t-row-description"><span>Group workout</span></div>
            <div className="t-row-value">{props.groupDays}</div>
          </div>
        </div>

      </div>


    </div>);
};

FitDayCount.propTypes = {
  groupDays: PropTypes.number.isRequired,
  atWorkDays: PropTypes.number.isRequired,
  goalDays: PropTypes.number.isRequired,
};


export default FitDayCount;
