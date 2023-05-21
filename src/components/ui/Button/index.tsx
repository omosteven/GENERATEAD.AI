import Icon from "../Icon";
import "./Button.scss";

const statusTypes = {
  IDLE: "IDLE",
  LOADING: "LOADING",
};

interface ButtonProps {
  text: string;
  authText?: string;
  isLoadingText?: string;
  className?: string;
  onClick?: Function;
  id?: string;
  invertStyle?: boolean;
  isLoading?: boolean;
  status?: string;
  icon?: string;
}

const Button = (props: ButtonProps) => {
  const {
    text,
    className,
    onClick,
    id,
    invertStyle,
    isLoading,
    isLoadingText,
    status,
    icon,
  } = props;
  return (
    <div className="custom-button">
      <button
        id={id}
        className={`button ${invertStyle ? "button-invert" : ""} ${className}
         ${
           isLoading || status === statusTypes.LOADING ? "button-disabled" : ""
         }`}
        onClick={() => onClick?.()}
        disabled={isLoading || status === statusTypes.LOADING}
      >
        {icon && <img src={icon} alt="Icon" className="button-icon" />}
        {isLoading || status === statusTypes.LOADING ? (
          <> {isLoadingText ? isLoadingText : text}</>
        ) : (
          <>{text}</>
        )}
        {(isLoading || status === statusTypes.LOADING) && (
          <Icon icon="loading" className="loading-icon rotating" />
        )}
      </button>
    </div>
  );
};

export default Button;
