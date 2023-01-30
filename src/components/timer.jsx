import React, { Component } from 'react';

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRunning: false,
      time: {
        minutes: '00',
        seconds: '00',
      },
    };
    this.handleMinuteChange = this.handleMinuteChange.bind(this);
    this.handleSecondChange = this.handleSecondChange.bind(this);
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.handleOnFocus = this.handleOnFocus.bind(this);
  }

  handleMinuteChange(event) {
    let minutes = event.target.value
    if (minutes.length > 2) minutes = minutes.substring(0, 2);
    if (minutes === '') minutes = '00';
    this.setState({
      time: {
        minutes,
        seconds: this.state.time.seconds
      }
    });
  }

  handleSecondChange(event) {
    let seconds = event.target.value
    if (seconds.length > 2) seconds = seconds.substring(0, 2);
    if (seconds === '') seconds = '00';
    this.setState({
      time: {
        minutes: this.state.time.minutes,
        seconds
      }
    });
  }

  handleStart() {
    if (this.state.time.minutes === '00' && this.state.time.seconds === '00') return;
    this.setState({ isRunning: true });
    this.timer = setInterval(() => {
      let { minutes, seconds } = this.state.time;
      minutes = parseInt(minutes);
      seconds = parseInt(seconds);
      if (seconds > 0) {
        this.setState({
          time: {
            minutes,
            seconds: seconds - 1,
          },
        });
      } else if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(this.timer);
        } else {
          this.setState({
            time: {
              minutes: minutes - 1,
              seconds: 59,
            },
          });
        }
      }
    }, 1000);
  }

  handleStop() {
    this.setState({ isRunning: false });
    clearInterval(this.timer);
  }

  handleReset() {
    this.setState({
      time: {
        minutes: '00',
        seconds: '00',
      },
    });
  }
  handleOnFocus(event) {
    event.target.value = ""
  }

  render() {
    return (
      <div>
        <div className="row m-1 ">
          <div className="col-2 m-1"> </div>
          <input className="col-4 border-0 display-6 text-right minutes " type="number" value={this.state.time.minutes} onChange={this.handleMinuteChange} placeholder='00' onFocus={this.handleOnFocus} min="00" max="59" />
          <input className="col-4 border-0 display-6 text-left seconds" type="number" value={this.state.time.seconds} onChange={this.handleSecondChange} placeholder='00' onFocus={this.handleOnFocus} min="00" max="59" />
          <div className="col-1"> </div>
        </div>

        <div className="justify-content-center">
          <div className="row m-1">
            <button className="col m-2 shadow btn btn-lg " onClick={this.handleStart}>Start</button>
            <button className="col m-2 shadow btn btn-lg " onClick={this.handleStop}>Stop</button>
            <button className="col m-2 shadow btn btn-lg " onClick={this.handleReset}>Reset</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;
