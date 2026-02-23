import Header from "@/components/Header";
import Banner from "@/sections/About/Banner";
import HomePage from "@/sections/About/HomePage";
import Section1 from "@/sections/About/Section1";
import Dg from "@/sections/About/Dg";
import WhyChooseUs from "@/sections/About/WhyChooseUs";
import Footer from "@/sections/Footer";
export default function page() {
  return (
    <>
        <Header/>
        <main>
            <HomePage/>
            <Section1/>
            <Banner/>
            <Dg/>
            <WhyChooseUs/>
        </main>
        <Footer/>
    </>
)
}
