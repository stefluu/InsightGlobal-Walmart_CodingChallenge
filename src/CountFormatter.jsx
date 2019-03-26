import React, { Component } from 'react'

export default class CountFormatter extends Component {
  render() {
    return (
      <div>
        <form>
            Display:
            <li>
                Standard(H:M:S)
                <input
                    type="radio"
                    name="display"
                    value="standard"
                    onClick={this.props.setDisplay}
                />
            </li>
            <li>
                In Words:
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
