import Icon from "../Icon";
import "./ErrorView.scss";

interface Props {
  message?: string;
  iconClass?: string;
  messageClass?: string;
  handleRetry?: Function;
}

const ErrorView = (props: Props) => {
  const { iconClass, messageClass, message, handleRetry } = props;
  return (
    <>
      <div className="error-view">
        <Icon icon="error" className={`error-view__icon ${iconClass}`} />
        <p className={`${messageClass}`}>
          {message ? message : "An error occurred."}
        </p>
        <p className="error-view__retry" onClick={() => handleRetry?.()}>
          Retry
        </p>
      </div>
    </>
  );
};

export default ErrorView;
