import AboutUs from "../../components/aboutus";
import Brand from "../../components/brand";
import Banner from "../../components/banner";
import Team from "../../components/team";
import Services from "../../components/services";
import Faq from "../../components/faq";
import Footer from "../../components/footer";
export default function Home() {
  return (
    <main>
        <Banner/>
        <Brand/>
        <AboutUs/>
        <Team/>
        <Services/>
        <Faq/>
        <Footer/>
    </main>
  )
}
