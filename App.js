import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CountSetter from './CountSetter';


class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="CounterParent">
        <CountSetter /> 
        {/* <Countdown /> */}
       </div>
      </div>
    );
  }
}

export default App;
