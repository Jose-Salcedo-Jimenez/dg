"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

export default function LettersAbout() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const h1Ref   = useRef<HTMLHeadingElement>(null);
  const lineRef = useRef<HTMLSpanElement>(null);
  const pRef    = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(h1Ref.current,
        { y: 48, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        { y: 0,  opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.4 }, 0
      )
      .fromTo(lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1, ease: "expo.out" }, 0.6
      )
      .fromTo(pRef.current,
        { y: 20, opacity: 0, letterSpacing: "0.5em" },
        { y: 0,  opacity: 1, letterSpacing: "0.08em", duration: 1.2 }, 0.75
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="flex flex-col items-center gap-3">
      <h1
        ref={h1Ref}
        className="text-4xl lg:text-7xl text-[#525743] font-newyork text-center"
        style={{ opacity: 0 }}
      >
        Equipo DG
      </h1>

      <span
        ref={lineRef}
        className="block h-px w-20 lg:w-36 origin-center"
        style={{ background: "linear-gradient(90deg,transparent,#8a7d5a,transparent)", opacity: 0 }}
      />

      <p
        ref={pRef}
        className={`${montserrat.className} text-sm lg:text-2xl pt-1 font-light text-center`}
        style={{ opacity: 0 }}
      >
        Arquitectos de Sueños Inolvidables
      </p>
    </div>
  );
}
