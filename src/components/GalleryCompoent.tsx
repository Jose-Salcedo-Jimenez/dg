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
  const boxRef = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    if (!boxRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(boxRef.current, {
        y: 80,
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power4.out",

        scrollTrigger: {
          trigger: boxRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);
  return (
    <div ref={boxRef} className="flex flex-col items-center ">
      <Image src={src} alt={alt} width={width} height={heigth} loading="lazy" />
      <div className="pl-2 pt-2 flex flex-col gap-2">
        <h2 className="font-newyork text-lg">{title}</h2>
        <p
          className={`${montserrat.className} text-[11px] text-justify w-81.75 `}
        >
          {description}
        </p>
      </div>
    </div>
  );
};
