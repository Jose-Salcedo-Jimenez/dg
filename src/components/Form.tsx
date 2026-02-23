"use client";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import Logo from "./Logo";
import { sileo } from "sileo";
const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "400"] });

export default function Form() {
  const [name, setName] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [tipoEvent, setTipoEvent] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const isFormValid =
    name.trim() !== "" &&
    correo.trim() !== "" &&
    telefono.trim() !== "" &&
    fecha.trim() !== "" &&
    tipoEvent.trim() !== "";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // evita doble envío
    if (isSubmitting) return;

    setIsSubmitting(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, correo, telefono, fecha, tipoEvent }),
      });

      if (!res.ok) {
        throw new Error("Error");
      }

      sileo.success({
        title: "Formulario enviado.",
        description: "Enviando datos..",
        fill: "black",
        styles: {
          title: "text-white!",
          description: "text-white/75!",
        },
      });

      setName("");
      setCorreo("");
      setTelefono("");
      setFecha("");
      setTipoEvent("");
    } catch (error) {
      sileo.error({
        title: "Something went wrong",
        description: (
          <span className={`${montserrat.className}!`}>
            Please try again later.
          </span>
        ),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className="w-full h-full bg-[#545454] p-4 ">
        <div className="w-full flex flex-col justify-center items-center mt-15 ">
          <Logo />
          <h2 className="text-white font-bold tracking-[3px] mt-10 text-[17px] text-center lg:text-2xl">
            Hablemos de tu gran día
          </h2>
          <p
            className={`${montserrat.className} text-white font-light tracking-[3px] text-[11px] lg:text-lg text-center`}
          >
            ¡El viaje hacia el 'Sí, quiero' comienza aquí!
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center items-center mt-10"
        >
          <fieldset className="w-[90%] lg:w-[45%] flex flex-col justify-center  gap-4">
            <input
              className={`${montserrat.className} w-full  bg-white outline-0 text-black tracking-[2px] text-xs p-3`}
              type="text"
              placeholder="Nombre:"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <input
              className={`${montserrat.className} w-full  bg-white outline-0 text-black tracking-[2px] text-xs p-3`}
              placeholder="Correo:"
              type="email"
              value={correo}
              onChange={(e) => {
                setCorreo(e.target.value);
              }}
            />
            <input
              className={`${montserrat.className} w-full  bg-white outline-0 text-black tracking-[2px] text-xs p-3`}
              type="number"
              placeholder="Contacto:"
              value={telefono}
              onChange={(e) => {
                setTelefono(e.target.value);
              }}
            />
            <input
              className={`${montserrat.className} w-full  bg-white outline-0 text-black tracking-[2px] text-xs p-3`}
              type="date"
              placeholder="Fecha de evento:"
              value={fecha}
              onChange={(e) => {
                setFecha(e.target.value);
              }}
            />
            <input
              className={`${montserrat.className} w-full  bg-white outline-0 text-black tracking-[2px] text-xs p-3`}
              type="text"
              placeholder="Tipo de evento:"
              value={tipoEvent}
              onChange={(e) => {
                setTipoEvent(e.target.value);
              }}
            />
          </fieldset>
          <div className="w-[80%] lg:w-[20%] flex justify-center items-center mt-10 ">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`${montserrat.className}
  tracking-[1px] text-sm w-1/2 p-2 text-white font-light
  transition-all duration-300
  ${
    !isFormValid || isSubmitting
      ? "bg-[#777] cursor-not-allowed opacity-50"
      : "bg-[#3a3a3a] hover:bg-[#2a2a2a] cursor-pointer"
  }`}
            >
              {isSubmitting ? "ENVIANDO..." : "ENVIAR"}
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
