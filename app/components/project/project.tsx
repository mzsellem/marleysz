import React from "react";

export type ProjectProps = {
   image: string,
   title: string,
   description: string,
   techLinks: { name: string, link: string }[]
}

export default function Project({ image, title, description, techLinks }: ProjectProps) {
   return (
      <div className="flex flex-col items-center text-black">
         <div>{title}</div>
         <div className="format flex">
            <img className="image-slideshow mt-4 flex justify-center items-center" src={image} alt={title} />
         </div>
         <div className="flex m-6 text-center text-sm">{description}</div>
         <div className="space-x-2 -my-2 mb-4 flex flex-wrap justify-center items-center">
            {techLinks.map((tech, index) => (
               <a
                  key={index}
                  href={tech.link}
                  className="border pill rounded-xl p-2 text-xs border-black text-black my-2"
               >
                  {tech.name}
               </a>
            ))}
         </div>
      </div>
   );
}
