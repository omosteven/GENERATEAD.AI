import { Col, Row } from "react-bootstrap";
import "./HomeHero.scss";
import { Button } from "components/ui";
import heroImage from "assets/images/brain.svg";
import { ReactSVG } from "react-svg";

import { useState } from "react";
import WaitList from "./WaitList/WaitList";
import WatchDemo from "./WatchDemo/WatchDemo";

const HomeHero = () => {
  const [openDemo, toggleDemo] = useState(false);
  const [openWaitlist, toggleWaitlist] = useState(false);

  return (
    <>
      <section className="home-hero" id="homeHero">
        <Row>
          <Col lg={6} md={7}>
            <h1>
              {/* Unleash the Power of <br />
            Artificial Intelligence */}
            </h1>
            <h3>
              {/* An AI program that creates Adverts & Promotional Media content from
            a text prompt and Engineered for High Conversion. */}
              Create Compelling Ads and Promotional Media Contents Effortlessly
              from a Text-prompt
            </h3>

            <div className="home-hero__buttons">
              <Button
                text="Get Early Access"
                onClick={() => toggleWaitlist(true)}
              />
              <Button
                text="Watch Demo"
                onClick={() => toggleDemo(true)}
                invertStyle
              />
            </div>
          </Col>
          <Col lg={6} md={5}>
            <ReactSVG src={heroImage} />
          </Col>
        </Row>
      </section>

      {openDemo && <WatchDemo openDemo={openDemo} toggleDemo={toggleDemo} />}

      {openWaitlist && (
        <WaitList isOpen={openWaitlist} onClose={() => toggleWaitlist(false)} />
      )}
    </>
  );
};

export default HomeHero;
