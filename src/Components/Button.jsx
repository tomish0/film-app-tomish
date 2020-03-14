import React, { Component } from "react";
import "../Styles/Button.css";

class Button extends Component {
  state = {};
  render() {
    return (
      <div>
        <div></div>
        <button onClick={this.props.sendRequest}>New Movie</button>
      </div>
    );
  }
}

export default Button;
