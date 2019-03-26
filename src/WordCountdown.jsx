import React, { Component } from 'react';
import Hours from "./Hours";
import Minutes from "./Minutes";
import Seconds from "./Seconds";


export default class WordCountdown extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="Countdown">
        <ul>
          <li>
            <Hours setHours={this.props.setTime.hours} /> Hours
          </li>
          <li>
            <Minutes setMins={this.props.setTime.minutes} /> Minutes
          </li>
          <li>
            <Seconds setSecs={this.props.setTime.seconds} /> Seconds
          </li>
        </ul>

        <button
            onClick={this.props.setTimeStates}
          >
            Start
        </button>
      </div>
    );
  }
}
