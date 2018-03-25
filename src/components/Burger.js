import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../css/burger.css'

class Burger extends React.Component {
  render () {
    return (
      <Menu width={'50%'}>
        <div className="menuBtn">
          <a href="#about">About</a>
        </div>
        <div className="menuBtn">
          <a href="#portfolio">Portfolio</a>
        </div>
        <div className="menuBtn">
          <a href="#contact">Contact</a>
        </div>
      </Menu>
    );
  }
}

export default Burger;
