import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { HERO_BANNER_IMAGES } from "../../constants";

const HeroBanner = () => (
  <section className="hero-banner">
    <Carousel
      className='banner'
      showThumbs={false}
      showStatus={false}
      showArrows
      width='100%'
      autoPlay={true}
      interval={1500}
      infiniteLoop={true}
      dynamicHeight={true}
    >
      {HERO_BANNER_IMAGES.map((image, index) => (
        <div key={index}>
          <img src={image.image} alt={image.text} />
          <p className='legend'>{image.text}</p>
        </div>
      ))}
    </Carousel>
  </section>
);

export default HeroBanner;
