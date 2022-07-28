import React from "react";
import "./Card.css";

const Card = ({
  title,
  image,
  price,
  description,
  link,
  discount,
  discountPrice,
}) => (
  <div className='card'>
    <div className='product-card-image'>
      <img
        className='product-card-image-img'
        src={image}
        alt={description}

        width={300}
        height={500}
      />
    </div>
    <div className='product-card-content'>
      <div className='card-content-header'>
        <p style={{ color: "black" }}>{title}</p>
      </div>
      <div className='card-content-main common-oneplus-price'>
        {discount && <span style={{ color: "black" }}>{discount}</span>}
        <div className='price-container no-price-data'>
          <div className='current-price' style={{ color: "black" }}>
            {discountPrice ? <>From <s>{discountPrice}</s> {price}</> : <>At {price}</>}
          </div>
        </div>
      </div>
      <div className='card-content-footer'>
        <p>
          <a style={{ color: "black", borderBottom: "1px solid black" }} href={link || "/"}>
            Buy Now
          </a>
        </p>
      </div>
    </div>
  </div>
);

export default Card;
