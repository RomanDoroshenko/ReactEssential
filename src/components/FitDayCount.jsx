import React from 'react';
import PropTypes from 'prop-types';
import '../scss/fitdaycount.scss';


class FitDayCount extends React.Component {

  getTotalActs() {
    return (this.props.atWorkDays + this.props.groupDays);
  }
  calcGoalProgress() {
    return (`${Math.round((this.getTotalActs() / this.props.goalDays) * 100)} %`);
  }
  render() {
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
              <span className="entry-value">{this.props.goalDays}</span>
            </div>
            <div className="t-row">
              <span className="entry-description">Progress</span>
              <span className="entry-value">
                {this.calcGoalProgress()}
              </span>
            </div>
          </div>
          <div className="table-container">
            <div className="t-header t-row">
              <span className="entry-description">Activity</span>
              <span className="entry-value">Days</span>
            </div>
            <div className="t-row atWorkDays">
              <div className="t-row-description"><span>At work</span></div>
              <div className="t-row-value">{this.props.atWorkDays}</div>
            </div>
            <div className="t-row GroupDays">
              <div className="t-row-description"><span>Group workout</span></div>
              <div className="t-row-value">{this.props.groupDays}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }

}

FitDayCount.propTypes = {
  groupDays: PropTypes.number.isRequired,
  atWorkDays: PropTypes.number.isRequired,
  goalDays: PropTypes.number.isRequired,
};


export default FitDayCount;
