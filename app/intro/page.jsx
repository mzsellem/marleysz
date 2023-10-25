export default function Intro() {
   return (
      <>
         <div className="flex flex-col md:h-full border-4 rounded-3xl p-8">
            <div className="flex flex-col justify-center text-center">
               <h1 className="text-6xl font-extralight md:text-8xl p-2 underline decoration-4 underline-offset-8">
                  MARLEY SELLEM
               </h1>
            </div>
            <div className="mt-6 flex md:flex-col items-center justify-center ml-6">
               <h1 className="text-xl md:text-4xl font-thin text-start mr-2 mb-6">
                  FULL STACK SOFTWARE ENGINEER
               </h1>
               <img
                  src="/poppy2.png"
                  alt="poppy in a field"
                  className="w-2/5 md:w-3/5"
               />
            </div>
         </div>
      </>
   );
}
