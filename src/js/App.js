import React, { Component } from 'react';
import '../css/App.css';
import Nav from '../js/Nav';
import Portfolio from '../js/Portfolio'
import Social from '../js/Social';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="para-head">
          <h1>Cool title</h1>
          <h3>Even cooler subtitle</h3>
        </div>
        <div className="parallax-content">
          <div className="parallax"></div>
        </div>
        <Nav />
        <div className="parallax-content">
          <div className="parallax"></div>
        </div>
        <Portfolio />
        <div className="parallax-content">
          <div className="parallax"></div>
        </div>
        <Social />
      </div>
    );
  }
}

export default App;
