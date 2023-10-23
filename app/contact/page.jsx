export default function Contact() {
   return (
      <>
         <div className="flex flex-col h-full border-4 border-black rounded-3xl m-12 mt-5">
            <div className="flex justify-center flex-col flex-grow-0.75 bg-custom-dark-tan rounded-tl-2xl rounded-tr-2xl p-20 -space-y-12">
               <p className="flex justify-center text-6xl font-semibold p-20">
                  Let's Chat
               </p>
               <p className="flex justify-center text-4xl font-fine">
                  {" "}
                  marleysellem@gmail.com
               </p>
            </div>
            <div className="flex justify-center space-x-6 bg-custom-dark-tan pb-2">
               <a href="https://github.com/mzsellem-GA">
                  <img
                     src="/github-mark.png"
                     alt="github logo"
                     width="50"
                     height="50"
                  />
               </a>
               <a
                  href="https://www.linkedin.com/in/marley-sellem/"
                  className="mt-2"
               >
                  <img
                     src="/li-logo.png"
                     alt="linkedin logo"
                     width="50"
                     height="50"
                  />
               </a>
            </div>
            <div className="flex flex-row flex-grow-0.25">
               <div className="flex w-5/6 bg-custom-tan rounded-bl-2xl justify-center items-center text-3xl font-medium"></div>
               <div className="flex w-1/6 bg-custom-red rounded-br-2xl p-20"></div>
            </div>
         </div>
      </>
   );
}
