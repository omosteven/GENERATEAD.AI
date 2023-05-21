import { UiProps } from "../types/uiTypes";
import "./Card.scss";

const Card = (props: UiProps) => {
  const { children, className, onClick } = props;
  return (
    <>
      <div className={`card ${className}`} onClick={() => onClick?.()}>
        {children}
      </div>
    </>
  );
};

export default Card;
