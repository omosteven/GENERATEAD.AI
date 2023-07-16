import { Col, Row } from "react-bootstrap";
import Button from "../Button";
import { useState } from "react";

import { Link } from "react-scroll";

import WaitList from "components/App/Home/HomeHero/WaitList/WaitList";
import WatchDemo from "components/App/Home/HomeHero/WatchDemo/WatchDemo";
import Icon from "../Icon";

const LayoutHeader = (props: { open: boolean; toggleSidebar: Function }) => {
  const [openWaitlist, toggleWaitlist] = useState(false);
  const [openDemo, toggleDemo] = useState(false);
  const [showNav, toggleNav] = useState(false);

  return (
    <>
      <header className="layout-header">
        <Row>
          <Col lg={3} sm={3} md={3} xs={3}>
            <Link
              to="homeHero"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <div className="layout-header__logo">
                <span className="layout-header__logo--first">AD</span>
                <span className="layout-header__logo--second">SYNTHETICA</span>
              </div>
            </Link>
          </Col>
          <Col lg={6} sm={6} md={6} xs={6}>
            <div className="layout-header__links">
              <Link
                to="homeHero"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <span onClick={() => toggleDemo(true)}>PRODUCT</span>
              </Link>
              <Link
                to="howItWorks"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <span>HOW IT WORKS</span>
              </Link>
              <Link
                to="features"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <span>FEATURES</span>
              </Link>
              <Link
                to="company"
                spy={true}
                smooth={true}
                offset={-100}
                duration={100}
              >
                <span>THE TEAM</span>
              </Link>
            </div>
          </Col>
          <Col lg={3} sm={3} md={3} xs={3}>
            <div className="layout-header__action">
              <Button
                text="Join Waitlist!"
                onClick={() => toggleWaitlist(true)}
              />
              <span onClick={() => toggleNav(!showNav)}>
                <Icon icon="menu" className="layout-header__menu" />
              </span>
            </div>
          </Col>
        </Row>
      </header>

      {showNav && (
        <div className="layout-navbar">
          <div>
            <p onClick={() => toggleDemo(true)}>PRODUCT</p>
            <Link
              to="howItWorks"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <p>HOW IT WORKS</p>
            </Link>
            <Link
              to="features"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <p>FEATURES</p>
            </Link>
            <Link
              to="company"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <p>THE TEAM</p>
            </Link>
          </div>
        </div>
      )}

      {openWaitlist && (
        <WaitList isOpen={openWaitlist} onClose={() => toggleWaitlist(false)} />
      )}

      {openDemo && <WatchDemo openDemo={openDemo} toggleDemo={toggleDemo} />}
    </>
  );
};

export default LayoutHeader;
