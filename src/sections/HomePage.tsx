import LettersMain from "@/components/LettersMain";
import Image from "next/image";
export default function HomePage() {

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-10 flex flex-col items-center bg-black/50 gap-2 pt-20">
       <LettersMain/>
      </div>

      {/* Mobile LCP */}
      <Image
        src="/Main/BodaVertical.jpg"
        alt="Decoración de boda"
        fill
        sizes="(max-width: 1023px) 100vw"
        className="object-cover lg:hidden"
      />

      {/* Desktop (NO LCP) */}
      <Image
        src="/Main/Diseño Pagina Web-40.jpg"
        alt="Decoración de boda"
        fill
        sizes="(min-width: 1024px) 100vw"
        className="object-cover hidden lg:block"
      />
    </section>
  );
}
