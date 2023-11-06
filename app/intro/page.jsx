export default function Intro() {
   return (
      <>
         <div className="w-full">
            <video class="fixed w-full -z-10 object-cover" autoPlay loop muted>
               <source src="wallpaper.mp4" type="video/mp4" />
               Your browser does not support the video tag.
            </video>
         </div>
         <div className="flex flex-col md:h-full rounded-3xl p-8 mx-auto max-w-screen-md font-mono text-black">
            <div className="flex flex-col justify-center items-center text-center">
               <h1 className="text-6xl font-extralight md:text-8xl m-2 underline decoration-4 underline-offset-8">
                  MARLEY SELLEM
               </h1>
               <div className="text-xl md:mb-4 w-screen md:text-2xl mt-4 font-thin text-center">
                  FULL STACK SOFTWARE ENGINEER
               </div>
            </div>
         </div>
      </>
   );
}
