import React from "react"

export default function Contact() {
   return (
      <>
         <div className="flex flex-col p-6 md:max-w-screen-md font-mono text-black">
            <div className="flex justify-center flex-col space-y-6 mb-6">
               <p className="flex justify-center text-5xl font-semibold">
                  Let's Chat
               </p>
               <p className="flex justify-center text-xl font-fine">
                  {" "}
                  marleysellem@gmail.com
               </p>
            </div>
            <div className="flex justify-center space-x-6 pb-2">
               <a href="https://github.com/mzsellem-GA">
                  <img
                     src="/github-mark.png"
                     alt="github logo"
                     width="40"
                     height="40"
                  />
               </a>
               <a
                  href="https://www.linkedin.com/in/marley-sellem/"
                  className="mt-2"
               >
                  <img
                     src="/li-logo.png"
                     alt="linkedin logo"
                     width="40"
                     height="40"
                  />
               </a>
            </div>
         </div>
      </>
   );
}