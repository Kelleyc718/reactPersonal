import React from "react";
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import Source from './Source';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideHeight={75}
        naturalSlideWidth={125}
        totalSlides={4}
      hasMasterSpinner>
        <Source />
        <Slider>
          <Slide index={0}>
            <Image src="https://thumbs.gfycat.com/UnhappyGiganticHomalocephale-size_restricted.gif" />
          </Slide>
          <Slide index={1}>
            <Image src="https://thumbs.gfycat.com/AllSnivelingBlackbird-size_restricted.gif"/>
          </Slide>
          <Slide index={2}>
            <Image src="https://thumbs.gfycat.com/KeenElectricGelada-size_restricted.gif" />

          </Slide>
          <Slide index={3}>
            <Image src="https://thumbs.gfycat.com/IncompatibleAbandonedGlassfrog-size_restricted.gif" />
          </Slide>
        </Slider>
        <ButtonBack onClick={this.handleChange}>Back</ButtonBack>
        <ButtonNext onClick={this.handleChange}>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
