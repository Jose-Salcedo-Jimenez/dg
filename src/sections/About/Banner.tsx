import Logo from "@/components/Logo";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="relative">
      <div className="absolute bg-[#86786A]/80 w-full h-full flex flex-col items-center p-4 gap-4 pt-16 pb-16">
       <Logo/>
      </div>
    <Image
    src={"/About/Nbanner.png"}
    alt="Banner informativo"
    width={390}
    height={468}
    className="w-[100%] h-[80%]"
    />
    </section>
  );
}
