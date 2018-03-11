import React, { Component } from 'react';
import './App.css';
import Nav from './Nav';
import Portfolio from './Portfolio'
import Social from './Social';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Portfolio />
        <Social />
      </div>
    );
  }
}

export default App;
