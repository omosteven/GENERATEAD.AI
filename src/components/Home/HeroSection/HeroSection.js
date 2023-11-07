import React, { useEffect, useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import "./HeroSection.scss";
import { Link } from "react-router-dom";

// top-[270px]
const HeroSection = () => {
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationStage((prev) => (prev > 1 ? 0 : prev + 1));
    }, 2000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="home" className="hero-section h-[720px] relative bg-transparent">
      <div className="max-w-screen-xl w-full mx-auto p-5 relative">
        <div className="top-0 flex-col justify-center items-center gap-[31.59px] inline-flex">
          <div className="text-center">
            <span class="text-neutral-200 text-4xl font-semibold">
              Automate
            </span>
            {/* bg-text-custom-gradient  */}
            <span
              className={`${
                animationStage === 0 ? "hero-section__animation-1" : ""
              }`}
            >
              {" "}
              Your High visual
            </span>
            <span className="text-neutral-200 text-4xl font-semibold">
              ,{" "}
              <span
                className={`${
                  animationStage === 1 ? "hero-section__animation-2" : ""
                }`}
              >
                Video, and Audio
              </span>{" "}
              Ad creation process at the{" "}
              <span
                className={`${
                  animationStage === 2 ? "hero-section__animation-3" : ""
                }`}
              >
                speed of thought.
              </span>
            </span>
          </div>
          <p>
            A new way to think and create cross-channel Advertising content and
            marketing strategy with AI.
          </p>
          <div className="w-full justify-center items-center gap-[31.59px] inline-flex hero-section__buttons hero-section__animation-btn">
            <div className="Frame4 w-[200px] h-[52px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[10px] border border-stone-500 justify-center items-center gap-[13.16px] flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
              <Link
                rel="noreferrer"
                to="/get-started"
                className="text-neutral-200 text-lg font-medium "
              >
                Try now for free
              </Link>
            </div>
            <div className="Frame8 w-[168px] h-8 justify-center items-center gap-[10.53px] flex">
              <div className="VuesaxBoldVideoCircle w-8 h-8 justify-center items-center flex">
                <div className="VideoCircle w-8 h-8 relative"></div>
              </div>
              <VideoModal />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
