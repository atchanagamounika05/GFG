import React, { Component } from "react";
import "./counter.css";

class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleDecrement = () => {
    this.setState((prev) => {
      return { count: prev.count - 1 };
    });
  };

  handleReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="card">
        <h2>Counter</h2>
        <p>{this.state.count}</p>
        <button
          className="btn-plus"
          onClick={() =>
            this.setState({
              count: this.state.count + 1,
            })
          }
        >
          +
        </button>
        <button className="btn-mius" onClick={this.handleDecrement}>
          -
        </button>
        <button className="btn-star" onClick={this.handleReset}>
          *
        </button>
      </div>
    );
  }
}

export default ClassCounter;
