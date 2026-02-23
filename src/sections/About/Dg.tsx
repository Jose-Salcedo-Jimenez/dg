import Image from "next/image";
import { Montserrat } from "next/font/google";
import LogoDGg from "@/components/LogoDGg";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

export default function Dg() {
  return (
    <section className="p-6 pt-14 pb-14 bg-[#D3D3D3] grid grid-cols-1 lg:grid-cols-2 lg:p-20 lg:pl-48 lg:pr-48 ">
      <div className="relative w-full h-100 lg:h-150">
        <Image
          src={"/About/DG.jpg"}
          alt="Dg eventos"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 100vw, 100vw"
        />
      </div>
      <div
        className={`${montserrat.className} p-4 bg-white text-[14px] flex flex-col items-center gap-4 lg:text-base lg:pt-16 pt-12 pb-12  `}
      >
        <LogoDGg />

        <p className="text-justify lg:p-10 hyphens-auto wrap-break-words  leading-relaxed pl-5 pr-5 mt-5 lg:mt-0 ">
          Danilo Gonzalez Wedding Planner, productor y diseñador de eventos en
          DGonzalezeventos, te ayudará en la organización y realización de tu
          boda o evento, centrándose en tus gustos, tendencias actuales y
          necesidades presupuestarias. Empresa legalmente constituida en
          Colombia, ejecutamos cada detalle pensado para que tu día especial sea
          inolvidable. Dale un touch DG a tus eventos sociales, corporativos o
          bodas con nuestros servicios que más desees en cualquier destino.
        </p>
      </div>
    </section>
  );
}
