import NavBar from "./components/NavBar";
import BrandSection from "./components/BrandSection";
import Footer from "./components/Footer";
import AdvertismentSection from "./components/AdvertismentSection";
import Services from "./components/Services";
import Business from "./components/Business";
import Information from "./components/Information";
import Features from "./components/Features";
import JumboTron from "./components/JumboTron";
import HeroSection from "./components/HeroSection";


export default function App() {
  return (
    <div className="w-full h-screen ">
      <NavBar />
      <HeroSection/>
      <BrandSection />
      <JumboTron/>
      <Features />
      <Information />
      <Business />
      <Services />
      <AdvertismentSection />
      <Footer />
    </div>
  );
}
