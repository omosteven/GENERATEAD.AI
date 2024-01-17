import React, { useEffect, useRef } from "react";

import audibg from "../../../assets/carousel/audio_image.png";
import videobg from "../../../assets/carousel/video_image.png";
// import adscript_image from "../../../assets/carousel/add_script.png";
// import social_media_image from "../../../assets/carousel/social_media_image.png";
// import marketting_strategy from "../../../assets/carousel/marketting_strategy.png";
import analytics_image from "../../../assets/carousel/analytics.png";
import OurServiceCard from "./OurServiceCard/OurServiceCard";

import "./OurServices.scss";
import { useWindowSize } from "../../../helpers";

const carouselContent = [
  {
    image: audibg,
    title: "Ad Audio Generator",
    description:
      "Create powerful Audio Adverts for podcast, Streaming platforms, Radio e.t.c",
  },
  {
    image: videobg,
    title: "Ad Video Generator",
    description:
      "Create high quality Video adverts for Digital media outreach, TV, Billboards e.t.c",
  },
  // {
  //   image: adscript_image,
  //   title: "Ad Script Development",
  //   description:
  //     "No more time-consuming brainstorming sessions to create content script for your Ad.",
  // },
  // {
  //   image: social_media_image,
  //   title: "Social Media Copy Generator",
  //   description: "craft engaging social media content effortlessly.",
  // },
  // {
  //   image: marketting_strategy,
  //   title: "Automated Marketing Strategy",
  //   description:
  //     "Let AI be your strategic ally in the world of digital marketing.",
  // },
  {
    image: analytics_image,
    title: "AI-powered Analytics/Optimization",
    description: "For your data-driven marketing success.",
    hideTryNow: true,
  },
];

const OurServices = () => {
  // const [currentSlide, setCurrentSlide] = useState(0);
  // const componentWidth = 356.34; // Width of one component
  // const numComponents = 3; // Total number of components
  // const slideDuration =[] 3000; // Duration in milliseconds for each slide

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     //   console.log("Slide Number : ", (currentSlide + 1) % numComponents);
  //     setCurrentSlide((currentSlide + 1) % numComponents);
  //   }, slideDuration);

  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  let screenWidth = useRef(1280);

  const { width } = useWindowSize();

  useEffect(() => {
    screenWidth.current = width;
  }, [width]);

  const isTablet = screenWidth.current <= 768;

  return (
    <div
      id="services"
      className="carousel w-full h-[757px]  py-20 bg-transparent  justify-center items-center relative overflow-hidden our-services"
    >
      <h3>Our Services</h3>
      <div
        className={
          isTablet
            ? "our-services__mobile-list"
            : "carousel-inner left-[51.54px] right-[51.54px] top-[169px] absolute justify-center items-center gap-[22px] inline-flex transition-all ease-in-out duration-300"
        }
        style={
          !isTablet
            ? {
                // transform: `translateX(-${currentSlide * componentWidth}px)`,
              }
            : {}
        }
      >
        {carouselContent?.map((data, key) => (
          <OurServiceCard key={key} {...data} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;
