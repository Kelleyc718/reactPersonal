import React, { Component } from 'react';
import '../css/index.css';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio slide-1">
          <iframe className="portfolio-demo" title="cmGif" src='https://gfycat.com/ifr/TheseQuaintEyas'></iframe>
          <a href="https://github.com/emma-chris/contactsManager" className="demo">
            <button>
              Demo
            </button>
          </a>
          <a href="https://github.com/emma-chris/contactsManager" className="source">
            <button>
              Source
            </button>
          </a>
        </div>
          <div className="portfolio slide-2">
          <img src={this.props.img} alt="portfolio project" />
        </div>
        <div className="portfolio slide-3">
          <img src={this.props.img} alt="portfolio project" />
        </div>
        <div className="portfolio slide-4">
          <img src={this.props.img} alt="portfolio project" />
        </div>
      </div>
    );
  }
}

export default Portfolio;
