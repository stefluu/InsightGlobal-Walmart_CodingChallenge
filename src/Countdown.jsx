
import React, { Component } from "react";
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
    this.setState({
      hours: 0,
      minutes: 0,
      seconds: 0
    });

    this.resetStatus = false;
    const entriesValidity = 
    this.props.validateAllEntries(this.props.setTime.seconds, this.props.setTime.minutes, this.props.setTime.hours);

    if (!entriesValidity) {
      alert("Please enter all number fields with valid numbers(0-9) for countdown. All entries cannot be 0.");
    }
    else if(entriesValidity !== 0){
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
  }
  
  doAllCountDowns(){
    let start;
    let count;

    if (this.props.setTime.seconds){
      start = "seconds";
      count = this.props.setTime.seconds;
      this.setState({seconds: count});
    } 
    
    else if (this.props.setTime.minutes){
      start = "minutes"
      count = this.props.setTime.minutes;
      this.setState({minutes: count});
    } 

    else if (this.props.setTime.hours){
      start = "hours"
      count = this.props.setTime.hours;
      this.setState({hours: count});
    }
    this.countDown(start, count);
  }

  countDown(start, count){

    let countingDown = 
    setInterval(() => {
      if(this.resetStatus){
        clearInterval(countingDown);
      }

      else if(!count){
        if(this.state.minutes > 0){
          this.continueCountdown("minutes");
        } else if(this.state.hours > 0){
          this.continueCountdown("hours")
        }
        clearInterval(countingDown);
        
      } 
      else {
        count--;
        switch(start) {
          case "hours":
            this.continueCountdown("hours")
            break;
          case "minutes":
            this.continueCountdown("minutes");
            break;
          case "seconds":
            this.setState({seconds: count});
            break;            
          default:
            break;
        }
      }
    }, 1000);
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
    
    let inputFields = document.getElementsByClassName("Setter");
    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].readOnly = false;
    };
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
