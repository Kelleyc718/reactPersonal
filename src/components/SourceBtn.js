import React, {Component} from 'react';
import Source from './source';
import '../css/index.css';

class SourceBtn extends Component {
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
  };

  render() {
    return (
      <div className='source-container'>
        <button
          className='sourceBtn'
          onClick={this.handleClick}>Source
        </button>
        <div className='sourceCode'>
          {
            this.state.isOpen
              ? <Source />
              : null
          }
        </div>
      </div>
    )
  }
}

export default SourceBtn;
