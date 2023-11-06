export default function Intro() {
   return (
      <>
         <div className="w-full">
            <video
               className="w-full"
               controls // This adds playback controls like play, pause, volume, etc.
            >
               <source src="/wallpaper.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div className="flex flex-col md:h-full  rounded-3xl p-8 mx-auto max-w-screen-md font-mono text-black">
            <div className="flex flex-col justify-center text-center">
               <h1 className="text-6xl font-extralight md:text-8xl m-2 underline decoration-4 underline-offset-8">
                  MARLEY SELLEM
               </h1>
            </div>
            <div className="mt-4 flex md:flex-col items-center justify-center m-3">
               <div className="flex justify-center">
                  <img
                     src="/poppy2.png"
                     alt="poppy in a field"
                     className="w-3/4 md:w-3/4"
                  />
               </div>
               <div className="text-xl md:mb-4 md:text-4xl font-thin text-start">
                  FULL STACK SOFTWARE ENGINEER
               </div>
            </div>
         </div>
      </>
   );
}
