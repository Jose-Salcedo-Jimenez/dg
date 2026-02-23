import Image from "next/image";

export default function Logo() {
  return (
    <>
      {/* Logo Mobile */}
      <Image
        src="/Logos/LogoDG-Dorado.png"
        alt="Logo DG Events"
        width={50}
        height={50}
        className="block lg:hidden"
        priority
      />

      {/* Logo Desktop */}
      <Image
        src="/Logos/Logo-Desktop-dorado.png"
        alt="Logo DG Events"
        width={180}
        height={80}
        className="hidden lg:block"
        priority
      />
    </>
  );
}