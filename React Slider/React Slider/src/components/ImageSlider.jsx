import React, { useState } from "react";
import "../App.css";

const images = [
  "https://placekitten.com/300/200",
  "https://placekitten.com/301/200",
  "https://placekitten.com/302/200",
];

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className='image-slider'>
      <button onClick={handlePrevClick}>Previous</button>
      <img
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
      <button onClick={handleNextClick}>Next</button>
    </div>
  );
};

export default ImageSlider;
