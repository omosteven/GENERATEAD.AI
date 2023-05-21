import Icon from "../Icon";
import "./Rating.scss";

interface Props {
  rateValue?: number;
  handleRating?: Function;
  useRed?: boolean;
}

const Rating = (props: Props) => {
  const stars = [1, 2, 3, 4, 5];
  const { rateValue = 0, handleRating, useRed = false } = props;

  return (
    <div className="custom-rating">
      {stars?.map((star, key) => (
        <span onClick={() => handleRating?.(star)}>
          <Icon
            icon="star"
            key={key}
            className={`custom-rating__icon ${
              rateValue >= star
                ? `${
                    useRed ? "custom-rating__rated-red" : "custom-rating__rated"
                  }`
                : ""
            }`}
          />
        </span>
      ))}
    </div>
  );
};

export default Rating;
