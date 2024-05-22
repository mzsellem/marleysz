import React from "react"

export default function Intro() {
   return (
      <>
         <div className="flex flex-col max-w-screen-md p-8 mx-auto font-mono text-black md:h-full rounded-3xl">
            <div className="flex flex-col items-center justify-center m-2 text-center">
               <h1 className="m-2 text-6xl underline font-extralight md:text-8xl md:mt-52 decoration-4 underline-offset-8">
                  MARLEY SELLEM
               </h1>
               <div className="w-screen mt-8 text-xl font-thin text-center md:mb-4 md:text-3xl">
                  FULL STACK SOFTWARE ENGINEER
               </div>
            </div>
         </div>
      </>
   );
}
