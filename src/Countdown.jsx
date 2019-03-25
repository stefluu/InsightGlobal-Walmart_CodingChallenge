
import React, { Component } from "react";
import Hours from './Hours';
import Minutes from './Minutes';
import Seconds from './Seconds';
import StandardCountdown from './StandardCountdown';
import WordCountdown from './WordCountdown';

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
      case "standard":
        display =
        <StandardCountdown
          setTime={this.props.setTime}
          countdown={this.countdown}
        />;
        break;

      case "words":
        display =
        <WordCountdown
          setTime={this.props.setTime}
          countdown={this.countdown}
        />;
        break;

      default:
        display =
            <StandardCountdown
                setTime={this.props.setTime}
                countdown={this.countdown}
            />;
        break;
    }

    // switch (displayFormat) {
    //     case "inStandard":
    //         display = 
    //         <StandardCountdown 
    //             setTime={this.props.setTime} 
    //             countdown={this.countdown}
    //         />
    //         break;

    //     case "inHours":
    //         display = 
    //         <HoursCountdown 
    //             setTime={this.props.setTime} 
    //             countdown={this.countdown}
    //         />
    //         break;

    //     case "inMinutes":
    //         display = 
    //         <MinutesCountdown 
    //             setTime={this.props.setTime} 
    //             countdown={this.countdown}
    //         />
    //         break;

    //     case "inSeconds":
    //         display = 
    //         <SecondsCountdown 
    //             setTime={this.props.setTime} 
    //             countdown={this.countdown}
    //         />
    //         break;
    
    //     default:
    //         display = 
    //         <StandardCountdown 
    //             setTime={this.props.setTime} 
    //             countdown={this.countdown}
    //         />
    //         break;
    // }

    return (
        <div className="Countdown">
            {display}
            {/* <ul>
                <Hours setHours={this.props.setTime.hours}/>
                <Minutes setMins={this.props.setTime.minutes}/>
                <Seconds setSecs={this.props.setTime.seconds}/>
            </ul> */}
        </div>
    )
  }
}
