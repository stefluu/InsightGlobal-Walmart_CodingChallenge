import React, { Component } from 'react';
import Hours from "./Hours";
import Minutes from "./Minutes";
import Seconds from "./Seconds";

export default class StandardCountdown extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div className="Countdown">
        <ul>
          <li>
            <Hours setHours={this.props.setTime.hours} />
          </li>
          :
          <li>
            <Minutes setMins={this.props.setTime.minutes} />
          </li>
          :
          <li>
            <Seconds setSecs={this.props.setTime.seconds} />
          </li>
        </ul>

        <button
        // onClick={}
        >
          Start
        </button>
      </div>
    );
  }
}
