import Features from "./Features/Features";
import HomeHero from "./HomeHero/HomeHero";
import HowItWorks from "./HowItWorks/HowItWorks";
// import Team from "./Team/Team";

const Home = () => {
  return (
    <>
      <HomeHero />
      <Features />
      <HowItWorks />
      {/* <Team /> */}
    </>
  );
};

export default Home;
