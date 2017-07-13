import React from 'react';
import PropTypes from 'prop-types';
import '../scss/fitdaycount.scss';

// class FitDayCount extends React.Component {
//   render() {
//     return (
//       <div className="fit-day-count">
//         <div className="total-days">
//           <span>{ this.props.totalDays }</span>
//         </div>
//         <div className="group-workout-days">
//           <span>{ this.props.groupDays }</span>
//         </div>
//         <div className="execize-at-work-days">
//           <span>{ this.props.atWorkDays }</span>
//         </div>
//       </div>
//     );
//   }
// }

const FitDayCount = props => (
  <div className="fit-day-count">
    <div className="total-days">
      <span>Total days: { props.totalDays }</span><br />
      <span className="goal">Goal: 31</span>
    </div>
    <div className="group-workout-days">
      <span>{ props.groupDays }</span>
    </div>
    <div className="execize-at-work-days">
      <span>{ props.atWorkDays }</span>
    </div>
  </div>);

FitDayCount.propTypes = {
  totalDays: PropTypes.number.isRequired,
  groupDays: PropTypes.number.isRequired,
  atWorkDays: PropTypes.number.isRequired,
};


export default FitDayCount;
