import Image from "next/image";

export default function Philosophy() {
  return (
    <section className="w-full text-center flex flex-col gap-4 lg:justify-center lg:items-center pt-6 lg:gap-6  lg:p-10 lg:pb-15 lg:pl-36 lg:pr-36">
      
      <h2 className="font-newyork text-[17px] pt-4 lg:text-2xl tracking-[1px] lg:text-black/70 lg:tracking-[4px]">
        Arquitectos de Sueños Inolvidables
      </h2>

      <div className="relative w-full max-w-225 h-50 lg:h-87.5 mx-auto">
        <Image
          src="/Banner/bodaPlaya.jpg"
          alt="Equipo de arquitectos diseñando espacios modernos y funcionales"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 900px"
          className="object-cover rounded-md"
          quality={85}
        />
      </div>

    </section>
  );
}