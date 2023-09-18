import Banner from "./Banner/Banner";
import Blog from "./Blog/Blog";
import HeroSection from "./HeroSection/HeroSection";
import HowItWorks from "./HowItWorks/HowItWorks";
import OurServices from "./OurServices/OurServices";
import ProductOverview from "./ProductOverview/ProductOverview";

const Home = () => {
  return (
    <>
      <HeroSection />
      <HowItWorks />
      <OurServices />
      <ProductOverview />
      <Blog/>
      <Banner />
    </>
  );
};

export default Home;
