"use client";

import Image from "next/image";
import { Montserrat } from "next/font/google";
import { useRef, useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

type cardServices = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  width: number;
  heigth: number;
};

gsap.registerPlugin(ScrollTrigger);

export const GallerCompoent: React.FC<cardServices> = ({
  src,
  alt,
  title,
  description,
  width,
  heigth,
}) => {
  const boxRef  = useRef<HTMLDivElement>(null);
  const imgRef  = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (!boxRef.current) return;

    const ctx = gsap.context(() => {
      // ── Contenedor: fade + rise desde abajo ──
      gsap.fromTo(
        boxRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.4,
          ease: "power3.out",
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── Imagen: clip-path reveal de abajo a arriba ──
      gsap.fromTo(
        imgRef.current,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: {
            trigger: boxRef.current,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        }
      );

      // ── Línea decorativa: se expande ──
      if (lineRef.current) {
        gsap.fromTo(
          lineRef.current,
          { scaleX: 0, opacity: 0 },
          {
            scaleX: 1,
            opacity: 1,
            duration: 0.9,
            ease: "expo.out",
            delay: 0.3,
            scrollTrigger: {
              trigger: boxRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // ── Texto: aparece con pequeño stagger ──
      if (textRef.current) {
        gsap.fromTo(
          textRef.current,
          { y: 16, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
            delay: 0.4,
            scrollTrigger: {
              trigger: boxRef.current,
              start: "top 88%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={boxRef}
      className="flex flex-col group"
      style={{ width: `${width}px`, minWidth: `${width}px`, opacity: 0 }}
    >
      {/* ── Imagen con hover ken-burns ── */}
      <div
        ref={imgRef}
        className="relative overflow-hidden"
        style={{ height: `${heigth}px` }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
          loading="lazy"
        />
        {/* Velo negro al hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-700" />
      </div>

      {/* ── Línea decorativa dorada ── */}
      {title && (
        <span
          ref={lineRef}
          className="block h-px w-10 mt-4 origin-left"
          style={{
            background: "linear-gradient(90deg,#c9a96e,transparent)",
            opacity: 0,
          }}
        />
      )}

      {/* ── Texto ── */}
      <div ref={textRef} className="pt-3 flex flex-col gap-2" style={{ opacity: 0 }}>
        {title && (
          <h2 className="font-newyork text-base tracking-widest">{title}</h2>
        )}
        {description && (
          <p
            className={`${montserrat.className} text-[11px] text-justify leading-relaxed`}
            style={{ width: `${width - 8}px` }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
};
