"use client";

import { Montserrat } from "next/font/google";
import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function Banner() {
  const h2Ref   = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const pRef    = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: { trigger: h2Ref.current, start: "top 80%", toggleActions: "play none none none" },
      });

      tl.fromTo(h2Ref.current,
        { y: 30, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        { y: 0,  opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.2 }, 0
      )
      .fromTo(lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 0.9, ease: "expo.out" }, 0.5
      )
      .fromTo(pRef.current,
        { y: 16, opacity: 0 },
        { y: 0,  opacity: 1, duration: 1 }, 0.65
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative overflow-hidden h-44 lg:h-75">
      {/* Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center gap-3 lg:gap-5 px-4"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.60) 0%, rgba(0,0,0,0.30) 60%, rgba(0,0,0,0.45) 100%)" }}
      >
        <h2
          ref={h2Ref}
          className="font-newyork text-white text-lg lg:text-5xl"
          style={{ opacity: 0 }}
        >
          ¡Haz que tu día sea especial!
        </h2>

        {/* Línea dorada decorativa */}
        <span
          ref={lineRef}
          className="block h-px w-16 lg:w-28 origin-center"
          style={{ background: "linear-gradient(90deg,transparent,#c9a96e,transparent)", opacity: 0 }}
        />

        <p
          ref={pRef}
          className={`${montserrat.className} text-white/85 text-[11px] lg:text-sm w-[90%] lg:w-[55%] font-light`}
          style={{ opacity: 0 }}
        >
          Nuestros eventos se caracterizan por su planificación ordenada,
          involucrando proveedores con altos estándares.
        </p>
      </div>

      {/* Imagen con ken-burns sutil */}
      <Image
        src="/Banner/EventoBoda.jpg"
        alt="Banner informativo DG"
        fill
        className="object-cover z-0 scale-105 hover:scale-100 transition-transform duration-[8000ms] ease-out"
        priority
      />
    </section>
  );
}
