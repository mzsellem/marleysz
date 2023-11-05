import React from "react";
import ImageSlideshow from "../image-slideshow/image-slideshow";

type ProjectProps = {
   images: string[],
   title: string,
   description: string,
   techLinks: { name: string, link: string }[]
}

export default function Project({ images, title, description, techLinks }: ProjectProps) {
   return (
      <div className="flex flex-col items-center text-haywhite">
         <div className="m-2">{title}</div>
         <div className="image-slideshow md:flex items-center mt-2 md:mb-8">
            <ImageSlideshow images={images} />
         </div>
         <div className="flex m-6 text-center text-sm">{description}</div>
         <div className="space-x-2 mt-2 mb-4 flex flex-wrap justify-center">
            {techLinks.map((tech, index) => (
               <a
                  key={index}
                  href={tech.link}
                  className="border rounded-xl p-2 text-xs"
               >
                  {tech.name}
               </a>
            ))}
         </div>
      </div>
   );
}
