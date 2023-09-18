import React from "react";
import "./ProductOverview.scss";
import ProductOverviewImage from "./ProductOverviewImage/ProductOverviewImage";
import NoPromptImage from "./NoPromptImage/NoPromptImage";
import ProductOverviewImage2 from "./ProductOverviewImage2/ProductOverviewImage2";

const ProductOverview = () => {
  return (
    <div
      id="features"
      className="w-full relative bg-transparent product-overview"
    >
      <div className="left-[132px] top-[56px] absolute justify-center items-center gap-[100.84px] inline-flex product-overview__category">
        <ProductOverviewImage />

        <div className="flex-col justify-center items-start gap-[63.63px] inline-flex">
          <div className="w-[551px] flex-col justify-center items-start gap-[21.61px] flex product-overview__category__content">
            <h3 className="w-[551px] text-neutral-200 text-[64px] font-semibold">
              Create advertising & Marketing content efficiently{" "}
            </h3>
            <p className="w-[537px] text-zinc-400 text-[17px] font-medium">
              Say goodbye to tedious Brainstorming and Creative Blocks - Our AI
              technology generates everything from images, Audio to video
              content with Ease. Whether you're an Emerging brand, Digital
              Marketer, Ad Agency, Established corporation or just starting out.
              We're the Perfect solution for your Advertising Needs. with
              adsynthetica, you'll never have to worry about the creative
              process again.
            </p>
          </div>
          <button className="Frame4 w-max h-max p-3 bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[15px] border border-stone-500 justify-center items-center gap-3 inline-flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            Try now for free
          </button>
        </div>
      </div>

      <div className="left-[132px] top-[720px] absolute justify-center items-center gap-[100.84px] inline-flex product-overview__category">
        <div className="flex-col justify-center items-start gap-[63.63px] inline-flex">
          <div className="w-[551px] flex-col justify-center items-start gap-[21.61px] flex product-overview__category__content">
            <h5 className="Body opacity-50 text-white text-xl font-medium">
              How to Generate{" "}
            </h5>
            <h3 className="w-[551px] text-neutral-200 text-[64px] font-semibold">
              No Prompt, Simply Type
            </h3>
            <p className="w-[537px] text-zinc-400 text-[17px] font-medium">
              Unlike traditional ADs that are time-intensive and expensive, our
              AI Services are designed to be intuitive, easy-to-use, fast, and fully
              automated.{" "}
            </p>

            <div className="top-[350px] absolute desktop-only">
              <NoPromptImage />
            </div>
          </div>
        </div>
        <ProductOverviewImage2 />
      </div>
    </div>
  );
};

export default ProductOverview;
