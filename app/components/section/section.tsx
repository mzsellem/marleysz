import React from "react";

export type SectionProps = {
   title: string,
   component: React.JSX.Element,
}

export default function Section({title, component}: SectionProps) {   
   return (
      <div className="flex flex-col m-4 sm:items-center">
         <div className="flex flex-col items-center justify-center w-full p-4 bg-blue-400/75 sm:bg-blue-400/25 rounded-3xl sm:w-3/4">
            <h1 className="mt-6 mb-2 font-mono text-4xl">{title}</h1>
            {component} 
         </div>              
      </div>
   );
}
