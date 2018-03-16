import React, { Component } from 'react';
import '../css/index.css';
import Nav from '../js/Nav';
import Portfolio from '../js/Portfolio'
import Social from '../js/Social';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <div className="bg1">
          <a name="home" />
        </div>
        <div className="section-one">
          filler content
        </div>
        <div className="bg2">
          <a name="about" />
        </div>
        <div className="section-two">filler content</div>
        <div className="bg3">
          <a name="portfolio" />
        </div>
        <Portfolio />
        <div className="bg4">
          <a name="contact" />
        </div>
        <Social />
      </div>
    );
  }
}

export default App;
