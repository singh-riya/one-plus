import React from "react";
import { PRODUCT_IMAGES } from "../../constants";
import "./ProductDisplay.css";

const ProductDisplay = ({ title, image }) => (
  <div className='product-display'>
    <a className='product-display-item' href={image}>
      <div className='product-display_img'>
        <div>
          <img width='100%' alt='phone' src={image} />
        </div>
      </div>
      <div className='product-display_title'>
        <div>
          <h3>{title}</h3>
        </div>
      </div>
    </a>
  </div>
);

const ProductDisplayContainer = () => (
  <section className='product-display-container'>
    {PRODUCT_IMAGES.map((item) => (
      <ProductDisplay
        key={item.title}
        title={item.title}
        image={item.image}
      />
    ))}
  </section>
);
export default ProductDisplayContainer;
