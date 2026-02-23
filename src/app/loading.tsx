import Image from "next/image";
export default function Loading() {
  return (
    <div  className="h-screen flex justify-center items-center bg-[#3F3F3F]">
    <Image
            src={"/Logos/LogoDG-Dorado.png"}
            alt="logo de DG Events"
            width={50}
            height={50}
            />
    </div>
  );
}
