import React, { Component } from 'react';
import CarouselProvider from './CarouselProvider';
import Button from './Button'
import '../css/index.css';

const getInfo = (results) => {
  return (results);
};

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className='carousel-container'>
          <CarouselProvider getInfo={getInfo}/>
          <Button getInfo={getInfo}/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
