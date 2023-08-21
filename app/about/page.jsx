import Navbar from "../navbar/page";

export default function About() {
   return (
      <>
         <Navbar />
         <div className="flex flex-row items-center justify-center h-screen border-4 border-black rounded-3xl m-12 mt-5">
            <h1>About Page</h1>
         </div>
      </>
   );
}
