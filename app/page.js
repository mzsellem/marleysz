import Navbar from "./navbar/page";
import "../public/poppy2.png"

export default function Home() {
  return (
    <>
      <Navbar/>
      <div className="flex flex-row items-center justify-center h-full border-4 border-black rounded-3xl m-12 mt-5 p-20">
        <div className="flex-col justify-center items-center w-3/5">
          <h1 className="font-extralight text-7xl p-2 underline decoration-4 underline-offset-8 flex justify-center">MARLEY SELLEM</h1>
          <h1 className="text-2xl font-thin flex justify-center pt-2">FULL STACK SOFTWARE ENGINEER</h1>
        </div>
        <div className="flex items-center justify-center w-2/5">
          <img src="/poppy2.png" alt="poppy in a field" className="w-5/6"/>
        </div>
      </div>

      

    </>
  )
}
