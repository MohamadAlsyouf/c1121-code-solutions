import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({ value: '', isValid: false });

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    const value = this.state.value;
    let icon;
    let warning;

    if (value === '') {
      warning = <p>A password is required.</p>;
      icon = <i className="fas fa-times"></i>;
    } else if (value.length < 8) {
      warning = <p>Your password is too short.</p>;
      icon = <i className="fas fa-times"></i>;
    } else {
      icon = <i className="fas fa-check"></i>;
    }

    return (
      <>
        <form>
          <label htmlFor='password'>
            Password
          </label>
          <input
            name='password'
            type="password"
            value={this.state.value}
            onChange={this.handleChange} />
          {icon}
        </form>
        {warning}
      </>
    );
  }
}
export default ValidatedInput;
