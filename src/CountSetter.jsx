import React, { Component } from 'react';
import Countdown from "./Countdown";
import CountFormatter from "./CountFormatter";

export default class CountSetter extends Component {
  constructor(props){
    super(props);
    this.state = {
      hours: 0,
      minutes: 0,
      seconds: 0,
      display: ""
    };
    this.setDisplay = this.setDisplay.bind(this)
  }

  setCount(type){
    return (e) => {
      e.preventDefault();
      console.log(e.target.value)
      this.setState({ [type]: parseInt(e.target.value) }, () => {
        console.log(this.state)
      });
    }
  }

  setDisplay(){
    let allDisplays = document.getElementsByName("display");
    
    for(let i = 0; i < allDisplays.length; i++){
      if(allDisplays[i].checked){
        this.setState({display: allDisplays[i].value})
      }
    }
  }


  render(){
    return (
      <div className="CountSetter">
        <form className="CountSetterForm">
          <ul>
            <li>
              Hours
              <input type="text" onChange={this.setCount("hours")} />
            </li>
            :
            <li>
              Minutes
              <input type="text" onChange={this.setCount("minutes")} />
            </li>
            :
            <li>
              Seconds
              <input type="text" onChange={this.setCount("seconds")} />
            </li>
          </ul>
        </form>

       <div className="LowerBox">
          <CountFormatter setDisplay={this.setDisplay}/>
          <Countdown setTime={this.state} />
       </div>
        
      </div>
    );
  }
}

