import React from 'react';
import Landing from './Landing'
import Bio from '../components/bio';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import '../css/index.css';

class Main extends React.Component {
  render() {
    return (
      <div className='Main'>
        <Landing />
        <Bio />
        <Portfolio />
        <Contact />
      </div>
    )
  }
}

export default Main;
