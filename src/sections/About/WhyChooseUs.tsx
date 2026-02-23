import Image from "next/image";
import LogoDGg from "@/components/LogoDGg";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

export default function WhyChooseUs() {
  return (
    <section className="bg-[#ECE6E2] grid grid-cols-1 lg:grid-cols-2 ">
      <div className="flex flex-col items-center gap-6 p-6 lg:justify-center lg:items-center pt-12 pb-12">
        <LogoDGg />
        <h2 className="text-[18px] lg:text-[22px] text-[#525743]">¿Por qué elegirnos?</h2>
        <p
          className={`${montserrat.className} text-[14px] text-justify lg:p-4 lg:pl-20 lg:pr-20 lg:text-base pl-5 pr-5 mt-5 text-black/80`}
        >
          Son muchos los diferentes criterios por los que nos guiamos para
          decidir y escoger en DG planner, valoramos la gran capacidad de
          nuestras celebraciones para aportar a los asistentes la posibilidad de
          encontrar un lugar en el que experimentar y sentir de manera diferente
          en el que también puedas relacionarte con los demás, aprender,
          descubrir y compartir vivencias
        </p>
      </div>
      <div className="relative w-full h-100 lg:h-150 ">
        <Image
          src={"/About/DG2.jpg"}
          alt="Dg eventos"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 100vw, 100vw"
        />
      </div>
    </section>
  );
}
