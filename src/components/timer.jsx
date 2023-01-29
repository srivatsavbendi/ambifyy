import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  state = {
    mode: 'Standard',
    minutes: 0,
    seconds: 0,
    workMinutes: 0,
    restMinutes: 0,
    presetTime: 0,
    timeLeft: 0,
    timer: null,
  }

  handleModeToggle = (mode) => {
    this.setState({ mode });
    document.querySelector("Standard").style.backgroundColor = 'blue';
  }

  handleStandardSubmit = (minutes, seconds) => {
    this.setState({
      minutes,
      seconds,
      timeLeft: (minutes * 60) + seconds,
    });
    this.startTimer();
  }

  handlePomodoroSubmit = (workMinutes, restMinutes) => {
    this.setState({
      workMinutes,
      restMinutes,
      timeLeft: workMinutes * 60,
    });
    this.startTimer();
  }

  handlePresetSubmit = (presetTime) => {
    this.setState({
      presetTime,
      timeLeft: presetTime,
    });
    this.startTimer();
  }

  startTimer = () => {
    clearInterval(this.state.timer);
    const timer = setInterval(() => {
      if (this.state.timeLeft > 0) {
        this.setState({ timeLeft: this.state.timeLeft - 1 });
      } else {
        clearInterval(this.state.timer);
        this.playSoundEffect();
      }
    }, 1000);
    this.setState({ timer });
  }

  playSoundEffect = () => {
    // play sound effect
  }

  render() {
    const { mode, minutes, seconds, workMinutes, restMinutes, presetTime, timeLeft } = this.state;

    return (
      <div className="container timer-container">
        <div className="row justify-content-center my-2">
            <button className="btn btn-lg shadow-lg mode-button col-3 mx-2 Standard" onClick={() => this.handleModeToggle('Standard')}><i className="material-symbols-outlined">timer</i></button>
            <button className="btn btn-lg shadow-lg mode-button col-3 mx-2 Pomodoro" onClick={() => this.handleModeToggle('Pomodoro')}><i className="material-symbols-outlined">nutrition</i></button>
            <button className="btn btn-lg shadow-lg mode-button col-3 mx-2" onClick={() => this.handleModeToggle('Pre Set')}><i className="material-symbols-outlined">filter_frames</i></button>
        </div>

        <div className="row my-3">
            {mode === 'Standard' && (
              <form>
                <div className="row justify-content-center">
                  <input type="number" placeholder="Minutes" value={minutes} onChange={e => this.setState({ minutes: e.target.value })} className=" input-sm border-0 shadow-lg rounded col-4 mx-2" />
                  <input type="number" placeholder="Seconds" value={seconds} onChange={e => this.setState({ seconds: e.target.value })} className=" input-sm border-0 shadow-lg rounded col-4 mx-2" />                    
                  <button className="btn btn-primary col-2 mx-2" onClick={() => this.handleStandardSubmit(minutes, seconds)}>></button>
                </div>
              </form>
            )}
            {mode === 'Pomodoro' && (
              <form>
                <div className="row justify-content-center">
                  <input type="number" placeholder="Work Minutes" value={workMinutes} onChange={e => this.setState({ workMinutes: e.target.value })} className=" input-sm border-0 shadow-lg rounded col-4 mx-2" />
                  <input type="number" placeholder="Rest Minutes" value={restMinutes} onChange={e => this.setState({ restMinutes: e.target.value })} className=" input-sm border-0 shadow-lg rounded col-4 mx-2" />
                  <button className="btn btn-primary col-2 mx-2" onClick={() => this.handlePomodoroSubmit(workMinutes, restMinutes)}>></button>
                </div>
              </form>
            )}
            {mode === 'Pre Set' && (
              <div>
                <button className="btn btn-primary preset-button" onClick={() => this.handlePresetSubmit(600)}>10 min</button>
                <button className="btn btn-primary preset-button" onClick={() => this.handlePresetSubmit(900)}>15 min</button>
                <button className="btn btn-primary preset-button" onClick={() => this.handlePresetSubmit(1800)}>30 min</button>
                <button className="btn btn-primary preset-button" onClick={() => this.handlePresetSubmit(3600)}>60 min</button>
                <button className="btn btn-primary preset-button" onClick={() => this.handlePresetSubmit(7200)}>2 hrs</button>
              </div>
            )}
        </div>
        <div className="row">
          <div className="col">
            {mode === 'Standard' && <div className="timer" style={{ color: 'blue' }}>{Math.floor(timeLeft / 60)} : {timeLeft % 60}</div>}
            {mode === 'Pomodoro' && timeLeft > this.state.workMinutes * 60 ? 
              <div className="timer" style={{ color: 'blue' }}>{Math.floor(timeLeft / 60)} : {timeLeft % 60}</div> : <div className="timer" style={{ color: 'green' }}>{Math.floor(timeLeft / 60)} : {timeLeft % 60}</div>}
            {mode === 'Pre Set' && <div className="timer" style={{ color: 'blue' }}>{Math.floor(timeLeft / 60)} : {timeLeft % 60}</div>}
          </div>
        </div>
      </div>
    );
  }
}

export default Timer;

