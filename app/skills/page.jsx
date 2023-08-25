import Navbar from "../navbar/page";

export default function Skills() {
   return (
      <>
         <Navbar />
         <div className="flex flex-col items-center justify-center h-full border-4 border-black rounded-3xl m-12 mt-5 p-8">
            <div className="w-1/2">
               <div className="text-5xl flex items-center mb-6">Skillset</div>
               <div>
                  <div className="text-xl mb-2">
                     <span className="font-bold">Languages:</span> HTML,
                     JavaScript, CSS, Python, EJS
                  </div>
                  <div className="text-xl mb-2">
                     <span className="font-bold">Frameworks/Libraries:</span>{" "}
                     Express.js, Node.js, React.js, Django, Mongoose
                  </div>
                  <div className="text-xl mb-2">
                     <span className="font-bold">Databases:</span> MongoDB,
                     PostgreSQL, Supabase
                  </div>
                  <div className="text-xl mb-2">
                     <span className="font-bold">Concepts/Patterns:</span> REST,
                     Object Oriented Programming, Agile, Scrum
                  </div>
                  <div className="text-xl mb-2">
                     <span className="font-bold">Auth:</span> Google OAuth,
                     Passport.js, Magic Link
                  </div>
                  <div className="text-xl mb-6">
                     <span className="font-bold">Other:</span> Git, Github,
                     Trello, Fly.io, Bootstrap, JSON, Tailwind, TailWind UI,
                     Resend, Vercel, and Vercel AI SDK
                  </div>
               </div>
               <div className="text-3xl mb-4">
                  <span className="font-bold">Bonus</span>
               </div>
               <div className="text-xl">
                  <span className="font-bold">Spoken Languages:</span> French
                  (native) and Japanese
               </div>
            </div>
         </div>
      </>
   );
}
