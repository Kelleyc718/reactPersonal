import React from "react";
import { CarouselProvider, Slider, Slide, Image, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideHeight={75}
        naturalSlideWidth={125}
        totalSlides={3}
      hasMasterSpinner>
        <Slider>
          <Slide index={0}>
            <Image src="https://wallpaperclicker.com/storage/wallpaper/COOL-music-headphone-WALLPAPER-7050-19274886.jpg#.Wq2sduXmiNA.link" />
          </Slide>
          <Slide index={1}>
            <Image src="https://image.iol.co.za/image/1/process/620x349?source=https://inm-baobab-prod-eu-west-1.s3.amazonaws.com/public/inm/media/2017/07/24/iol/499/IOL-mot-pic-jul24-Subaru-WRX-STI-Type-RA-NBR-Special-1.jpg&operation=CROP&offset=39x37&resize=1144x641" />
          </Slide>
          <Slide index={2}>
            <Image src="https://cdp.azureedge.net/products/USA/DU/2017/MC/SUPERSPORT/SUPERBIKE_959_PANIGALE/50/ARCTIC_WHITE_SILK/2000000003.jpg" />
          </Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    );
  }
}
