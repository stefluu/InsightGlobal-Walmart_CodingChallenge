
import React, { Component } from "react";
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';

export default class Countdown extends Component {

    constructor(props){
        super(props);
    }
    
    countdown(){

    }

  render() {
    console.log(this.props.setTime);
    let displayFormat = this.props.setTime.display;
    let display;

    switch (displayFormat) {
        case "inStandard":
            display = 
            <StandardCountdown 
                setTime={this.props.setTime} 
                countdown={this.countdown}
            />
            break;

        case "inHours":
            display = 
            <HoursCountdown 
                setTime={this.props.setTime} 
                countdown={this.countdown}
            />
            break;

        case "inMinutes":
            display = 
            <MinutesCountdown 
                setTime={this.props.setTime} 
                countdown={this.countdown}
            />
            break;

        case "inSeconds":
            display = 
            <SecondsCountdown 
                setTime={this.props.setTime} 
                countdown={this.countdown}
            />
            break;
    
        default:
            display = 
            <StandardCountdown 
                setTime={this.props.setTime} 
                countdown={this.countdown}
            />
            break;
    }

    return (
        <div className="Countdown">
            <ul>
                <Hours setHours={this.props.setTime.hours}/>
                <Minutes setMins={this.props.setTime.minutes}/>
                <Seconds setSecs={this.props.setTime.seconds}/>
            </ul>
        </div>
    )
  }
}
