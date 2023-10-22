import "../../public/aboutpic.png";

export default function About() {
   return (
      <>
         <div className="flex flex-row justify-left h-full border-4 border-black rounded-3xl m-12 mt-5 p-20">
            <div className="w-1/4">
               <img src="/aboutpic.png" alt="poppy in a field" />
            </div>
            <div className="flex flex-wrap w-3/4 pl-14">
               <div className="text-5xl flex items-left mb-6">About Me</div>
               <p className="flex items-left mb-6">
                  As a detail-oriented third-culture kid with a diverse
                  background in health sciences, I am eager to embark on a new
                  professional journey in software development.{" "}
               </p>
               <p className="flex items-left mb-6">
                  My passion for precision and problem-solving, honed through my
                  experiences in health sciences, fuels my desire to contribute
                  to the dynamic and rapidly evolving field of software
                  development.{" "}
               </p>
               <p className="flex items-left mb-6">
                  I am committed to acquiring the necessary technical skills and
                  knowledge to excel in this industry, and I am excited to apply
                  my unique perspective and cross-cultural understanding to
                  create innovative and user-centric solutions.
               </p>
               <p className="flex items-left mb-6">
                  With an innate curiosity and a strong drive to learn, I am
                  confident that my transition into software development will
                  enable me to make a meaningful impact and thrive in this
                  field.
               </p>
            </div>
         </div>
      </>
   );
}
