import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: 5,
  };

  handleInc = () => {
    let newVal = this.state.value;
    newVal++;
    this.setState({ value: newVal });
  };

  handleDec = () => {
    let newVal = this.state.value;
    newVal = Math.max(0, newVal - 1);
    this.setState({ value: newVal });
  };

  getBadge = () => {
    let cl = "font-weight-bolder badge badge-";
    cl += this.state.value === 0 ? "warning" : "primary";
    return cl;
  };

  render() {
    return (
      <div>
        <span className={this.getBadge()}>{this.state.value}</span>
        <button
          className="btn btn-sm btn-outline-success ml-2"
          onClick={this.handleInc}
        >
          +
        </button>
        <button
          className="btn btn-sm btn-outline-danger ml-1"
          onClick={this.handleDec}
        >
          -
        </button>
      </div>
    );
  }
}

export default Counter;
