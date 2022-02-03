import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isClicked: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    const isClicked = this.state.isClicked;
    let button;
    if (!isClicked) {
      button = <button onClick={this.handleClick}>Click Me!</button>;
    } else {
      button = <button>Thanks!</button>;
    }
    return (
      <div>
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.getElementById('root')
);
