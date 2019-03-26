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

    setTimeStates(){
      let count;
      if(this.props.setTime.seconds !== 0){
        count = this.props.setTime.seconds;
        this.setState({seconds: count});
      } 
      
      if(this.props.setTime.minutes !== 0){
        count = this.props.setTime.minutes;
        this.setState({minutes: count});
      } 

      if(this.props.setTime.hours !== 0){
        count = this.props.setTime.hours;
        this.setState({hours: count});
      }

      this.doAllCountDowns();
    }
    
    doAllCountDowns(){
      let start;
      let count;
      if(this.props.setTime.seconds !== 0){
        start = "seconds";
        count = this.props.setTime.seconds;
        this.setState({seconds: count});
      } 
      
      else if(this.props.setTime.minutes !== 0){
        start = "minutes"
        count = this.props.setTime.minutes;
        this.setState({minutes: count});
      } 

      else if(this.props.setTime.hours !== 0){
        start = "hours"
        count = this.props.setTime.hours;
        this.setState({hours: count});
      }

      // this.countDown = this.countDown;
      // for(let i = 0; i < 3; i++){
      //   this.countDown(start, count);
      // };

      this.countDown(start, count);
    }

    countDown(start, count){
      // let start;
      // let count;
      // if(this.props.setTime.seconds !== 0){
      //   start = "seconds";
      //   count = this.props.setTime.seconds;
      //   this.setState({seconds: count});
      // } 
      
      // if(this.props.setTime.minutes !== 0){
      //   start = "minutes"
      //   count = this.props.setTime.minutes;
      //   this.setState({minutes: count});
      // } 

      // if(this.props.setTime.hours !== 0){
      //   start = "hours"
      //   count = this.props.setTime.hours;
      //   this.setState({hours: count});
      // }
      let millisecs;
      let type;
      // let count = 0;
      // console.log(count)
      // let toStop = 0;

      switch (start) {
        case "hours":
          // toStop = this.props.setTime.hours;
          millisecs = 3.6e6;
          break;
        case "minutes":
          // toStop = this.props.setTime.minutes;
          millisecs = 60000;
          break;
        case "seconds":
          // toStop = this.props.setTime.seconds;
          millisecs = 1000;
          break;
      
        default:
          // toStop = 0;
          break;
      }

        let countingDown = 
        setInterval(() => {
          console.log(this.state)
          if(count === 0){
            clearInterval(countingDown);
            console.log(this.state)

            if(this.state.minutes > 0){
              this.continueCountdown("minutes");
            } else if(this.state.hours > 0){
              this.continueCountdown("hours")
            }
            // console.log("done")
            // this.resetIncrements(start);
            // this.doAllCountDowns();
          } else {
            count--;
            console.log(count)

            // this.resetIncrements(start, count);
            
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

        console.log(this.state)
    }

    continueCountdown(type){
      switch (type) {
        case "minutes":
          let minutes = this.state.minutes
          this.setState({seconds: 59});
          this.setState({minutes: minutes-1});
          this.countDown("seconds", 59);
          break;
        
        case "hours":
          let hours = this.state.hours
          this.setState({minutes: 59});
          this.setState({seconds: 59});
          this.setState({hours: hours-1});
          this.countDown("seconds", 59);
          break;
      
        default:
          break;
      }
    }

    // resetIncrements(start, count){
    //   switch (start) {
    //     case "hours":
    //       this.setState({hours: count});
    //       break;
    //     case "minutes":
    //       this.setState({minutes: count});
    //       break;
    //     case "seconds":
    //       this.setState({seconds: count});
    //       break;            
    //     default:
    //       break;
    //   }
    // }

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
            // onClick={this.countDown.bind(this)}
            // onClick={this.doAllCountDowns.bind(this)}
            onClick={this.setTimeStates.bind(this)}

          >
            Start
        </button>
      </div>
    );
  }
}
