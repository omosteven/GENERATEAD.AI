import './App.css';
import Banner from './components/Banner';
import DemoSignup from './components/DemoSignup';
import PricingPlan from './components/PricingPlan';
import ProductOverview from './components/ProductOverview';
import ShowBlog from './components/blog/ShowBlog';
import Footer from './components/footer/Footer';
import NavHeader from './components/header/NavHeader';
import HeroSection from './components/herosection/HeroSection';
import HowItWorks from './components/howitworks/HowItWorks';
import OurServices from './components/services/OurServices';

function App() {
  return (
    <div className="bg-custom-radial-gradient text-white min-h-screen">
      <NavHeader/>
      <HeroSection/>
      <HowItWorks/>
      <OurServices/>
      <ProductOverview/>
      {/* <PricingPlan/> */}
      <ShowBlog/>
      <Banner/>
      <Footer/>

    </div>
  );
}

export default App;
