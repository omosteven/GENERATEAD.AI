import LayoutHeader from "./LayoutHeader";
import "./Layout.scss";
import { ReactNode, useState } from "react";
import LayoutFooter from "./LayoutFooter";

const Layout = (props: { children?: ReactNode }) => {
  const { children } = props;
  const [open, setOpen] = useState(false);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <LayoutHeader open={open} toggleSidebar={toggleSidebar} />
      <main>{children}</main>
      <LayoutFooter />
    </>
  );
};

export default Layout;
