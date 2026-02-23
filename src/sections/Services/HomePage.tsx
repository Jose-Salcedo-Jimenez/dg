"use client"
import Image from "next/image";
import LettersServices from "@/components/LettersServices";
export default function HomePage() {
  return (
   <section className="relative h-screen w-full overflow-hidden bg-black">
         <div className="absolute w-full h-full bg-white/20 flex flex-col justify-center items-center z-10">
          <LettersServices/>
         </div>
   
         {/* Mobile LCP */}
         <Image
           src="/OnPageServices/Diseño Pagina Web-27.jpg"
           alt="Decoración de boda"
           fill
           sizes="(max-width: 1023px) 100vw"
           className="object-cover lg:hidden"
         />
   
         {/* Desktop (NO LCP) */}
         <Image
           src="/About/Diseño Pagina Web-43.jpg"
           alt="Decoración de boda"
           fill
           sizes="(min-width: 1024px) 100vw"
           className="object-cover hidden lg:block"
         />
       </section>
  );
}
