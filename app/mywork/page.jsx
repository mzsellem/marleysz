import Navbar from "../navbar/page";

export default function MyWork() {
   return (
      <>
         <Navbar />
         <div className="flex flex-row h-full border-4 border-black rounded-3xl m-12 mt-5 p-0  bg-custom">
            <div className="flex w-1/2 h-full">
               <div className="flex flex-col w-full h-1/2">
                  <div className="flex justify-center items-center h-full bg-custom-tan rounded-tl-3xl p-11">
                     <div className="w-3/4 p-4 text-5xl">
                        Find the Flag{" "}
                        <p className="text-xl">
                           Browser-based card matching game
                        </p>
                        <button className="bg-black text-white text-xl rounded-lg p-2">
                           {" "}
                           <a href="https://mzsellem-ga.github.io/concentration-memory-game/">
                              Play
                           </a>
                        </button>
                        <button className="bg-black text-white text-xl rounded-lg p-2 ml-4">
                           {" "}
                           <a href="https://github.com/mzsellem-GA/concentration-memory-game">
                              {" "}
                              Github Repo
                           </a>
                        </button>
                     </div>
                  </div>
                  <div className="flex justify-center items-center h-full bg-custom-dark-tan rounded-bl-2xl p-14">
                     <div className="w-3/4 p-4 text-5xl">
                        Sellem Sitters
                        <p className="text-xl">Cat-sitting tracker app</p>
                        <button className="bg-black text-white text-xl rounded-lg p-2">
                           {" "}
                           <a href="https://sellemsitters.fly.dev/">App</a>
                        </button>
                        <button className="bg-black text-white text-xl rounded-lg p-2 ml-4">
                           {" "}
                           <a href="https://github.com/mzsellem-GA/cat-sitting-tracker">
                              Github Repo
                           </a>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            <div className="flex w-1/2 h-full">
               <div className="flex flex-col w-full h-1/2">
                  <div className="flex justify-center items-center h-full bg-custom-red rounded-tr-2xl p-8">
                     <div className="w-3/4 p-4 text-5xl">
                        Soundify
                        <p className="text-xl">
                           Music streaming app with playlist capabilities
                        </p>
                        <button className="bg-black text-white text-xl rounded-lg p-2">
                           {" "}
                           <a href="https://soundify-ahje.onrender.com/">App</a>
                        </button>
                        <button className="bg-black text-white text-xl rounded-lg p-2 ml-4">
                           {" "}
                           <a href="https://github.com/mzsellem-GA/Soundify">
                              Github Repo
                           </a>
                        </button>
                     </div>
                  </div>
                  <div className="flex justify-center items-center h-full p-8">
                     <div className="w-3/4 p-4 text-5xl">
                        Lamadoro{" "}
                        <p className="text-xl">
                           Music streaming app with playlist capabilities
                        </p>
                        <button className="bg-black text-white text-xl rounded-lg p-2">
                           {" "}
                           <a href="https://lamadoro.onrender.com">App</a>
                        </button>
                        <button className="bg-black text-white text-xl rounded-lg p-2 ml-4">
                           {" "}
                           <a href="https://github.com/mzsellem-GA/lamadoro">
                              Github Repo
                           </a>
                        </button>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
