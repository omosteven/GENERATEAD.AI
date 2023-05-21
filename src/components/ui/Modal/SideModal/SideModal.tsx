import "./SideModal.scss";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { ReactNode } from "react";

const statusTypes = {
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: Function;
  title?: string;
  subTitle?: string;
  titleClass?: string;
  message?: string;
  status?: string | boolean;
  hasError?: boolean;
}

const SideModal = (props: ModalProps) => {
  const {
    children,
    isOpen,
    onClose,
    title,
    subTitle,
    titleClass,
    message,
    status,
    hasError,
  } = props;

  const isError =
    status === statusTypes.ERROR ||
    hasError ||
    (status !== undefined && status === false);
  return (
    <>
      <Drawer
        open={isOpen}
        onClose={() => onClose()}
        direction="right"
        className={`side-modal ${titleClass}`}
      >
        <div className="side-modal__heading">
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </div>
        {message && (
          <div
            className={`side-modal__alert ${
              isError ? "side-modal__alert-error" : ""
            }`}
          >
            <div>{message}</div>
          </div>
        )}
        <div>{children}</div>
      </Drawer>
    </>
  );
};

export default SideModal;
