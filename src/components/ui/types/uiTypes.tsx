import { ReactNode } from "react";

export interface UiProps {
  children: ReactNode;
  className?: string;
  onClick?: Function;
}
