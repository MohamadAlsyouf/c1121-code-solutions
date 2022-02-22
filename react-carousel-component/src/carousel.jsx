import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.nextImage = this.nextImage.bind(this);
    this.previousImage = this.previousImage.bind(this);
    this.startInterval = this.startInterval.bind(this);
    this.resetInterval = this.resetInterval.bind(this);
  }

  handleClick(event, index) {
    if (event.target.className === 'fas fa-chevron-right') {
      this.nextImage();
    } else if (event.target.className === 'fas fa-chevron-left') {
      this.previousImage();
    } else if (event.target.className.includes('fa-circle')) {
      this.setState({
        currentIndex: index
      });
      this.resetInterval();
    }
  }

  componentDidMount() {
    this.startInterval();
  }

  nextImage() {
    if (this.state.currentIndex >= this.props.photos.length - 1) {
      this.setState({
        currentIndex: 0
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex + 1
      });
    }
    this.resetInterval();
  }

  previousImage() {
    if (this.state.currentIndex <= 0) {
      this.setState({
        currentIndex: this.props.photos.length - 1
      });
    } else {
      this.setState({
        currentIndex: this.state.currentIndex - 1
      });
    }
    this.resetInterval();
  }

  startInterval() {
    this.interval = setInterval(this.nextImage, 3000);
  }

  resetInterval() {
    clearInterval(this.interval);
    this.startInterval();
  }

  render() {
    return (
      <div className="container">
        <div className="style">
          <div className="row">
            <div className="column-third">
              <i onClick={this.handleClick} className="fas fa-chevron-left"></i>
            </div>
              <div className="center-img">
                <img src={this.props.photos[this.state.currentIndex].photo}></img>
            </div>
            <div className="column-third">
              <i onClick={this.handleClick} className="fas fa-chevron-right"></i>
            </div>
          </div>
          <div className="circle-container">
            {this.props.photos.map((photo, index) => {
              return (
              <i
              onClick={event => this.handleClick(event, index)}
              key={index}
              className={
                this.state.currentIndex === index
                  ? 'fas fa-circle'
                  : 'far fa-circle'}>
              </i>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
