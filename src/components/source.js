import React from 'react';
import { WithStore } from 'pure-react-carousel';
import '../css/porfolio.css';


const titles =
[
    {
      title: "Contacts Manager",
      lang: <i class="devicon-java-plain-wordmark"/>
    },
    {
      title: "STI",
      lang: <img src="otherstuff"/>
    },
    {
      title: "Ducati",
      lang: <img src="morestuff"/>
    }
]

class Source extends React.Component {

  handleChange() {
    let slide = this.props.currentSlide;
    return (slide === 0) ? titles[0]
    : (slide === 1) ? titles[1]
    : titles[2]
  }

  render() {
    return (
      <div className="portfolio-title">
        <h1>{this.handleChange().title}</h1>
        <p>{this.handleChange().lang}</p>
      </div>
    )}
}

export default WithStore(Source, state => ({
  currentSlide: state.currentSlide
}));
