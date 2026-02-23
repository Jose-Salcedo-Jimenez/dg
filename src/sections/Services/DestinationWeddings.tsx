import LogoDGg from "@/components/LogoDGg";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });
export default function DestinationWeddings() {
  return (
    <section className="bg-[#ECE6E2]  grid grid-cols-1 lg:grid-cols-2">
      <div className="w-full p-8 flex flex-col gap-4 lg:p-20 lg:pl-20 lg:pr-20">
        <div className="flex flex-col items-center justify-center pt-4">
          <LogoDGg />
        </div>
        <details className="mt-5 lg:mt-10">
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2`}
          >
            Planificación Integral
          </summary>
          <p className={`${montserrat.className} text-[12px] mt-1 pl-4`}>
            Desde la concepción del tema hasta la ejecución final. Nos
            encargamos de todos los aspectos logísticos y contractuales.
          </p>
        </details>

        <details>
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2`}
          >
            Selección Exclusiva de Locaciones
          </summary>
          <p className={`${montserrat.className} text-[12px] mt-1 pl-4`}>
            Te ofrecemos acceso a lugares únicos: casas coloniales, playas
            paradisíacas, haciendas de ensueño y más.
          </p>
        </details>

        <details>
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2`}
          >
            Gestión de Proveedores Premium
          </summary>
          <p className={`${montserrat.className} text-[12px] mt-1 pl-4`}>
            Trabajamos con los mejores en catering, decoración, fotografía,
            música y más, asegurando la máxima calidad.
          </p>
        </details>

        <details>
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2`}
          >
            Asesoría Legal y Trámites
          </summary>
          <p className={`${montserrat.className} text-[12px] mt-1 pl-4`}>
            Te guiamos con todos los requisitos necesarios para tu matrimonio en
            el destino elegido
          </p>
        </details>

        <details>
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2`}
          >
            Coordinación de Viajes y Alojamiento
          </summary>
          <p className={`${montserrat.className} text-[12px] mt-1 pl-4`}>
            Facilitamos la logística para ti y tus invitados, haciendo que el
            viaje sea parte de la celebración.
          </p>
        </details>
      </div>
      <div className="relative w-full h-100 lg:h-150 ">
        <Image
          src={"/OnPageServices/Diseño Pagina Web-29.jpg"}
          alt="Dg eventos"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 100vw, 100vw"
        />
      </div>
    </section>
  );
}
