import React from 'react';
import { WithStore } from 'pure-react-carousel';
import '../css/index.css';

const firstUrl = 'https://emma-chris.github.io/contactsManager/'
const secondUrl = "ha";
const thirdUrl = "ja";

class Source extends React.Component {

  handleChange() {
    let slide = this.props.currentSlide;
    return (slide === 0) ? firstUrl
    : (slide === 1) ? secondUrl
    : thirdUrl;
  }

  render() {
    return (
      <embed src={firstUrl} height='50vmin' width='50vmin' />
    )
  }
}

export default WithStore(Source, state => ({
  currentSlide: state.currentSlide
}));
