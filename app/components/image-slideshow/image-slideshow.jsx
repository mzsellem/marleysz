import React, { useState } from "react";

export default function ImageSlideshow({ images }) {
   console.log({ images });
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
            className="absolute bottom-0 transform translate-y-16 -translate-x-4 p-2 -m-2 bg-gray-800 text-white rounded-full"
         >
            &lt;
         </button>
         <button
            onClick={nextImage}
            className="absolute bottom-0 transform translate-y-16 translate-x-4 p-2 -m-2 bg-gray-800 text-white rounded-full"
         >
            &gt;
         </button>
      </div>
   );
}
