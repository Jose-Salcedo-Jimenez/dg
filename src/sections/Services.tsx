import { Montserrat } from "next/font/google";
import { GallerCompoent } from "@/components/GalleryCompoent";
import LogoDGg from "@/components/LogoDGg";
import Link from "next/link";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });
export default function Services() {
  return (
    <section className="w-full flex flex-col gap-4 lg:gap-10 items-center justify-center pl-4 pr-4 pb-14 pt-14  bg-[#D3D3D3] lg:pl-36 lg:pr-36 ">
      <LogoDGg />

      <div className="w-full flex pb-4 lg:pb-0 gap-4 lg:gap-6 overflow-hidden overflow-x-auto lg:justify-center lg:items-center pt-6">
        <GallerCompoent
          src={"/Services/mesa.jpg"}
          alt="Primera imagen"
          title="CORPORATE EXPERIENCES"
          width={327}
          heigth={371}
          description="Creamos experiencias corporativas únicas que elevan la identidad de cada empresa. Diseñamos y producimos eventos a la medida, cuidando cada detalle de la planificación, ambientación, logística y ejecución para crear experiencias que conecten con clientes, colaboradores y aliados estratégicos."
        />
        <GallerCompoent
          src={"/Services/bodas-chicas.jpg"}
          alt="Primera imagen"
          title="BESPOKE WEDDINGS"
          width={327}
          heigth={371}
          description="Diseñamos bodas completamente personalizadas, donde cada detalle refleja la historia y esencia de la pareja. Desde la conceptualización y el diseño hasta la coordinación del gran día, transformamos cada celebración en una experiencia elegante, auténtica y memorable."
        />
        <GallerCompoent
          src={"/Services/Pareja.jpg"}
          alt="Primera imagen"
          title="DESTINATION WEDDINGS"
          width={327}
          heigth={371}
          description="Llevamos tu historia de amor a destinos extraordinarios. Planificamos y producimos celebraciones exclusivas en escenarios únicos, coordinando cada detalle para que tú y tus invitados vivan una experiencia inolvidable, donde el destino, la celebración y cada momento se convierten en parte de una historia para recordar."
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
