import React from 'react';
import FitDaysList from './FitDaysList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      days: [
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
    };
  }

  render() {
    return (
      <div className="App">
        <FitDaysList days={this.state.days} />
      </div>
    );
  }
}

export default App;
