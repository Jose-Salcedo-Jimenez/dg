"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import LogoDGg from "@/components/LogoDGg";
import { Montserrat } from "next/font/google";
import Image from "next/image";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

gsap.registerPlugin(ScrollTrigger);

export default function Information() {
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
          scrollTrigger: {
            trigger: boxImg.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
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
        <h2 className="text-center text-[18px] p-6 lg:text-xl text-[#525743] mt-2.5 lg:mt-5">
          ¿Sueñas con una boda que trascienda lo ordinario?
        </h2>
        <p
          className={`${montserrat.className} text-[14px] text-justify lg:text-base text-black/80 pl-8 pr-8 pt-4 pb-10 lg:pb-0`}
        >
          En DGonzalez Eventos, convertimos tu visión de una boda de destino en
          una experiencia mágica e inolvidable. <br />
          <br />
          Nos especializamos en la organización integral de bodas en los lugares
          más hermosos de Colombia y el mundo, cuidando cada detalle para que tu
          única preocupación sea disfrutar de tu gran día.
        </p>
      </div>
      <div ref = {boxImg  } className="relative w-full h-100 lg:h-150">
        <Image
          src={"/OnPageServices/Diseño Pagina Web-31.jpg"}
          alt="Dg eventos"
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
    </section>
  );
}
