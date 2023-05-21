import { ReactNode } from "react";
import "./Text.scss";

interface TextProps {
  children: ReactNode;
  className?: string;
  tag?: string;
}

const Text = (props: TextProps) => {
  const { children, className, tag } = props;
  const renderBasedOnHtmlTag = () => {
    switch (tag) {
      case "h1":
        return <h1 className={`${className} p-text`}>{children}</h1>;
      case "h2":
        return <h2 className={`${className} p-text`}>{children}</h2>;
      case "h3":
        return <h3 className={`${className} p-text`}>{children}</h3>;
      case "h4":
        return <h4 className={`${className} p-text`}>{children}</h4>;
      case "h5":
        return <h5 className={`${className} p-text`}>{children}</h5>;
      case "h6":
        return <h6 className={`${className} p-text`}>{children}</h6>;
      default:
        return <p className={`${className} p-text`}>{children}</p>;
    }
  };
  return <>{renderBasedOnHtmlTag()}</>;
};

export default Text;
