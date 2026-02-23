import { GallerCompoent } from "@/components/GalleryCompoent";
import Logo from "@/components/Logo";
import Image from "next/image";
export default function Banner() {
  return (
    <section className="relative">
      <div className="absolute bg-[#86786A]/80 w-full h-full flex flex-col items-center p-4 gap-4 pt-16 pb-16">
       <Logo/>
        <div className="w-full flex pb-4 lg:pb-0 gap-4 lg:gap-6 overflow-hidden overflow-x-auto lg:justify-center lg:items-center pt-6 lg:pt-36">
          <GallerCompoent
            src={"/About/MesadeEventos.jpg"}
            alt="Primera imagen"
            width={327}
            heigth={327}
          />
          <GallerCompoent
            src={"/About/MesadeEventos2.jpg"}
            alt="Primera imagen"
            width={327}
            heigth={327}
          />
          <GallerCompoent
            src={"/About/pasabocas.jpg"}
            alt="Primera imagen"
            width={327}
            heigth={327}
          />
        </div>
      </div>
    <Image
    src={"/About/Banner.png"}
    alt="Banner informativo"
    width={390}
    height={468}
    />
    </section>
  );
}
