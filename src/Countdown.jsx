
import React, { Component } from "react";
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import StandardCountdown from './StandardCountdown';
import WordCountdown from './WordCountdown';

export default class Countdown extends Component {
  constructor(props){
    super(props);
    this.state = {
      seconds: 0,
      minutes: 0,
      hours: 0
    }
    
    this.resetStatus = false;

    this.setTimeStates.bind(this);
    this.doAllCountDowns.bind(this);
    this.countDown.bind(this);
    this.continueCountdown.bind(this);
  }

    setTimeStates(){

      let startButton = document.getElementsByClassName("StartButton");
      startButton[0].disabled = true;
      startButton[0].setAttribute("id", "ClickedStart")

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

      this.countDown(start, count);
    }

    countDown(start, count){

      let millisecs;
      let type;

      switch (start) {
        case "hours":
          millisecs = 3.6e6;
          break;
        case "minutes":
          millisecs = 60000;
          break;
        case "seconds":
          millisecs = 1000;
          break;
      
        default:
          break;
      }
        let countingDown = 
        setInterval(() => {
          if(this.resetStatus){
            clearInterval(countingDown);
            this.resetStatus = false;
          }

          else if(count === 0){
            clearInterval(countingDown);

            if(this.state.minutes > 0){
              this.continueCountdown("minutes");
            } else if(this.state.hours > 0){
              this.continueCountdown("hours")
            }

          } else {
            count--;
            
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

  reset(){
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    })
    this.resetStatus = true;

    let startButton = document.getElementsByClassName("StartButton");
      startButton[0].disabled = false;
      startButton[0].removeAttribute("id", "ClickedStart")
  }


  render() {
    let displayFormat = this.props.setTime.display;
    let display;

    switch (displayFormat) {
      case "standard":
        display =
          <StandardCountdown
            setTime={this.state}
            setTimeStates = {this.setTimeStates.bind(this)}
            countdown={this.countdown}
            reset = {this.reset.bind(this)}
            />;
        break;

      case "words":
        display =
          <WordCountdown
            setTime={this.state}
            setTimeStates = {this.setTimeStates.bind(this)}
            countdown={this.countdown}
            reset = {this.reset.bind(this)}
          />;
        break;

      default:
        display =
          <StandardCountdown
            setTime={this.state}
            setTimeStates = {this.setTimeStates.bind(this)}
            countdown={this.countdown}
            reset = {this.reset.bind(this)}
          />;
        break;
    }

  return (
    <div className="Countdown">
        {display}
    </div>
  )}
}
