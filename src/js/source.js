import React from 'react';
import ReactDOM from 'react-dom';

class Source extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      src: src;
      showIframe: false;
      btnName: 'Show Source';
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.setState({
      showIframe: true;
      btnName: 'Close Source';
    })
  }
  render() {
    return (
      <div>
        <iframe className='ghSource' src={this.props.src}></iframe>
      </div>
    )
  }
}
