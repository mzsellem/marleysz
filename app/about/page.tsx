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
               As a detail-oriented software engineer, I am dedicated to
               crafting seamless user experiences that cater to diverse needs. 
               My multicultural background enriches my approach to problem-solving,
               allowing me to create inclusive and effective solutions. I am eager 
               to bring my enthusiasm and skills to a forward-thinking team, where 
               I can continue to grow and make a meaningful impact. 
               </p>
            </div>
         </div>
      </>
   );
}
