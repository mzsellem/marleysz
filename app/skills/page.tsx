import React from "react"

export default function Skills() {
   const skillCats = [
      {
         category: "Languages",
         list: ["HTML", "CSS", "Python", "EJS", "JavaScript"],
      },
      { category: "Databases", list: ["MongoDB", "PostgreSQL", "Supabase"] },
      {
         category: "Frameworks/Libraries",
         list: ["Express.js", "Node.js", "React.js", "Django", "Mongoose"],
      },
      {
         category: "Auth",
         list: ["Google OAuth", "Passport.js", "Supabase Magic Link"],
      },
      {
         category: "Concepts/Patterns",
         list: ["REST API", "Object Oriented Programming", "Agile", "Scrum"],
      },
      {
         category: "Other",
         list: [
            "Git",
            "Github",
            "Trello",
            "Fly.io",
            "Bootstrap",
            "JSON",
            "Tailwind CSS",
            "TailWind UI",
            "Resend",
            "Vercel",
            "Vercel AI SDK",
            "Object-Oriented Programming",
         ],
      },
   ];

   return (
      <>
      <div className="font-mono text-black p-10">
         <div className="text-4xl mb-6 text-center">Skillset</div>
         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-2 gap-y-4">
   {skillCats.map((obj) => (
      <div key={obj.category}>
         <div className="text-lg">
            <h1 className="font-bold">{obj.category}</h1>
            <ul>
               {obj.list.map((item) => (
                  <li key={item} className="list-inside list-disc">
                     {item}
                  </li>
               ))}
            </ul>
         </div>
      </div>
   ))}
   </div>
</div>

<div className="flex flex-col md:flex-row items-start p-10">
 <div className="w-full md:w-1/2 text-3xl">
    <span className="font-bold underline decoration-brightred decoration-8">
       Bonus
    </span>
    <div className="text-xl mt-4">
       <p>
          <span className="font-bold">Spoken Languages:</span> 
          <li>French (native)</li>
          <li>Japanese</li>
       </p>
    </div>
 </div>
</div>
</>





      // <>
      //    <div className="flex flex-col h-full p-6 mx-auto w-3/4 font-mono text-black">
      //       <div className="w-full flex flex-col sm:items-center p-4">
      //          <div className="text-4xl mb-6">Skillset</div>
      //          {/* Use flex and flex-wrap to create three rows */}
      //          <div className="flex flex-wrap sm:justify-center sm:space-x-6">
      //             {skillCats.map((obj) => (
      //                <div key={obj.category} className="mb-4">
      //                   <div className="text-lg">
      //                      <h1 className="font-bold">{obj.category}</h1>
      //                      <ul>
      //                         {obj.list.map((item) => (
      //                            <li
      //                               key={item}
      //                               className="list-inside list-disc"
      //                            >
      //                               {item}
      //                            </li>
      //                         ))}
      //                      </ul>
      //                   </div>
      //                </div>
      //             ))}
      //          </div>

      //          <div className="w-1/2 text-3xl flex flex-col md:text-start md:p-6">
      //             <span className="font-bold mb-4 underline decoration-brightred decoration-8">
      //                Bonus
      //             </span>
      //             <div className="text-xl">
      //                <p className="md:text-start">
      //                   {" "}
      //                   <span className="font-bold">
      //                      Spoken Languages:
      //                   </span>{" "}
      //                   French (native) and Japanese
      //                </p>
      //             </div>
      //          </div>
      //       </div>
      //    </div>
      // </>
   );
}
