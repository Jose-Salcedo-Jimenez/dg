import Form from "@/components/Form";
import Header from "@/components/Header";
import Image from "next/image";
import LetterContact from "@/components/LettersContact";
import { Montserrat } from "next/font/google";
import Footer from "@/sections/Footer";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400"],
});
export default function page() {
  return (
    <>
      <Header />
      <section className="relative h-screen w-full overflow-hidden bg-black">
        <div className="absolute inset-0 z-10 flex flex-col items-center bg-black/20 gap-2 pt-20">
         <LetterContact/>
        </div>

        {/* Mobile LCP */}
        <Image
          src="/OnPageContact/Diseño Pagina Web-09.png"
          alt="Decoración de boda"
          fill
          sizes="(max-width: 1023px) 100vw"
          className="object-cover lg:hidden"
        />

        {/* Desktop (NO LCP) */}
        <Image
          src="/OnPageContact/Diseño Pagina Web-44.jpg"
          alt="Decoración de boda"
          fill
          sizes="(min-width: 1024px) 100vw"
          className="object-cover hidden lg:block"
        />
      </section>
        <Form />
        <Footer/>
    </>
  );
}
