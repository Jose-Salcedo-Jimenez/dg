
import { GallerCompoent } from "@/components/GalleryCompoent";
export default function SocialMedias() {
  return (
    <section className="text-center bg-[#DFDFDF] flex flex-col justify-center items-center pt-16 pb-16 pl-4 pr-4  gap-4 lg:p-20 lg:pl-36 lg:pr-36">
      <h2 className={`text-lg lg:text-xl tracking-[1px] lg:tracking-[4px]`}>
        SIGUENOS EN NUESTRAS REDES
      </h2>
    <div className="w-full flex pb-4 lg:pb-0 gap-4 lg:gap-6 overflow-hidden overflow-x-auto lg:justify-center lg:items-center mt-8">
        <GallerCompoent
        src={"/Social-medias/MesaBoda.jpg"}
        alt="Primera imagen"
        width={327}
        heigth={327}
      />

      <GallerCompoent
        src={"/Social-medias/MesaBoda1.jpg"}
        alt="Primera imagen"
        width={327}
        heigth={327}
      />
      <GallerCompoent
        src={"/Social-medias/Bodaplaya.jpg"}
        alt="Primera imagen"
        width={327}
        heigth={327}
      />
    </div>
    </section>
  );
}
