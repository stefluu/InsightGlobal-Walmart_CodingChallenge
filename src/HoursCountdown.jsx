import React, { Component } from 'react';

export default class HoursCountdown extends Component {
    constructor(props) {
        super(props);
    }

  render() {
    //   let minutes = {this.props.setTime.minutes}/60
    return (
      <div>
        <ul>
            <Hours setHours={this.props.setTime.hours} />
            
        </ul>

        <button
        // onClick={}
        >
            Start
          </button>
      </div>
    )
  }
}
