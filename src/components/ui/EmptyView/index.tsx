import Icon from "../Icon";
import "./EmptyView.scss";

interface Props {
  message?: string;
  iconClass?: string;
  messageClass?: string;
}

const EmptyView = (props: Props) => {
  const { iconClass, messageClass, message } = props;
  return (
    <>
      <div className="empty-view">
        <Icon icon="empty" className={`empty-view__icon ${iconClass}`} />
        <p className={`${messageClass}`}>
          {message ? message : "No Results Found"}
        </p>
      </div>
    </>
  );
};

export default EmptyView;
