import React from "react"

export default function Intro() {
   return (
      <>
         <div className="flex flex-col mx-auto font-mono text-black sm:h-full">
            <div className="flex flex-col items-center justify-center m-6 text-center sm:m-2">
               <h1 className="m-2 text-6xl underline font-extralight sm:text-8xl sm:mt-52 decoration-4 underline-offset-8">
                  <p>MARLEY</p> 
                  <p>SELLEM</p>
               </h1>
               <div className="w-screen mt-8 text-xl font-thin text-center sm:mb-4 sm:text-3xl">
                  FULL STACK SOFTWARE ENGINEER
               </div>
            </div>
         </div>
      </>
   );
}
