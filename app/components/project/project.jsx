import ImageSlideshow from "../image-slideshow/image-slideshow";

export default function Project({ images, title, description }) {
   return (
      <div className="flex flex-col items-center">
         <div className="m-2">{title}</div>
         <div className="image-slideshow flex items-center bg-white shadow-md mt-2 mb-12">
            <ImageSlideshow images={images} />
         </div>
         <div className="flex m-2 text-center mt-4 w-3/4 text-sm">
            {description}
         </div>
         <div className="space-x-2 mt-2 mb-4 flex flex-wrap justify-center">
            <a
               href="https://nextjs.org/"
               className="border rounded-xl p-2 text-sm"
            >
               Nextjs
            </a>
            <a
               href="https://vitejs.dev/guide/"
               className="border rounded-xl p-2 text-sm"
            >
               Vite/Reactjs
            </a>
            <a
               href="https://supabase.com/"
               className="border rounded-xl p-2 text-sm"
            >
               Supabase
            </a>
            <a
               href="https://vercel.com/"
               className="border rounded-xl p-2 text-sm"
            >
               Vercel
            </a>
            <a
               href="https://sdk.vercel.ai/docs"
               className="border rounded-xl p-2 text-sm"
            >
               Vercel AI SDK
            </a>
            <a
               href="https://tailwindcss.com/"
               className="border rounded-xl p-2 text-sm"
            >
               Tailwind CSS
            </a>
            <a
               href="https://tailwindui.com/"
               className="border rounded-xl p-2 text-sm"
            >
               Tailwind UI
            </a>
         </div>
      </div>
   );
}
