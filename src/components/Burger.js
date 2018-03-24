import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../css/burger.css'

class Burger extends React.Component {
  render () {
    return (
      <Menu>
        <div className="menuBtn">
          <a id="about" className="menu-item" href="#about">About</a>
        </div>
        <div className="menuBtn">
          <a id="portfolio" className="menu-item" href="#portfolio">Portfolio</a>
        </div>
        <div className="menuBtn">
          <a id="contact" className="menu-item" href="#contact">Contact</a>
        </div>
      </Menu>
    );
  }
}

export default Burger;
