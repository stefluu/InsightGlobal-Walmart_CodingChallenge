import React, { Component } from 'react';
import Hours from "./Hours";
import Minutes from "./Minutes";
import Seconds from "./Seconds";

export default class WordCountdown extends Component {
    constructor(props){
        super(props);
        this.state = {
          seconds: 0,
          minutes: 0,
          hours: 0
        }

    }
    

    countDown(){
      let start;
      let count;
      if(this.props.setTime.seconds !== 0){
        start = "seconds";
        count = this.state.seconds;
      } else if(this.props.setTime.minutes !== 0){
        start = "minutes"
      } else {
        start = "hours"
      }

      let millisecs;
      let type;
      // let count = 0;
      // console.log(count)
      let toStop;

      switch (start) {
        case "hours":
          toStop = this.props.setTime.hours;
          millisecs = 3.6e6;
          break;
        case "minutes":
          toStop = this.props.setTime.minutes;
          millisecs = 60000;
          break;
        case "seconds":
          toStop = this.props.setTime.seconds;
          millisecs = 1000;
          break;
      
        default:
          toStop = 0;
          break;
      }

        let countingDown = 
        setInterval(() => {
          if(count === toStop){
            clearInterval(countingDown)
          } else {
            count++;
            console.log(count)
            
            switch (start) {
              case "hours":
                this.setState({hours: count});
                break;
              case "minutes":
                this.setState({minutes: count});
                break;
              case "seconds":
                this.setState({seconds: count});
                break;            
              default:
                break;
            }
          }
        }, millisecs);
    }

  render() {
    return (
      <div className="Countdown">
        <ul>
          <li>
            <Hours setHours={this.state.hours} /> Hours
          </li>
          <li>
            <Minutes setMins={this.state.minutes} /> Minutes
          </li>
          <li>
            <Seconds setSecs={this.state.seconds} /> Seconds
          </li>
        </ul>

        <button
            // onClick={setInterval(() => {
            //     this.countDown()
            //     // alert("hi")
                
            // }, 1000)}
            onClick={this.countDown.bind(this)}
        >
            Start
        </button>
      </div>
    );
  }
}
