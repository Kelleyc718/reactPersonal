import React, { Component } from 'react';
import'../css/App.css';

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
    };

    this.handleHover = this.handleHover.bind(this);
  };

  handleHover() {
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    return (
      <ul className="nav-main">
        <li className="home btn">
          <a href='#home' onMouseEnter={this.handleHover} className="home">Home</a>
        </li>
        <li className="port btn">
          <a href='#portfolio' onMouseEnter={this.handleHover} className="portfolio">Portfolio</a>
        </li>
        <li className="contact btn">
          <a href='#contact' onMouseEnter={this.handleHover} className="contact">Contact</a>
        </li>
      </ul>
    );
  }
}

export default NavBar;
