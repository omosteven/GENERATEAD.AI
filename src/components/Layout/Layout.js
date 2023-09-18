import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
