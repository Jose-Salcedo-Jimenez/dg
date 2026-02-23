"use client"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import LogoDGg from "@/components/LogoDGg";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });
export default function EffectTouch() {

    const boxEffect = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        boxEffect.current,
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
            trigger:boxEffect.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        },

      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <section className="bg-[#ECE6E2] grid grid-cols-1 lg:grid-cols-2">
      <div className="lg:order-2 lg:p-20 lg:pl-20 lg:pr-20">
        <div className="flex flex-col items-center justify-center pt-12 lg:pt-4">
          <LogoDGg />
        </div>
        <h2 className="text-center text-[18px] p-6 text-[#525743] mt-5 lg:mt-10">Efecto Touch</h2>
        <p className={`${montserrat.className} text-[14px] p-6 text-justify text-black/80 pl-8 pr-8 pt-2 pb-10 lg:pb-0`}>
          Touch Danilo Gonzalez es aquel punto diferen- cial a todas las demás
          empresas de organiza- ción de eventos aporta una gran experiencia en
          este sector, además de competitividad, cualificación y compromiso.
          Crea eventos tipo social, empresarial, público o privado, donde priman
          el protocolo y la logística para poder ofrecer una experiencia de
          calidad donde en- contrarás armonía, estética, sutileza, elegan- cia y
          distinción como características principa- les.
        </p>
      </div>
      <div ref = {boxEffect} className="relative w-full h-100 lg:h-150 ">
        <Image
          src={"/OnPageServices/Diseño Pagina Web-30.jpg"}
          alt="Dg eventos"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 100vw, 100vw"
        />
      </div>
    </section>
  );
}
