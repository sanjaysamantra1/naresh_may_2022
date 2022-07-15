import React, { Component } from "react";

export default class CounterDemo1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log("callback ", this.state.count);
    }); // asynchronous
    console.log(this.state.count);
  };

  render() {
    return (
      <>
        <p>Count is: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}
