import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ clickCount: 0 });

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(value) {
    this.setState({ clickCount: this.state.clickCount + 1 });
  }

  render() {
    const clickCount = this.state.clickCount;
    let button;
    let className = 'button';
    if (clickCount < 3) {
      button = <button className={className} onClick={this.handleClick}>Hot Button!</button>;
    } else if (clickCount < 6) {
      className += ' coldest';
      button = <button className={className} onClick={this.handleClick}>Hot Button!</button>;
    } else if (clickCount < 9) {
      className += ' colder';
      button = <button className={className} onClick={this.handleClick}>Hot Button!</button>;
    } else if (clickCount < 12) {
      className += ' warm';
      button = <button className={className} onClick={this.handleClick}>Hot Button!</button>;
    } else if (clickCount < 15) {
      className += ' warmer';
      button = <button className={className} onClick={this.handleClick}>Hot Button!</button>;
    } else if (clickCount < 18) {
      className += ' warmest';
      button = <button className={className} onClick={this.handleClick}>Hot Button!</button>;
    } else {
      className += ' hot';
      button = <button className={className} onClick={this.handleClick}>Hot Button!</button>;
    }
    return (
      <>
        {button}
      </>
    );
  }
}

export default HotButton;
