import React from "react";

export type ProjectProps = {
   image: string,
   title: string,
   description: string,
   techLinks: { name: string, link: string }[],
   projectLink: string,
}

export default function Project({ image, title, description, techLinks, projectLink }: ProjectProps) {
   return (
      <div className="flex flex-col items-center text-black group">
         <div>{title}</div>
         <div className="format flex">
            <a href={projectLink}>
               <img className="image-slideshow mt-4 flex justify-center items-center group-hover:scale-110 transition-transform border-skyblue border-4 rounded-lg" src={image} alt={title} />
            </a>
         </div>
         <div className="flex m-6 text-center text-sm">{description}</div>
         <div className="space-x-2 -my-2 mb-4 flex flex-wrap justify-center items-center">
            {techLinks.map((tech, index) => (
               <a
                  key={index}
                  href={tech.link}
                  className="rounded-xl text-xs border-black text-black my-2 btn draw-border"
               >
                  {tech.name}
               </a>
            ))}
         </div>
      </div>
   );
}
