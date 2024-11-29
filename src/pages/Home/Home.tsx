import Hero from "@/sections/Hero/Hero";
import AboutUs from "@/sections/AboutUs/AboutUS";
import OurVision from "@/sections/OurVision/OurVision";
import OurServices from "@/sections/OurServices/OurServices";
import ContactUs from "@/sections/ContactUs/ContactUs";
import Footer from "@/components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutUs />
      <OurVision />
      <OurServices />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
