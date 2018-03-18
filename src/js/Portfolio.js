import React, { Component } from 'react';
import CarouselProvider from './CarouselProvider';
import '../css/index.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <CarouselProvider />
      </div>
    );
  }
}

export default Portfolio;
