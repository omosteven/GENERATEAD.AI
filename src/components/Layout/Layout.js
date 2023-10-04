import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
      <ToastContainer />
    </>
  );
};

export default Layout;
