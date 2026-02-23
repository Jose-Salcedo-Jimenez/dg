import Image from "next/image"
export default function BttonWhatsApp() {
  return (
    <div className="w-12 h-12 rounded-full fixed right-5 bottom-40 flex justify-center items-center z-50">
        <a href="https://wa.link/s1josl">
            <Image
            src={"/Icons/whatsapp.png"}
            width={52}
            height={52}
            alt="Icono de WhatsApp"
            className="pl-[0.2rem]"
            />
        </a>
    </div>
  )
}
