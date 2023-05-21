// import { ReactSVG } from "react-svg";
import "./FeaturesCard.scss";

const FeaturesCard = (props: {
  title: String;
  text: String;
  image: string;
}) => {
  const { title, text, image } = props;
  return (
    <div className="features-card">
      <h4>{title}</h4>
      <p>{text}</p>
      <img src={image} alt="feature" />
    </div>
  );
};

export default FeaturesCard;
