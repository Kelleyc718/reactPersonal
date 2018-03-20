import React, { Component } from 'react';
import '../css/index.css'

class Button extends Component {
  render () {
    return (
      <button
        className='sourceBtn'
        onClick={this.props.handleClick}>Source
      </button>
      );
    }
  }

  export default Button;
