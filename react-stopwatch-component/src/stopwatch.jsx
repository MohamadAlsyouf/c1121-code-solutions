import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ isRunning: false, seconds: 0 });

    this.handleClick = this.handleClick.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.reset = this.reset.bind(this);
  }

  handleClick() {
    this.setState({
      isRunning: !this.state.isRunning
    });
    this.startTimer();
  }

  startTimer() {
    const { isRunning } = this.state;

    if (!isRunning) {
      this.tick = setInterval(() => {
        this.setState({ seconds: this.state.seconds + 1 });
      }, 1000);
    }
  }

  handlePause() {
    const { isRunning } = this.state;
    if (isRunning) {
      clearInterval(this.tick);
      this.setState({ isRunning: false });
    }
  }

  reset() {
    this.setState({ seconds: 0 });
    clearInterval(this.tick);
  }

  render() {
    const isRunning = this.state.isRunning;
    const seconds = this.state.seconds;
    let icon;

    if (!isRunning) {
      icon = <i onClick={this.handleClick} className="fas fa-play"></i>;
    } else {
      icon = <i onClick={this.handlePause} className="fas fa-pause"></i>;
    }

    return (
      <>
        <div onClick={this.reset} className='circle'>
          <span className='time'>{seconds}</span>
        </div>
        <div>
          {icon}
        </div>
      </>
    );
  }
}
export default StopWatch;
