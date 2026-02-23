
import LogoDGg from "@/components/LogoDGg";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

export default function Wedding() {
  return (
    <section className="bg-[#ECE6E2] grid grid-cols-1 lg:grid-cols-2 ">
      <div className="w-full p-8 flex flex-col gap-4 lg:p-20 lg:pl-20 lg:pr-20">
        <div className="flex flex-col items-center justify-center pt-4">
          <LogoDGg />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-2xl text-[#525743]">Bodas</h2>
        </div>
        <details className="mt-10">
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2 `}
          >
            Servicios Esenciales
          </summary>
          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Lugar de la Celebración y Recepción
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Finca</li>
                <li>Salon de eventos</li>
                <li>Hotel</li>
                <li>Playa</li>
                <li>Alquiler del espacio</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold `}>
                Catering y Bebidas
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Menú para la cena/almuerzo</li>
                <li>Bocadillos y aperitivos</li>
                <li>Barra libre o servicio de bebidas</li>
                <li>Torta o pastel de bodas</li>
                <li>Música y Entretenimiento</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Fotografía y Video
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Fotógrafo profesional</li>
                <li>Videógraf</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Decoración y Flores
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Ramo de novia</li>
                <li>Centros de mesa</li>
                <li>Decoración floral</li>
                <li>Iluminación</li>
                <li>Mobiliario especial</li>
                <li>Detalles temáticos</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Oficiante de la Ceremonia
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Sacerdote</li>
                <li>Juez</li>
                <li>Maestro de ceremonias</li>
                <li>Oficiante laico</li>
              </ul>
            </div>
          </article>
        </details>

        <details>
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2`}
          >
            Servicios para los Novios
          </summary>
          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Vestido de Novia y Traje del Novio
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Tienda de vestidos/diseñador</li>
                <li>Alquiler o compra del traje</li>
                <li>Sastrería y ajustes</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Belleza y Arreglo Personal
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Maquillaje profesional</li>
                <li>Peluquería para la novia</li>
                <li>Peluquería para damas de honor</li>
                <li>Servicios de spa </li>
                <li>relajación</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Anillos de Boda
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Joyería para la selección </li>
                <li>Compra de las argollas</li>
              </ul>
            </div>
          </article>
        </details>

        <details>
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2`}
          >
            Servicios de Logística y Planificación
          </summary>
          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Wedding Planner
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Planificación integral</li>
                <li>Diseño</li>
                <li>Gestión de proveedores </li>
                <li>Coordinación el día del evento</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Invitaciones y Papelería
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Diseño e impresión de invitaciones</li>
                <li>Tarjetas de agradecimiento</li>
                <li>Menús</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Transporte VIP
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Coche clásico</li>
                <li>limusina</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Alojamiento
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Bloques de habitaciones </li>
              </ul>
            </div>
          </article>
        </details>

        <details>
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2`}
          >
            Servicios Adicionales
          </summary>
          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Detalles y Recuerdos para Invitados
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Souvenirs</li>
              </ul>
            </div>
          </article>

          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Entretenimiento Extra
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Photo booth</li>
                <li>Show especial</li>
              </ul>
            </div>
          </article>
        </details>

        <details className="pb-4 lg:pb-0">
          <summary
            className={`${montserrat.className} text-black/80 text-[14px] tracking-[1px] border-b border-black/20 pt-2 pb-2`}
          >
            Servicios postboda
          </summary>
          <article className="pl-5 pt-3">
            <div>
              <h3 className={`${montserrat.className} text-xs font-semibold`}>
                Servicios Adicionales
              </h3>
              <ul
                className={`${montserrat.className} text-[10px] mt-1 list-disc pl-4 space-y-0.5`}
              >
                <li>Excursiones en velero</li>
                <li>Tours privados en yate</li>
                <li>Fiesta en cabañas privadas</li>
                <li>Niñeras</li>
              </ul>
            </div>
          </article>
        </details>
      </div>
      <div className="relative w-full h-100 lg:h-150">
        <Image
          src={"/OnPageServices/Diseño Pagina Web-28.jpg"}
          alt="Dg eventos"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 100vw, 100vw"
        />
      </div>
    </section>
  );
}
