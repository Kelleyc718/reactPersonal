import React, { Component } from 'react';
import CarouselProvider from './CarouselProvider';
import '../css/porfolio.css';


class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-bg">
        <a className="portfolio" alt="portfolio-link"> </a>
          <div className='carousel-container'>
          <CarouselProvider />
        </div>
      </div>
    );
  }
}

export default Portfolio;
