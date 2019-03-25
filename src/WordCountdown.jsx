import React, { Component } from 'react';
import Hours from "./Hours";
import Minutes from "./Minutes";
import Seconds from "./Seconds";

export default class WordCountdown extends Component {
  render() {
    return (
        <div className="Countdown">
            <ul>  
                <li>
                    <Hours />  Hours 
                </li>
                <li>
                    <Minutes />  Minutes 
                </li>
                <li>
                    <Seconds />  Seconds 
                </li>
            </ul>
        </div>
    )
  }
}
