import React, { Component } from 'react';
import '../css/App.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio slide-1">
          <iframe className="portfolio-demo" title="cmGif" src='https://gfycat.com/ifr/TheseQuaintEyas'></iframe>
          <button className="demo">
            Demo
            <a href="https://github.com/emma-chris/contactsManager"></a>
          </button>
          <button className="source">
            Source
            <a href="https://github.com/emma-chris/contactsManager"></a>
          </button>
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
