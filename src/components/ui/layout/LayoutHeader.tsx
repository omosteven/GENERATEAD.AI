import { Col, Row } from "react-bootstrap";
import Button from "../Button";

const LayoutHeader = (props: { open: boolean; toggleSidebar: Function }) => {
  return (
    <header className="layout-header">
      <Row>
        <Col lg={3}>
          <div className="layout-header__logo">
            <span className="layout-header__logo--second">GENERATEAD</span>
            <span className="layout-header__logo--first">.AI</span>
          </div>
        </Col>
        <Col lg={6}>
          <div className="layout-header__links">
            <span>PRODUCT</span>
            <span>HOW IT WORKS</span>
            <span>FEATURES</span>
            <span>COMPANY</span>
          </div>
        </Col>
        <Col lg={3}>
          <Button text="Join Waitlist!" />
        </Col>
      </Row>
    </header>
  );
};

export default LayoutHeader;
