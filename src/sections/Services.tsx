import { Montserrat } from "next/font/google";
import { GallerCompoent } from "@/components/GalleryCompoent";
import LogoDGg from "@/components/LogoDGg";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });
export default function Services() {
  return (
    <section className="w-full flex flex-col gap-4 lg:gap-10 items-center justify-center pl-4 pr-4 pb-14 pt-14  bg-[#D3D3D3] lg:pl-36 lg:pr-36 ">
      <LogoDGg/>

      <div className="w-full flex pb-4 lg:pb-0 gap-4 lg:gap-6 overflow-hidden overflow-x-auto lg:justify-center lg:items-center pt-6">
        <GallerCompoent
          src={"/Services/mesa.jpg"}
          alt="Primera imagen"
          title="Wedding Planner"
          width={327}
          heigth={371}
          description="Ofrecemos la planificación y organización de celebraciones de bodas
            y aniversarios especiales. Servicios diseñados para todas las
            parejas que deseen unir sus vidas o con- memorar sus años de unión
            con un evento memorable."
        />
        <GallerCompoent
          src={"/Services/bodas-chicas.jpg"}
          alt="Primera imagen"
          title="Event Planner"
          width={327}
          heigth={371}
          description="Nuestro compromiso es ser su socio de
confianza, brindando soluciones integrales
para eventos con la máxima serenidad y
excelencia."
        />
        <GallerCompoent
          src={"/Services/Pareja.jpg"}
          alt="Primera imagen"
          title="Destination Weddings"
          width={327}
          heigth={371}
          description="Transformamos tu visión de una boda
soñada en una realidad global. Nuestros servicios de Destination Weddings ofrecen una
planificación exquisita e impecable, encargándonos de toda la logística internacional."
        />
      </div>
      <div className="mt-10">
        <Link
          href="/contact"
          className={`${montserrat.className} text-[12px] tracking-widest p-[0.5rem_2rem_0.5rem_2rem] lg:p-[0.8rem_2.5rem_0.8rem_2.5rem] bg-[#636363] text-white rounded-full transition-all duration-500 ease-out hover:bg-neutral-800 hover:scale-[1.03]`}
        >
          Contáctanos
        </Link>
      </div>
    </section>
  );
}
