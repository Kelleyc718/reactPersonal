import React, { Component } from 'react';
import '../css/index.css';
import Nav from '../components/Nav';
import Main from '../components/Main';
import Social from '../components/Social';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Main />
        <Social />
      </div>
    );
  }
}

export default App;
