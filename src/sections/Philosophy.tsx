"use client";

import Image from "next/image";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
  const wrapRef  = useRef<HTMLDivElement>(null);
  const h2Ref    = useRef<HTMLHeadingElement>(null);
  const lineRef  = useRef<HTMLSpanElement>(null);
  const imgRef   = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Título
      gsap.fromTo(h2Ref.current,
        { y: 30, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        {
          y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: wrapRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );

      // Línea decorativa
      gsap.fromTo(lineRef.current,
        { scaleX: 0, opacity: 0 },
        {
          scaleX: 1, opacity: 1,
          duration: 1, ease: "expo.out", delay: 0.4,
          scrollTrigger: { trigger: wrapRef.current, start: "top 85%", toggleActions: "play none none none" },
        }
      );

      // Imagen: clip-path reveal de abajo a arriba
      gsap.fromTo(imgRef.current,
        { clipPath: "inset(100% 0% 0% 0%)", y: 20 },
        {
          clipPath: "inset(0% 0% 0% 0%)", y: 0,
          duration: 1.4, ease: "expo.out", delay: 0.2,
          scrollTrigger: { trigger: imgRef.current, start: "top 88%", toggleActions: "play none none none" },
        }
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={wrapRef}
      className="w-full text-center flex flex-col gap-4 lg:justify-center lg:items-center pt-6 lg:gap-6 lg:p-10 lg:pb-15 lg:pl-36 lg:pr-36"
    >
      <h2
        ref={h2Ref}
        className="font-newyork text-[17px] pt-4 lg:text-2xl tracking-[1px] lg:text-black/70 lg:tracking-[4px]"
        style={{ opacity: 0 }}
      >
        Arquitectos de Sueños Inolvidables
      </h2>

      <span
        ref={lineRef}
        className="block h-px w-16 lg:w-28 mx-auto origin-center"
        style={{ background: "linear-gradient(90deg,transparent,#8a7d5a,transparent)", opacity: 0 }}
      />

      <div
        ref={imgRef}
        className="relative w-full max-w-225 h-50 lg:h-87.5 mx-auto overflow-hidden rounded-md"
        style={{ clipPath: "inset(100% 0% 0% 0%)" }}
      >
        <Image
          src="/Banner/bodaPlaya.jpg"
          alt="Equipo de arquitectos diseñando espacios modernos y funcionales"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover transition-transform duration-[8000ms] ease-out hover:scale-105"
          quality={85}
        />
      </div>
    </section>
  );
}