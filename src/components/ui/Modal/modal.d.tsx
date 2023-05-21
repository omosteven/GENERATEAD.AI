import { ReactNode } from "react";

export interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: Function;
  title?: string;
  subTitle?: string;
  titleClass?: string;
  hideButton?: Boolean;
  onButtonClick?: Function;
  buttonText?: string;
  className?: string;
}
