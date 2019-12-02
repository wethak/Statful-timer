import React, { Component } from "react";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      started: false,
      ms: 0,
      hr: 0,
      mn: 0,
      sec: 0
    };
    setInterval(() => {
      if (this.state.started === true)
        this.setState({
          ms: this.state.ms + 1000
        });
      this.convert();
    }, 1000);
  }

  convert = () => {
    this.setState({
      hr: Math.floor(this.state.ms / 1000 / 3600),
      mn: Math.floor((this.state.ms / 1000 - this.state.hr * 3600) / 60),
      sec: this.state.ms / 1000 - this.state.hr * 3600 - this.state.mn * 60
    });
  };
  handlestart = () => {
    this.setState({
      started: !this.state.started
    });
  };
  handlereset = () => {
    this.setState({
      started: false,
      ms: 0
    });
  };

  render() {
    return (
      <div>
        <h1>
          {String(this.state.hr).padStart(2, 0)}:
          {String(this.state.mn).padStart(2, 0)}:
          {String(this.state.sec).padStart(2, 0)}
        </h1>
        <div>
          <button onClick={this.handlestart}>
            {this.state.started ? "Pause" : "Start"}
          </button>
          <button onClick={this.handlereset}>Reset</button>
        </div>
      </div>
    );
  }
}
