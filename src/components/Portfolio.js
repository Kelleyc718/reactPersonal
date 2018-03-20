import React, { Component } from 'react';
import CarouselProvider from './CarouselProvider';
import '../css/index.css';


class Portfolio extends Component {
  render() {
    return (
      <div className="bg3">
        <a name="portfolio" />
        <div className="portfolio-container">
          <div className='carousel-container'>
            <CarouselProvider />
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
