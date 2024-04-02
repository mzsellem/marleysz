import React from "react";

export type ProjectProps = {
   image: string,
   contract?: string,
   title: string,
   description: string,
   techLinks: { name: string, link: string }[],
   projectLink: string,
}

export default function Project({ image, contract, title, description, techLinks, projectLink }: ProjectProps) {
   return (
      <div className="flex flex-col items-center text-black">
         <div className="mb-3">{title}</div>
         <div className="flex border image-container">
            <a href={projectLink}>
               <img className="flex items-center justify-center mt-4 transition-transform border-4 rounded-lg project-image hover:scale-110 border-grey" src={image} alt={title} />
            </a>
         </div>
         <div className="flex m-5 text-sm text-center">{description}</div>
         {contract !== undefined && ( // Conditional rendering of contract
            <div className="flex mb-4 text-sm text-center m">{contract}</div>
         )}
         <div className="flex flex-wrap items-center justify-center mb-4 -my-2 space-x-2">
            {techLinks.map((tech, index) => (
               <a
                  key={index}
                  href={tech.link}
               >
                  <div className="p-2 text-xs text-black border rounded-xl hover:bg-brightred hover:text-white">
                     {tech.name}
                  </div>
               </a>
            ))}
         </div>
      </div>
   );
}
