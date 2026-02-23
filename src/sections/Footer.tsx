"use client"
import Image from "next/image";
import Link from "next/link";
import { Montserrat } from "next/font/google";
import Logo from "@/components/Logo";
import { usePathname } from "next/navigation";


const montserrat = Montserrat({ subsets: ["latin"], weight: ["300", "400"] });

export default function Footer() {
    const pathname = usePathname();

  return (
    <>
      <footer className="bg-[#545454] p-10 lg:p-6 flex flex-col justify-center items-center lg:gap-10 lg:h-72">

        {/* Logo */}
        <div className={`${pathname === "/contact" ? "hidden" : "flex"} w-full  justify-center lg:justify-center`}>
          <Logo />
        </div>

        {/* Información de contacto */}
        <address
          className={`${montserrat.className} not-italic text-white pt-10 lg:pt-0 w-fit flex flex-col gap-4 lg:flex-row lg:gap-20`}
        >
          <li className="flex items-center gap-6">
            <Image
              src="/Icons/phone.svg"
              alt="Teléfono DG Events"
              width={25}
              height={25}
            />
            <a href="tel:+573161333343" className="hover:underline">
              (+57) 316 1333343
            </a>
          </li>

          <li className="flex items-center gap-6">
            <Image
              src="/Icons/mail.svg"
              alt="Correo electrónico DG Events"
              width={25}
              height={25}
            />
            <a
              href="mailto:contacto@dgonzalezeventos.com"
              className="hover:underline"
            >
              daniloeventos@gmail.com
            </a>
          </li>

          <li className="flex items-center gap-6">
            <Image
              src="/Icons/map-pin.svg"
              alt="Ubicación DG Events"
              width={25}
              height={25}
            />
            Cartagena, Colombia
          </li>

          <li className="flex items-center gap-6">
            <Image
              src="/Icons/brand-instagram.svg"
              alt="Instagram DG Events"
              width={25}
              height={25}
            />
            <Link
              href="https://www.instagram.com/dgonzalezeventos?igsh=MXNvejc5MDJzamJkYw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              @dgonzaleseventos
            </Link>
          </li>
        </address>
      </footer>

      {/* Certificaciones */}
      <div className="w-full bg-[#D8D8D8] flex flex-col text-center p-6 lg:flex-row lg:justify-center lg:items-center">
        <p className={`${montserrat.className} text-[#6E6E6E]`}>
          <span className="font-bold">DGonzalez Eventos</span> certificados por:
        </p>

        <div className="flex justify-center items-center gap-4 p-6 flex-wrap">
          <Image
            src="/Logos/DestinationsPlanner.png"
            alt="Certificación Destinations Planner"
            width={50}
            height={47}
          />
          <Image
            src="/Logos/EuroAmericano.png"
            alt="Certificación EuroAmericano"
            width={50}
            height={47}
          />
          <Image
            src="/Logos/EventPlanner.png"
            alt="Certificación Event Planner"
            width={50}
            height={47}
          />
          <Image
            src="/Logos/IniBec.png"
            alt="Certificación INIBEC"
            width={50}
            height={47}
          />
          <Image
            src="/Logos/Wedding.png"
            alt="Certificación Wedding Planner"
            width={50}
            height={47}
          />
        </div>
      </div>
    </>
  );
}