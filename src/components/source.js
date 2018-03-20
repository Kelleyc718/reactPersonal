import React from 'react';
import { WithStore } from 'pure-react-carousel';
import '../css/index.css';
const firstUrl = 'https://raw.githubusercontent.com/emma-chris/contactsManager/master/src/ContactsManager.java';
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
        <div>
          <iframe src={firstUrl} className='source-code' title='source' />
        </div>
    )
  }
}

export default WithStore(Source, state => ({
  currentSlide: state.currentSlide
}));
