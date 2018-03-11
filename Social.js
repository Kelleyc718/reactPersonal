import React, { Component } from 'react';
import './App.css';

class Social extends Component {
  render() {
    return (
      <div className="social-container">
        <a href="https://www.linkedin.com/in/chrisdkelley/" target="_blank" className="linkedIn" title="LinkedIn"><img src="http://i.imgur.com/INarVJ7.png" alt="LinkedIn Icon"/></a>
        <a href="https://github.com/Kelleyc718" target="_blank" className="github" title="GitHub"><img src="http://i.imgur.com/GM1gYXS.png" alt="Github Icon"/></a>
      </div>
    );
  }
}

export default Social;
