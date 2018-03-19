import React, { Component } from 'react';
import CarouselProvider from './CarouselProvider';
import Button from './Button'
import '../css/index.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className='carousel-container'>
          <CarouselProvider />
          <Button />
        </div>
      </div>
    );
  }
}

export default Portfolio;
