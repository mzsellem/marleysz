import React from "react"
import "../../public/marley.png";

export default function About() {
   return (
      <>
         <div className="flex flex-col justify-start items-center h-full p-6 mx-auto w-3/4 font-mono text-black">
            <div className="w-full sm:w-1/2 md:justify-center flex">
               <img
                  src="/marley.png"
                  alt="poppy in a field"
                  className="w-1/2 h-auto"
               />
            </div>
            <div className="w-full sm:w-3/4 mt-4 text-start sm:text-center">
               <div className="text-4xl md:text-center sm:text-4xl mb-4 sm:mb-6 font-mono">
                  About Me
               </div>
               <p className="mb-4 sm:mb-6">
                  As a detail-oriented third-culture kid with a diverse
                  background in health sciences, I am eager to embark on a new
                  professional journey in software development.
               </p>
               <p className="mb-4 sm:mb-6">
                  My passion for precision and problem-solving, honed through my
                  experiences in health sciences, fuels my desire to contribute
                  to the dynamic and rapidly evolving field of software
                  development.
               </p>
               <p className="mb-4 sm:mb-6">
                  I am committed to acquiring the necessary technical skills and
                  knowledge to excel in this industry, and I am excited to apply
                  my unique perspective and cross-cultural understanding to
                  create innovative and user-centric solutions.
               </p>
               <p className="mb-4 sm:mb-6">
                  With an innate curiosity and a strong drive to learn, I am
                  confident that my transition into software development will
                  enable me to make a meaningful impact and thrive in this
                  field.
               </p>
            </div>
         </div>
      </>
   );
}
