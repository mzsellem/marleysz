// components/SlidingGallery.js
import React, { useState } from 'react';

const SlidingGallery = ({ slides }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-row h-full overflow-hidden border-4 border-black rounded-3xl m-12 mt-5">
      <div className="flex transition-transform duration-300 ease-in-out transform -translate-x-full translate-x-[calc(-100%*var(--slideIndex))]">
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 p-0">
            {slide}
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4 space-x-2">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Previous
        </button>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SlidingGallery;
