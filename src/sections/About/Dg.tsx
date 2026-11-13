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
          Danilo González, Wedding Planner, productor y diseñador de eventos de
          DGonzalez Eventos, te acompañará en la organización y realización de
          tu boda o evento, creando experiencias que se adapten a tus gustos,
          necesidades y presupuesto, siempre de la mano de las tendencias
          actuales. Somos una empresa legalmente constituida en Colombia y nos
          encargamos de cuidar cada detalle para hacer de tu día especial una
          experiencia única e inolvidable. Dale un toque DG a tus eventos
          sociales, corporativos o bodas, con los servicios que necesites y en
          el destino que elijas.
          <br/><br/>
          En DG Planner cuidamos cada detalle a la hora de crear y seleccionar cada experiencia. Valoramos la capacidad de nuestras celebraciones para ofrecer a los asistentes un espacio donde puedan experimentar y sentir de manera diferente, relacionarse con los demás, aprender, descubrir y compartir nuevas vivencias.

        </p>
      </div>
    </section>
  );
}
