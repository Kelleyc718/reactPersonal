import React, { Component } from 'react';
import '../css/index.css';
import Nav from '../components/Nav';
import Bio from '../components/bio';
import Portfolio from '../components/Portfolio';
import Social from '../components/Social';

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
          <Bio />
          <div className="bg3">
            <a name="portfolio" />
            <Portfolio />
          </div>
          <div className="bg4">
            <a name="contact" />
            <form method="POST" action="https://formspree.io/kelleyc718@gmail.com">
              <h3>To get in touch, click on my social icons or shoot me a message</h3>
              <input type="email" name="email" placeholder="Your email" />
              <textarea name="message" placeholder="Shoot me a message, or reach out to me on LinkedIn!"></textarea>
              <button type="submit">Send</button>
            </form>
          </div>
            <Social />
        </div>
    );
  }
}

export default App;
