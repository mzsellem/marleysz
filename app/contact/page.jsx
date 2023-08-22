import Navbar from "../navbar/page";

export default function Contact() {
   return (
      <>
         <Navbar />
         <div className="flex flex-col h-full border-4 border-black rounded-3xl m-12 mt-5">
            <div className="flex justify-center flex-col flex-grow-0.75 bg-custom-dark-tan rounded-tl-2xl rounded-tr-2xl p-16 space-y-2">
               <p className="flex justify-left text-6xl font-semibold">
                  Let's Chat
               </p>
            </div>
            <div className="flex flex-row flex-grow-0.25">
               <div className="flex w-5/6 bg-custom-tan rounded-bl-2xl p-16 justify-left items-center text-3xl font-medium">
                  marleysellem@gmail.com
               </div>
               <div className="flex w-1/6 bg-custom-red rounded-br-2xl p-16"></div>
            </div>
         </div>
      </>
   );
}
