import React, {Component} from 'react';
import Burger from './Burger';
import Notburger from './NotBurger';
import '../css/nav.css';

class Nav extends Component {
    constructor() {
      super();
      this.state = {
        windowSize: window.innerWidth,
      }
      this.handleResize = this.handleResize.bind(this);
    }

    componentDidMount() {
      window.addEventListener('resize', this.handleResize.bind(this));
    }

    componentWillUnmount() {
      window.removeEventListener('resize', this.handleResize.bind(this));
    }

    handleResize() {
      this.setState({
        windowSize: window.innerWidth,
      })
    }

    renderNav() {
      if(this.state.windowSize <= 568) {
        return (
          <Burger />
        )
      } else {
        return (
          <Notburger />
        )
      }
    }

    render() {
      return(
        <div>{this.renderNav()} </div>
      )
    }
  }

export default Nav;
