import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from './carousel';

const photos = [
  { photo: '../images/025.png' },
  { photo: '../images/001.png' },
  { photo: '../images/004.png' },
  { photo: '../images/007.png' },
  { photo: '../images/039.png' }
];

ReactDOM.render(
  <Carousel photos={photos} />,
  document.querySelector('#root')
);
