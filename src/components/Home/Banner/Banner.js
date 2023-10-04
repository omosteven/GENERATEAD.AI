import React from "react";
import "./Banner.scss";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="h-[592px] relative bg-transparent banner">
      {/* <div className="Background h-[508px] top-[42px] absolute"></div> */}
      <div>
        <h3>Ready to Take Your ADs to the Next Level? </h3>
        <Link to="/get-started/" target="__blank">
          <button className="w-[210px] h-[73px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded-[15px] border border-stone-500 justify-center items-center gap-2.5 flex hover:shadow-lg hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
