import React, { Component } from 'react'

export default class CountFormatter extends Component {
  render() {
    return (
      <div className="CountFormatterBox">
        <h3>Display:</h3>
        <form className="CountFormatterForm">
            <li>
                <label>Standard(H:M:S)</label>
                <input
                    type="radio"
                    name="display"
                    value="standard"
                    onClick={this.props.setDisplay}
                />
            </li>
            <li>
                <label>In Words:</label>
                <input
                    type="radio"
                    name="display"
                    value="words"
                    onClick={this.props.setDisplay} 
            />
            </li>
        </form>
      </div>
    )
  }
}
