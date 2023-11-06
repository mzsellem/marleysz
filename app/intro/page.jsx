export default function Intro() {
   return (
      <>
         <div className="w-full">
            <video
               class="w-screen h-2/3 -z-10 object-cover fixed top-0 left-0 right-0"
               autoPlay
               loop
               muted
            >
               <source src="wallpaper.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div className="flex flex-col md:h-full rounded-3xl p-8 mx-auto mt-44 md:mt-28 max-w-screen-md font-mono text-black">
            <div className="flex flex-col justify-center items-center text-center">
               <h1 className="text-6xl font-extralight md:text-8xl m-2 underline decoration-4 underline-offset-8">
                  MARLEY SELLEM
               </h1>
               <div className="text-xl md:mb-4 w-screen md:text-2xl mt-4 font-thin text-center">
                  FULL STACK SOFTWARE ENGINEER
               </div>
            </div>
            <div className="mt-4 flex md:flex-col items-center justify-center m-3">
               {/* <div className="flex justify-center">
                  <img
                     src="/poppy2.png"
                     alt="poppy in a field"
                     className="w-3/4 md:w-3/4"
                  />
               </div> */}
               {/* <div className="text-xl md:mb-4 md:text-4xl w-1/2 font-thin text-center">
                  FULL STACK SOFTWARE ENGINEER
               </div> */}
            </div>
         </div>
      </>
   );
}
