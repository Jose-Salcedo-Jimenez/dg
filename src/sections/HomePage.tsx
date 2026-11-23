"use client";

import LettersMain from "@/components/LettersMain";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const slides = [
  { src: "/slider/1.png", alt: "Slide 1" },
  { src: "/slider/2.png", alt: "Slide 2" },
  { src: "/slider/3.png", alt: "Slide 3" },
  { src: "/slider/4.png", alt: "Slide 4" },
  { src: "/slider/5.png", alt: "Slide 5" },
];

const INTERVAL = 6000;

export default function HomePage() {
  const [current, setCurrent]   = useState(0);
  const [prev, setPrev]         = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (index: number) => {
    if (index === current || transitioning) return;
    setTransitioning(true);
    setPrev(current);
    setCurrent(index);
    timeoutRef.current = setTimeout(() => {
      setPrev(null);
      setTransitioning(false);
    }, 1000);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      goTo((current + 1) % slides.length);
    }, INTERVAL);
    return () => clearInterval(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current, transitioning]);

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">

      {/* ── Slides: imagen anterior se va con fade, la actual entra con ken-burns ── */}
      {slides.map((slide, i) => {
        const isActive = i === current;
        const isPrev   = i === prev;

        return (
          <div
            key={slide.src}
            className="absolute inset-0"
            style={{
              zIndex: isActive ? 2 : isPrev ? 1 : 0,
              opacity: isActive || isPrev ? 1 : 0,
              pointerEvents: "none",
            }}
          >
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              sizes="100vw"
              priority={i === 0}
              className="object-cover"
              style={{
                /* Ken-Burns: la imagen activa escala suavemente */
                transform: isActive ? "scale(1.07)" : "scale(1)",
                transition: isActive
                  ? "transform 7s cubic-bezier(0.25, 0.46, 0.45, 0.94), opacity 1s ease"
                  : "opacity 1s ease",
                opacity: isActive ? 1 : isPrev ? 0 : 0,
              }}
            />
          </div>
        );
      })}

      {/* ── Overlay degradado luxury ── */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.4) 100%)",
        }}
      />

      {/* ── Título ── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2">
        <LettersMain />
      </div>

      {/* ── Flechas minimalistas luxury ── */}
      {[
        { label: "Slide anterior", dir: -1, side: "left-6 lg:left-10" },
        { label: "Slide siguiente", dir:  1, side: "right-6 lg:right-10" },
      ].map(({ label, dir, side }) => (
        <button
          key={label}
          onClick={() => goTo((current + dir + slides.length) % slides.length)}
          aria-label={label}
          className={`absolute top-1/2 ${side} z-30 -translate-y-1/2 group flex items-center justify-center w-10 h-10 border-0 cursor-pointer bg-transparent`}
        >
          <span
            className="block border border-white/40 rounded-full w-10 h-10 flex items-center justify-center text-white/70 text-xl
              transition-all duration-500 ease-out
              group-hover:border-white/90 group-hover:text-white group-hover:scale-110 group-hover:bg-white/10
              backdrop-blur-sm"
          >
            {dir === -1 ? "‹" : "›"}
          </span>
        </button>
      ))}

      {/* ── Dots luxury (líneas en lugar de círculos) ── */}
      <div className="absolute bottom-8 left-0 right-0 z-30 flex justify-center items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Ir a slide ${i + 1}`}
            className="border-0 bg-transparent cursor-pointer p-1 group"
          >
            <span
              className="block h-px transition-all duration-700 ease-out"
              style={{
                width: i === current ? "2.5rem" : "1rem",
                background: i === current
                  ? "linear-gradient(90deg,transparent,#c9a96e,transparent)"
                  : "rgba(255,255,255,0.35)",
                transform: i === current ? "scaleY(2)" : "scaleY(1)",
              }}
            />
          </button>
        ))}
      </div>

      {/* ── Número de slide ── */}
      <div className="absolute bottom-8 right-8 z-30 text-white/40 text-xs tracking-widest font-light select-none">
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>
    </section>
  );
}
