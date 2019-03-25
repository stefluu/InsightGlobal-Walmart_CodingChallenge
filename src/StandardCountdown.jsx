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
      <div>
          <ul>
            <Hours setHours={this.props.setTime.hours} />
            <Minutes setMins={this.props.setTime.minutes} />
            <Seconds setSecs={this.props.setTime.seconds} />
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
