import React, { Component } from 'react';
import '../css/index.css';
import Nav from '../components/Nav';
import Landing from '../components/Landing';
import Bio from '../components/bio';
import Portfolio from '../components/Portfolio';
import Social from '../components/Social';
import Contact from '../components/Contact';

class App extends Component {
  render() {
    return (
        <div className="App">
          <Nav />
          <Landing />
          <Bio />
          <Portfolio />
          <Contact />
          <Social />
        </div>
    );
  }
}

export default App;
