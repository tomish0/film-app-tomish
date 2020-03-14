import React, { Component } from "react";
import "../Styles/Filter.css";

class Filter extends Component {
  state = {};

  render() {
    return (
      <input
        type="text"
        onChange={this.props.handleInputTitle}
        value={this.props.movie}
      ></input>
    );
  }
}

export default Filter;
