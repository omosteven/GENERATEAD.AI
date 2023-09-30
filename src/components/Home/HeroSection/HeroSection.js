import React from "react";
import VideoModal from "../VideoModal/VideoModal";
import "./HeroSection.scss";

// top-[270px]
const HeroSection = () => {
  return (
    <div id="home" className="hero-section h-[720px] relative bg-transparent">
      <div className="max-w-screen-xl w-full mx-auto p-5 relative">
        <div className="top-0 flex-col justify-center items-center gap-[31.59px] inline-flex">
          <div className="text-center">
            <span class="text-neutral-200 text-4xl font-semibold">
              Automate
            </span>
            <span class="bg-text-custom-gradient">Your High visual</span>
            <span class="text-neutral-200 text-4xl font-semibold">
              , Video, and Audio Ad creation process at the speed of thought.
            </span>
          </div>
          <p>
            A new way to think and create cross-channel Advertising content and
            marketing strategy with AI.
          </p>
          <div className="w-full justify-center items-center gap-[31.59px] inline-flex hero-section__buttons">
            <div className="Frame4 w-[200px] h-[52px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[10px] border border-stone-500 justify-center items-center gap-[13.16px] flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
              <a target="_blank" href="https://app-adsy.roycelabs.xyz" className="text-neutral-200 text-lg font-medium ">
                Try now for free
              </a>
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
