"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function LettersMain() {
  const wrapRef   = useRef<HTMLDivElement>(null);
  const h1Ref     = useRef<HTMLHeadingElement>(null);
  const lineRef   = useRef<HTMLSpanElement>(null);
  const pRef      = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      // h1: sube desde abajo con clip-path
      tl.fromTo(
        h1Ref.current,
        { y: 48, opacity: 0, clipPath: "inset(100% 0% 0% 0%)" },
        { y: 0, opacity: 1, clipPath: "inset(0% 0% 0% 0%)", duration: 1.4 },
        0
      )
      // línea decorativa se expande
      .fromTo(
        lineRef.current,
        { scaleX: 0, opacity: 0 },
        { scaleX: 1, opacity: 1, duration: 1, ease: "expo.out" },
        0.6
      )
      // subtítulo aparece después
      .fromTo(
        pRef.current,
        { y: 20, opacity: 0, letterSpacing: "0.6em" },
        { y: 0, opacity: 1, letterSpacing: "0.25em", duration: 1.2 },
        0.8
      );
    }, wrapRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrapRef} className="flex flex-col items-center gap-3 mt-4">
      <h1
        ref={h1Ref}
        className="font-newyork text-4xl text-white lg:text-7xl lg:tracking-[2px] text-center"
        style={{ opacity: 0 }}
      >
        Wedding Planner
      </h1>

      {/* línea dorada decorativa */}
      <span
        ref={lineRef}
        className="block h-px w-24 lg:w-40 origin-center"
        style={{ background: "linear-gradient(90deg,transparent,#c9a96e,transparent)", opacity: 0 }}
      />

      <p
        ref={pRef}
        className={`${montserrat.className} text-white/90 font-light text-sm lg:text-xl text-center`}
        style={{ opacity: 0 }}
      >
        Haz que tu boda sea especial
      </p>
    </div>
  );
}
