import React from "react";
import "./HowItWorks.scss";

//  h-[757px]
const HowItWorks = () => {
  return (
    <div
      id="product"
      className="how-it-works  py-20 bg-transparent flex-col justify-center items-center gap-20 inline-flex"
    >
      <div className="">
        <h3 className="HowItWorks text-center text-neutral-200 text-[42px] font-bold">
          How it works
        </h3>
        <p className="text-center text-neutral-200  font-normal">
          With these 5 steps, experience the Future of Advertising with Our
          powerful AI Technology.
        </p>
      </div>

      <div className="self-stretch justify-between items-start gap-12 inline-flex how-it-works__card-list">
        <div className="Frame39536 flex-col justify-center items-start gap-6 inline-flex how-it-works__card__block">
          <div className="Component10 w-[377px] how-it-works__card h-[187px] relative border-custom-gradient">
            <h5 className="top-[92px] absolute text-white  font-medium">
              Enter your desired description for your brand/product
            </h5>
            <div className="Number w-[39px] h-[39px] top-[33px] absolute">
              <div className="Bg w-[39px] h-[39px] left-0 top-0 absolute bg-sky-400 rounded-[10px]" />
              <div className=" left-[16px] top-[5px] absolute text-center text-white text-base font-bold leading-7">
                1
              </div>
            </div>
          </div>
          <div className="Component11 w-[377px] h-[187px] how-it-works__card relative border-custom-gradient">
            <h5 className="top-[92px] absolute text-white font-medium">
              Watch our model create unique and engaging content/script
            </h5>
            <div className="Number w-[39px] h-[39px] top-[33px] absolute">
              <div className="Bg w-[39px] h-[39px] left-0 top-0 absolute bg-violet-600 rounded-[10px]" />
              <div className="left-[14px] top-[5px] absolute text-center text-white text-base font-bold leading-7">
                2
              </div>
            </div>
          </div>
        </div>

        <div className="Component15-0 flex-col justify-center items-start gap-6 inline-flex">
          <div className="Component15 w-[400px] how-it-works__card middle-card h-[398px] relative border-custom-gradient">
            <h5 className="top-[92px] absolute text-white  font-medium">
              Proceed to generate the script into video or Audio Ad.
            </h5>

            <div className="Number w-[39px] h-[39px]  top-[33px] absolute middle-card__number">
              <div className="Bg w-[39px] h-[39px] left-0 top-0 absolute bg-red-500 rounded-[10px]" />
              <div className="left-[14px] top-[5px] absolute text-center text-white text-base font-bold leading-7">
                3
              </div>
            </div>
          </div>
        </div>

        <div className="Frame39538 flex-col justify-center items-start gap-6 inline-flex how-it-works__card__block">
          <div className="Component13 w-[377px] how-it-works__card h-[187px] relative border-custom-gradient">
            <h5 className="top-[92px] absolute text-white  font-medium">
              Personalise your content with Actors of your choice.
            </h5>

            <div className="Number w-[39px] h-[39px] top-[33px] absolute">
              <div className="Bg w-[39px] h-[39px] left-0 top-0 absolute bg-indigo-700 rounded-[10px]" />
              <div className="left-[14px] top-[5px] absolute text-center text-white text-base font-bold leading-7">
                4
              </div>
            </div>
          </div>
          <div className="Component13 w-[377px] how-it-works__card h-[187px] relative border-custom-gradient">
            <h5 className="top-[92px] absolute text-white  font-medium">
              Download personalized promotional media content
            </h5>
            <div className="Number w-[39px] h-[39px] top-[33px] absolute">
              <div className="Bg w-[39px] h-[39px] left-0 top-0 absolute bg-teal-600 rounded-[10px]" />
              <div className=" left-[14px] top-[5px] absolute text-center text-white text-base font-bold leading-7">
                5
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
