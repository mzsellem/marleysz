import React, { useState } from "react";

export default function ImageSlideshow({ images }) {
   const [currentImageIndex, setCurrentImageIndex] = useState(0);

   const nextImage = () => {
      if (currentImageIndex < images.length - 1) {
         setCurrentImageIndex(currentImageIndex + 1);
      }
   };

   const prevImage = () => {
      if (currentImageIndex > 0) {
         setCurrentImageIndex(currentImageIndex - 1);
      }
   };

   return (
      <div className="relative border flex justify-center">
         <img
            src={images[currentImageIndex]}
            alt="Slideshow"
            className="w-full h-auto"
         />
         <button
            onClick={prevImage}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-8 p-2 bg-gray-800 text-white rounded-full"
         >
            &lt;
         </button>
         <button
            onClick={nextImage}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-8 p-2 bg-gray-800 text-white rounded-full"
         >
            &gt;
         </button>
      </div>
   );
}
