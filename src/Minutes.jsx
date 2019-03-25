import React, { Component } from 'react'

export default class Minutes extends Component {
  constructor(props){
    super(props);
  }

  render() {

    let minutes;

    if (isNaN(this.props.setMins)) {
      minutes = 0;
    } else {
      minutes = this.props.setMins;
    }

    return (
      <div>
        <h3>{minutes}</h3>
      </div>
    );
  }
}
