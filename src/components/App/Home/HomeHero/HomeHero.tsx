import { Col, Row } from "react-bootstrap";
import "./HomeHero.scss";
import { Button, DefaultModal } from "components/ui";
import heroImage from "assets/images/brain.svg";
import { ReactSVG } from "react-svg";

import { useState } from "react";
import WaitList from "./WaitList/WaitList";

const HomeHero = () => {
  const [openDemo, toggleDemo] = useState(false);
  const [openWaitlist, toggleWaitlist] = useState(false);

  return (
    <>
      <section className="home-hero">
        <Row>
          <Col lg={6} md={7}>
            <h1>
              {/* Unleash the Power of <br />
            Artificial Intelligence */}
            </h1>
            <h3>
              {/* An AI program that creates Adverts & Promotional Media content from
            a text prompt and Engineered for High Conversion. */}
              Create Compelling Ads and Promotional Media Contents Effortlessly from a Text-prompt
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

      {openDemo && (
        <DefaultModal
          className="home-hero__modal"
          isOpen={openDemo}
          onClose={() => toggleDemo(false)}
          onButtonClick={() => toggleDemo(false)}
          buttonText="Close"
        >
          <video width="320" height="240" controls>
            <source
              src={"assets/images/hero/video-demo.mp4"}
              type="video/mp4"
            />
          </video>
          <p>
            Powerful tool for success: our product is an AI sandbox for
            Marketing/ad agencies and a Web-app for individuals, startups
            or small businesses.
          </p>
        </DefaultModal>
      )}

      {openWaitlist && (
        <WaitList isOpen={openWaitlist} onClose={() => toggleWaitlist(false)} />
      )}
    </>
  );
};

export default HomeHero;
