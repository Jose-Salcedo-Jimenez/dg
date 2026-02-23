"use client"
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});

export default function LettersMain() {
  const boxRefh1 = useRef<HTMLDivElement>(null);
  const boxRefp = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo([boxRefh1.current, boxRefp.current], {
        y: -10,
        scale: 1.2,
        opacity: 0,
        ease: "power4.in",
      },
    {
        y:0,
        scale:0.9,
        opacity:1,
        duration:1.6,
        ease:"power4.out"
    });
    });

    return () => ctx.revert();
  }, []);
  return (
    <>
      <h1
        ref={boxRefh1}
        className=" opacity-0 font-newyork text-4xl text-white lg:text-7xl lg:tracking-[1px]"
      >
        Wedding Planner
      </h1>
      <p
        ref={boxRefp}
        className={`${montserrat.className} opacity-0 text-white/95 font-light text-lg lg:text-2xl lg:tracking-[4px]`}
      >
        Haz que tu boda sea especial
      </p>
    </>
  );
}
