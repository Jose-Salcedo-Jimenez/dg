import Image from "next/image"
export default function BttonWhatsApp() {
  return (
    <div className="w-15 h-15 rounded-full fixed right-5 bottom-40 flex justify-center items-center z-50">
        <a href="https://wa.link/4g3eij">
            <Image
            src={"/Icons/whatsapp.png"}
            width={70}
            height={70}
            alt="Icono de WhatsApp"
            className="pl-[0.2rem]"
            />
        </a>
    </div>
  )
}
