import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Banner() {
  return (
    <section className="relative overflow-hidden h-44 lg:h-75">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-2 lg:gap-6 bg-black/50">
        <h2 className="font-newyork text-white text-lg lg:text-5xl">
          ¡Haz que tu día sea especial!
        </h2>
        <p
          className={`${montserrat.className} text-white text-[11px] lg:text-sm w-[90%] lg:w-[60%]`}
        >
          Nuestros eventos se caracterizan por su planificación ordenada,
          involucrando proveedores con altos estándares.
        </p>
      </div>

      {/* Imagen */}
      <Image
        src="/Banner/EventoBoda.jpg"
        alt="Banner informativo DG"
        fill
        className="object-cover"
        priority
      />
    </section>
  );
}
