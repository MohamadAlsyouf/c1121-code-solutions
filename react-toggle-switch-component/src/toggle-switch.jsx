import React from 'react';

class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ isToggleOn: false });
    this.handleClick = this.handleClick.bind(this);
  }

  getSwitchClass() {
    const { isToggleOn } = this.state;
    if (isToggleOn) return 'on';
    return 'off';
  }

  getKnobClass() {
    const { isToggleOn } = this.state;
    if (isToggleOn) return 'knob-on';
    return 'knob-off';
  }

  handleClick() {
    this.setState(previousState => ({
      isToggleOn: !previousState.isToggleOn
    }));
  }

  render() {
    const isToggled = this.state.isToggleOn;
    const switchClass = this.getSwitchClass();
    const knobClass = this.getKnobClass();

    return (
      <>
        <div
          onClick={this.handleClick}
          className={ `toggle-switch ${switchClass}` }>
          <div className={knobClass}></div>
        </div>
        <span>
          {isToggled ? 'ON' : 'OFF' }
        </span>
      </>
    );
  }
}

export default ToggleSwitch;
