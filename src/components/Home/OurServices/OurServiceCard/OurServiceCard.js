import { Link } from "react-router-dom";
import "./OurServiceCard.scss";

const OurServiceCard = ({ image, title, description, hideTryNow }) => {
  return (
    <div className="border-custom-gradient flex-col justify-center items-start gap-[22.73px] inline-flex our-service-card">
      <img
        className="Rectangle5031 w-[314.52px] h-[193.62px]"
        src={image}
        alt={title}
      />
      <div className="self-stretch h-[186.27px] flex-col justify-start items-start gap-[17.27px] flex our-service-card__content">
        <h5 className="w-[316.34px] text-white text-[25.45px] font-bold">
          {title}
        </h5>
        <p className="Paragraph2 self-stretch opacity-75 text-white text-lg font-medium">
          {description}
        </p>
      </div>
      {!hideTryNow ? (
        <Link to="/get-started">
          <button className="Frame7786 px-[14.54px] py-[7.27px] bg-gradient-to-r from-indigo-900 to-orange-300 rounded justify-start items-start gap-[3.64px] inline-flex">
            Try Now
          </button>
        </Link>
      ) : (
        <div className="px-[14.54px] py-[7.27px]">Coming soon</div>
      )}
    </div>
  );
};

export default OurServiceCard;
