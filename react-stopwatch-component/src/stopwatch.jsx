import React from 'react';

class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ isRunning: false, seconds: 0 });
    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.countUp = this.timer.bind(this);
  }

  handleClick() {
    this.setState(previousState => ({
      isRunning: !previousState.isRunning
    }));
  }

  // countUp() {
  //   this.setState({
  //     seconds: this.state.seconds + 1
  //   });
  // }

  // not working!!!!! how to get the play button to initiate this?
  timer() {
    const { isRunning } = this.state;
    let tick;

    if (!isRunning) {
      tick = setInterval(this.countUp, 1000);
      this.setState({ seconds: this.state.seconds + 1 });
    } else {
      clearInterval(tick);
      this.setState({ seconds: 0 });
    }
  }

  render() {
    const running = this.state.running;
    const seconds = this.state.seconds;
    // if statements maybe here

    return (
      <>
        <div className='circle'>
          <span className='time'>{seconds}</span>
          <i onClick={this.timer} className="fas fa-play"></i>
        </div>
      </>
    );
  }
}
export default StopWatch;
