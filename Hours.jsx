import React, { Component } from 'react'

export default class Hours extends Component {

  constructor(props){
    super(props);
  }

  render() {
    
    let hours;

    if(isNaN(this.props.setHours)){
      hours = 0;
    } else {
      hours = this.props.setHours;
    }

    return (
      <div>
        <h3>{hours}</h3>
      </div>
    )
  }
}
