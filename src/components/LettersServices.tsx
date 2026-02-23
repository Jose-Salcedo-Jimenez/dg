"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Montserrat } from "next/font/google";
import { useLayoutEffect, useRef } from "react";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

gsap.registerPlugin(ScrollTrigger);

export default function LettersServices() {
  const boxh1 = useRef<HTMLDivElement>(null);
  const boxp = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        [boxh1.current, boxp.current],
        {
          y: -10,
          scale: 1.2,
          opacity: 0,
          ease: "power4.in",
        },
        {
          y: 0,
          scale: 0.9,
          opacity: 1,
          duration: 1.6,
          ease: "power4.out",
        },
      );
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <h1 ref={boxh1} className="text-4xl lg:text-7xl text-white">
        ¿Como trabajamos?
      </h1>
      <p
        ref={boxp}
        className={`${montserrat.className} tracking-[1px] text-white text-lg lg:text-2xl`}
      >
        Planificación DGonzalezeventos
      </p>
    </>
  );
}
