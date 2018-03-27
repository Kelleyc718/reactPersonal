import React, {Component} from 'react';
import '../css/nav.css';

class Notburger extends Component {
  constructor() {
    super();
    this.state = {
      hover: false,
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
        <li className="about btn">
          <a href='#about' onMouseEnter={this.handleHover} className="about">About</a>
        </li>
        <li className="port btn">
          <a href='#portfolio' onMouseEnter={this.handleHover} className="portfolio">Portfolio</a>
        </li>
        <li className="contact btn">
          <a href='#contact' onMouseEnter={this.handleHover} className="contact">Contact</a>
        </li>
      </ul>
  )}
}

export default Notburger;
