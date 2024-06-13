import React from "react"
import "../../public/marley.png";

export default function About() {
   return (
      <>
         <div className="flex flex-col items-center w-full h-full mt-2 font-mono text-black">
            <div className="flex justify-center w-2/3 sm:w-1/2 sm:justify-center">
               <img
                  src="/marley.png"
                  alt="poppy in a field"
                  className="w-full h-auto border-4 rounded-lg sm:w-1/2"
               />
            </div>
            <div className="w-full sm:mt-4 text-center sm:text-center sm:w-[700px]">
               <p className="p-6 mb-4 sm:p-0 sm:mb-6">
               Hi, I'm Marley Sellem, a dynamic full-stack software engineer deeply passionate about front-end 
               design. Drawing from a diverse cultural background and prior experience in the medical field, I 
               bring a unique blend of precision and creativity to every project. My journey in healthcare has 
               sharpened my ability to navigate complex challenges with clarity and empathy. With a keen eye for 
               detail and a client-centric approach, I ensure each solution is not only technically robust but also 
               aesthetically compelling. I am dedicated to crafting seamless user experiences that exceed expectations, 
               making me a valuable addition to any innovative team.
               </p>
            </div>
         </div>
      </>
   );
}
