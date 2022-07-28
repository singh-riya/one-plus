import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { CARDS, CAROUSEL_IMAGES } from "../../constants";
import Card from "./Card";
import "./ProductCard.css";


const ProductCardContainer = () => (
  <section className='product'>
    <div className='product-card-container'>
      {/* 1 */}
      <div className='row-1'>
        {CARDS.slice(0, 2).map((card) => card.carousel ? (
          <Carousel
            key={card.id}
            className='carousel-container'
            showThumbs={false}
            showStatus={false}
            showArrows={false}
            width="724px"
            autoPlay={true}
            interval={2000}
            infiniteLoop={true}
            dynamicHeight={true}
          >
            {CAROUSEL_IMAGES.map((image) => (
              <div key={image.text}>
                <img alt={image.text} src={image.image} />
                <p className='legend'>{image.text}</p>
              </div>
            ))}
          </Carousel>
        ) : (
          <div key={card?.id}>
            <Card
              {...card}
            />
          </div>
        ))}
      </div>

      <div className='row-2'>
        {CARDS.slice(2).map((card) => (
          <div className="inner-row" key={card?.id}>
            <Card
              {...card}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductCardContainer;
