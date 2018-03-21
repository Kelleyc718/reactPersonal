import React, { Component } from 'react';
import CarouselProvider from './CarouselProvider';
import '../css/index.css';


class Portfolio extends Component {
  render() {
    return (
      <div className="bg3">
        <a name="portfolio" />
        <div className='carousel-container'>
          <CarouselProvider />
        </div>
      </div>
    );
  }
}

export default Portfolio;
