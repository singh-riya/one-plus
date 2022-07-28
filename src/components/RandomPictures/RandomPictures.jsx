import "./RandomPictures.css";

import React, { useState } from "react";
import { useSelector } from "react-redux";

const RandomPictures = () => {
  const [loading, setLoading] = useState(true);
  const images = useSelector((state) => state?.images);
  return (
    <section className='random-pictures'>
      <div className='random-pictures__header'>
        <h2>Random Pictures from API</h2>
      </div>
      <div className='random-pictures__images'>
        {images.map((image) => (
          <img
            height={200}
            width={200}
            key={image?.id}
            src={image?.url}
            alt={image?.title}
            loading='lazy'
            style={loading ? {
              filter: "blur(2px)",
              opacity: 0.5,
              transition: "all 2s ease-in",
            } : {}}
            onLoad={() => setTimeout(() => setLoading(false), 500)}
            className='random-pictures__image'
          />
        ))}
      </div>
    </section>
  );
};

export default RandomPictures;
