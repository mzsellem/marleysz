import Navbar from "../navbar/page";

export default function MyWork() {
   return (
      <>
         <Navbar />
         <div className="flex flex-row h-full border-4 border-black rounded-3xl m-12 mt-5 p-0  bg-custom">
            <div className="flex w-1/2 h-full">
               <div className="flex flex-col w-full h-1/2">
                  <div className="flex justify-center items-center h-full bg-custom rounded-3xl">
                     <div className="border w-1/2 p-4 text-5xl">
                        Find the Flag{" "}
                        <p className="text-xl">
                           Browser-based card matching game
                        </p>
                     </div>
                  </div>
                  <div className="flex justify-center items-center h-full bg-custom-tan rounded-bl-2xl">
                     <div className="border w-1/2 p-4 text-5xl">
                        Sellem Sitters
                        <p className="text-xl">Cat-sitting tracker app</p>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex w-1/2 h-full">
               <div className="flex flex-col w-full h-1/2">
                  <div className="flex justify-center items-center h-full bg-custom-red rounded-tr-2xl">
                     <div className="border w-1/2 p-4 text-5xl">
                        Soundify
                        <p className="text-xl">
                           Music streaming app with playlist capabilities
                        </p>
                     </div>
                  </div>
                  <div className="flex justify-center items-center h-full">
                     <div className="border w-1/2 p-4 text-5xl">
                        Lamadoro{" "}
                        <p className="text-xl">
                           Music streaming app with playlist capabilities
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
