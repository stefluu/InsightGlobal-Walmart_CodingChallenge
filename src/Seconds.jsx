import React, { Component } from 'react'

export default class Seconds extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let seconds;

    if (isNaN(this.props.setSecs)) {
      seconds = 0;
    } else {
      seconds = this.props.setSecs;
    }
    return (
      <div>
        <h3>{seconds}</h3>
      </div>
    );
  }
}
