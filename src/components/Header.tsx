"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import Menu from "./Menu";
import Logo from "./Logo";
export default function Header() {
  const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(!open);
  };

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return (
    <header
      className={` bg-[#3F3F3F] p-4 ${
        open ? "h-screen scale-100 overflow-hidden" : "h-auto"
      } lg:flex lg:flex-col lg:justify-center lg:items-center`}
    >
      <div className="flex justify-between items-center lg:gap-28">
        <Link href={"/"}>
          <Logo />
        </Link>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="lg:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          <div className="relative w-6 h-6">
            <img
              src="/Icons/menu.svg"
              className={`absolute inset-0 transition-all duration-300 ease-out
      ${open ? "opacity-0 scale-75 rotate-90" : "opacity-100 scale-100 rotate-0"}
    `}
            />

            <img
              src="/Icons/x.svg"
              className={`absolute inset-0 transition-all duration-300 ease-out
      ${open ? "opacity-100 scale-100 rotate-0" : "opacity-0 scale-75 -rotate-90"}
    `}
            />
          </div>
        </button>
        <div className=" hidden lg:flex">
          <Menu />
        </div>
      </div>

      <div
        className={`w-full transform-gpu  transition-all duration-500 ease-out ${open ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none h-1.25"}
  `}
      >
        <Menu />
      </div>
    </header>
  );
}
