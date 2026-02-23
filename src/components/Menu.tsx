import Link from "next/link";
export default function Menu() {
  return (
    <ul className="list-none text-white flex flex-col gap-4 pt-20 tracking-[1px] lg:flex-row  lg:pt-0  ">
      <li className="hover:text-[#f9f5c3]">
        <Link href={"/"}>Home</Link>
      </li>
      <li className="hover:text-[#f9f5c3]">
        <Link href={"/about"}>¿Quienes somos?</Link>
      </li>
      <li className="hover:text-[#f9f5c3]">
        <Link href={"/services"}>Servicios</Link>
      </li>
      <li className="hover:text-[#f9f5c3]">
        <Link href={"/contact"}>Contacto</Link>
      </li>
    </ul>
  );
}
