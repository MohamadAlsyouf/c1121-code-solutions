import React from 'react';

class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.showDetails = this.showDetails.bind(this);
  }

  showDetails(event) {
    if (this.state.isOpen === Number(event.target.id)) {
      this.setState({ isOpen: null });
    } else {
      this.setState({ isOpen: Number(event.target.id) });
    }
  }

  handleClick(event) {
    this.showDetails(event);
  }

  render() {
    const languageList = this.props.languages.map(language => {

      return (
        this.state.isOpen === language.id
          ? <div key={language.id}>
            <button onClick={this.handleClick} id={language.id}>
              {language.name}
            </button>
            <div className="details">{language.description}</div>
          </div>
          : <div key={language.id}>
            <button onClick={this.handleClick} id={language.id}>
              {language.name}
            </button>
            <div className="hidden details">{language.description}</div>
          </div>
      );
    });

    return (
      <div className='row'>
        {languageList}
      </div>
    );
  }
}

export default Accordion;
