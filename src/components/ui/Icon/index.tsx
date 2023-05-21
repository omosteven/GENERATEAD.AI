import { icons } from "./icons";
import "./Icon.scss";

const Icon = (props: {
  icon: string;
  color?: string;
  className?: string;
  src?: string;
}) => {
  const { icon, color, className, src } = props;
  return (
    <>
      {src ? (
        <div className="custom-icon">
          <img
            src={src}
            className={`custom-icon__img || ${className}`}
            alt={"Icon"}
          />
        </div>
      ) : (
        <i
          className={`${icons[icon as keyof typeof icons]} || ${className}`}
          aria-hidden="true"
          style={{ color }}
        />
      )}
    </>
  );
};

export default Icon;
