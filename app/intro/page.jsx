export default function Intro() {
   return (
      <>
         <div className="flex flex-col md:flex-row md:items-start md:h-full border-4 border-black rounded-3xl p-8">
            <div className="flex flex-col justify-start items-start w-3/5">
               <h1 className="text-6xl font-extralight flex justify-start md:text-7xl p-2 underline decoration-4 underline-offset-8">
                  MARLEY SELLEM
               </h1>
            </div>
            <div className="mt-4 md:mt-0 flex justify-end">
               <h1 className="text-xl md:text-2xl font-thin flex justify-start pt-2 ml-2">
                  FULL STACK SOFTWARE ENGINEER
               </h1>
               <img
                  src="/poppy2.png"
                  alt="poppy in a field"
                  className="w-2/5 md:w-4/6"
               />
            </div>
         </div>
      </>
   );
}
