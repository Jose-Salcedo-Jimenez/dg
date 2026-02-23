import Image from "next/image";

export default function LogoDGg() {
  return (
    <>
      {/* Logo Mobile */}
      <Image
        src="/Logos/LogoDG-gris.png"
        alt="Logo DG Events"
        width={50}
        height={50}
        className="block lg:hidden"
        priority
      />

      {/* Logo Desktop */}
      <Image
        src="/About/Diseño Pagina Web-46.png"
        alt="Logo DG Events"
        width={180}
        height={80}
        className="hidden lg:block"
        priority
      />
    </>
  );
}