import Header from "@/components/Header";
import Footer from "@/sections/Footer";
import DestinationWeddings from "@/sections/Services/DestinationWeddings";
import EffectTouch from "@/sections/Services/EffectTouch";
import HomePage from "@/sections/Services/HomePage";
import Information from "@/sections/Services/Information";
import Wedding from "@/sections/Services/Wedding";
export default function page() {
  return (
    <>
      <Header />
      <main>
        <HomePage/>
        <Wedding/>
        <Information/>
        <DestinationWeddings/>
        <EffectTouch/>
      </main>
      <Footer/>
    </>
  );
}
