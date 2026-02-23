import LettersAbout from "@/components/LettersAbout";
import { Montserrat } from "next/font/google";
import Image from "next/image";
export default function HomePage() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute w-full h-full bg-white/50 flex flex-col justify-center items-center z-10">
      <LettersAbout/>
      </div>

      {/* Mobile LCP */}
      <Image
        src="/About/ramoFlores.jpg"
        alt="Decoración de boda"
        fill
        sizes="(max-width: 1023px) 100vw"
        className="object-cover lg:hidden"
      />

      {/* Desktop (NO LCP) */}
      <Image
        src="/About/Diseño Pagina Web-42.jpg"
        alt="Decoración de boda"
        fill
        sizes="(min-width: 1024px) 100vw"
        className="object-cover hidden lg:block"
      />
    </section>
  );
}
