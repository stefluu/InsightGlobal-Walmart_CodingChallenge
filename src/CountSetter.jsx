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

  checkEntry(type, val){
    let onlyNumCheck = /\D/;
    if(val.match(onlyNumCheck)){
      alert("Please enter only number inputs.");
      this.clearInvalid(type);
    }

    if(parseInt(val) > 59 || parseInt(val) < 0){
        alert("Please enter numbers between 0 and 60.");
        this.clearInvalid(type);
      }
  }

  clearInvalid(type){
    if(type === "hours"){
      document.getElementById("HourSetter").value = 0;
    }
    if(type === "minutes"){
      document.getElementById("MinuteSetter").value = 0;
    }
    if(type === "seconds") {
      document.getElementById("SecondSetter").value = 0;
    }
  }

  validateAllEntries(entry1, entry2, entry3){
    const allEntriesAdded = entry1 + entry2 + entry3;
    if(isNaN(allEntriesAdded) || allEntriesAdded === 0){
      return false;
    }

    let inputFields = document.getElementsByClassName("Setter");
    for(let i = 0; i < inputFields.length; i++){
      inputFields[i].readOnly = true;
    };
    return true;
  }

  setCount(type){
    return (e) => {
      e.preventDefault();
      this.checkEntry(type, e.target.value);
      this.setState({ [type]: parseInt(e.target.value)});
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
      <div>
        <h2>Clock Countdown</h2>
        <div className="CountSetter">
          <form className="CountSetterForm">
            <ul>
              <li>
                <label>Hours</label>
                <input
                  type="text"
                  className="Setter"
                  id="HourSetter"
                  onChange={this.setCount("hours")}
                />
              </li>
              <li>:</li>
              <li>
                <label>Minutes</label>
                <input
                  type="text"
                  className="Setter"
                  id="MinuteSetter"
                  onChange={this.setCount("minutes")}
                />
              </li>
              <li>:</li>
              <li>
                <label>Seconds</label>
                <input
                  type="text"
                  className="Setter"
                  id="SecondSetter"
                  onChange={this.setCount("seconds")}
                />
              </li>
            </ul>
          </form>

          <div className="LowerBox">
            <CountFormatter setDisplay={this.setDisplay} />
            <Countdown
              setTime={this.state}
              validateAllEntries={this.validateAllEntries}
            />
          </div>
        </div>
      </div>
    );
  }
}

