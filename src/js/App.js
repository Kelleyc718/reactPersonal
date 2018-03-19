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
            <div className="title-container">
              <h1>Chris Kelley</h1>
              <h3>Father, Husband, Developer</h3>
            </div>
            <h2 className="bio-pretext"> A little something about me... </h2>
          </div>
          <div className="bg2">
            <div className="bio">
              <a name="about" />
              <p>
              After graduating from High School, in the Bay Area, I relocated to Sacramento to pursue my undergraduate degree. I spent 3 years trying to juggle two jobs, to pay for tuition and rent, while also taking on a full course load. Eventually, school took a back seat to make ends meet.</p>

              <p>Serving my country as an Infantryman was my next step. I served 9 years in the US Army, and obtained the rank of Staff Sergeant. I deployed to multiple combat theaters to include Afghanistan.</p>

              <p>A shoulder injury cut my career short, but allowed me to finally pursue a childhood passion. From the days of dialup and 5" floppy disks, software development has continuosly sang its siren song. Luring me into a world of 0's and 1's. No longer could I resist the promise...
              </p>
            </div>
            <h2 className="portfolio-pretext">to <code>Int MAX_VALUE + 1</code> and beyond...</h2>
          </div>
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
