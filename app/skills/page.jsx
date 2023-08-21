import Navbar from "../navbar/page";

export default function Skills() {
   return (
      <>
         <Navbar />
         <div className="flex flex-col items-left justify-center h-screen border-4 border-black rounded-3xl m-12 mt-5 pl-16">
            <div className="text-6xl pb-4">Skillset</div>
            <div>
               <div className="text-2xl pb-2">
                  <span className="font-bold">Languages:</span> HTML,
                  JavaScript, CSS, Python, EJS
               </div>
               <div className="text-2xl pb-2">
                  <span className="font-bold">Frameworks/Libraries:</span>{" "}
                  Express.js, Node.js, React.js, Django, Mongoose
               </div>
               <div className="text-2xl pb-2">
                  <span className="font-bold">Databases:</span> MongoDB,
                  PostgreSQL, Supabase
               </div>
               <div className="text-2xl pb-2">
                  <span className="font-bold">Concepts/Patterns:</span> REST,
                  Object Oriented Programming, Agile, Scrum
               </div>
               <div className="text-2xl pb-2">
                  <span className="font-bold">Auth:</span> Google OAuth,
                  Passport.js
               </div>
               <div className="text-2xl pb-6">
                  <span className="font-bold">Other:</span> Git, Github, Trello,
                  Fly.io, Bootstrap, JSON, Tailwind, Vercel
               </div>
            </div>
            <div className="text-4xl pb-4">
               <span className="font-bold">Bonus</span>
            </div>
            <div className="text-2xl">
               <span className="font-bold">Spoken Languages:</span> French
               (native) and Japanese
            </div>
         </div>
      </>
   );
}
