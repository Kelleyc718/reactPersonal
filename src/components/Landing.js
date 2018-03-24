import React, { Component } from 'react';
import '../css/landing.css'

class Landing extends Component {
  render () {
    return(
      <div className="bg1">
        <div className="title-container">
          <h1>Chris Kelley</h1>
          <h3>Father, Husband, Developer</h3>
        </div>
        <h2 className="bio-pretext"> A little something about me... </h2>
      </div>
    )
  }
};

export default Landing;
