import React from "react"
import "../../public/marley.png";

export default function About() {
   return (
      <>
         <div className="flex flex-col items-center justify-start w-3/4 h-full p-6 mx-auto font-mono text-black">
            <div className="flex justify-center w-full sm:w-1/2 md:justify-center">
               <img
                  src="/marley.png"
                  alt="poppy in a field"
                  className="w-full h-auto border-4 rounded-lg md:w-1/2"
               />
            </div>
            <div className="w-full mt-6 sm:w-3/4 text-start sm:text-center p-2 h-[710px] md:h-[470px] max-w-[800px] md:w-[700px]">
               <div className="mb-4 font-mono text-4xl md:text-center sm:text-4xl sm:mb-4">
                  About Me
               </div>
               <p className="mb-4 sm:mb-6">
               As a software engineer with a strong foundation in health 
               sciences, I excel in delivering meticulous, user-centered
               solutions. My dedication to client and user satisfaction
               is rooted in my detailed-oriented approach and unwavering
               commitment to excellence. 
               </p>
               <p className="mb-4 sm:mb-6">
                  Growing up as a third culture kid, I bring a unique, global
                  perspective and adaptability, enabling me to thrive in 
                  diverse, collaborative environments. I am eager to apply my
                  multifaceted skills and experiences to create impactful and
                  innovative software solutions that 
                  meet and exceed user expectations.               
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
