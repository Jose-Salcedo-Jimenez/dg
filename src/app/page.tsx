import Header from "@/components/Header";
import HomePage from "@/sections/HomePage";
import Services from "@/sections/Services";
import Banner from "@/sections/Banner";
import Philosophy from "@/sections/Philosophy";
import SocialMedias from "@/sections/SocialMedias";
import Footer from "@/sections/Footer";
export default function Home() {
  return (
  <>
  <Header/>
  <main className="p-0 m-0">
    <HomePage/>
    <Services/>
    <Banner/>
    <Philosophy/>
    <SocialMedias/>
  </main>
  <Footer/>
   </>
  );
}
