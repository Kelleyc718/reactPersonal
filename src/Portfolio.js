import React, { Component } from 'react';
import './App.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio slide-1">
          <img src={this.props.img} alt="portfolio project"/>
        </div>
        <div className="portfolio slide-2">
          <img src={this.props.img} alt="portfolio project"/>
        </div>
        <div className="portfolio slide-3">
          <img src={this.props.img} alt="portfolio project"/>
        </div>
        <div className="portfolio slide-4">
          <img src={this.props.img} alt="portfolio project"/>
        </div>
      </div>
    );
  }
}

export default Portfolio;
