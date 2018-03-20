import React, {Component} from 'react';
import Source from './source';
import '../css/index.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    }

    this.handleClick = this.handleClick.bind(this);

  }

  handleClick() {
    this.setState({
      isOpen: !this.state.isOpen
    })
    console.log(this.state.isOpen);
  };

  render() {
    return (<div>
      <div>
        {
          this.state.isOpen
            ? <Source/>
            : null
        }
      </div>
      <button className='sourceBtn' onClick={this.handleClick}>Source
      </button>
    </div>);
  }
}

export default Button;
