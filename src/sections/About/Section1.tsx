"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";
import { useLayoutEffect, useRef } from "react";
import LogoDGg from "@/components/LogoDGg";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

gsap.registerPlugin(ScrollTrigger);
export default function Section1() {
  const boxImg = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxImg.current,
        {
          opacity: 0,
          scale: 0.99,
        },
        {
          opacity: 1,
          duration: 1.2,
          ease: "power4.in",
          scale: 1,
          scrollTrigger:{
            trigger:boxImg.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        },

      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="p-6 bg-[#D3D3D3] grid grid-cols-1 lg:grid-cols-2 lg:p-20 lg:pl-36 lg:pr-36">
      <div
        className={`${montserrat.className} p-4 bg-white text-[14px] lg:text-base flex flex-col items-center gap-4 lg:pt-16 pt-12 pb-12 `}
      >
        <LogoDGg />

        <p className="text-justify pl-5 pr-5 mt-5 lg:p-10">
          En DGonzalez Eventos, sabemos que el secreto de una boda perfecta
          reside en la pasión y la precisión de nuestro equipo. Somos un grupo
          de profesionales multidisciplinarios dedicados a convertir tu visión
          en una realidad impecable.
          <br />
          <br /> Liderazgo Estratégico: DGonzalez Eventos está dirigido por un
          Wedding Planner experto que guía cada proyecto con una visión clara,
          creatividad y la experiencia de años en el sector.
          <br />
          <br /> Diseño y Creatividad: Contamos con mentes creativas dedicadas
          al diseño de ambientes y la conceptualización de tu evento, asegurando
          que cada boda de DGonzalez Eventos sea única, reflejando tu estilo
          personal
        </p>
      </div>
      <div ref={boxImg}
>
        <Image
          src={"/About/ParejaCasandose.jpg"}
          alt="Pareja casandose"
          width={681}
          height={1025}
        />
      </div>
    </section>
  );
}
