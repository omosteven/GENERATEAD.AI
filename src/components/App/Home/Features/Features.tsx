import { Col, Row } from "react-bootstrap";
import "./Features.scss";
import FeaturesCard from "./FeaturesCard/FeaturesCard";
import image1 from "assets/images/best-marketing-automation-tools.png";
import image2 from "assets/images/content-automation.png";
import image3 from "assets/images/fd.jpg";
import { Parallax } from "react-scroll-parallax";

const featuresList = [
  {
    title: "Automated content creation",
    text: "Generate high-quality campaigns from text prompts with ease, saving you time and effort.",
    image: image1,
    speed: 10,
  },
  {
    title: "Customizable content",
    text: "Use our partnered influencers or upload your desired voice and video actors for each piece and tailor your ad content according to your needs, objectives, and budget.",
    image: image2,
    speed: 0,
  },
  {
    title: "Optimization tools",
    text: "Maximize your marketing ROI with GenerateAd.ai's powerful optimization tools.",
    image: image3,
    speed: 20,
  },
];

const Features = () => {
  return (
    <>
      <section className="features" id="features">
        <h1>WHY OUR AI</h1>
        <h3>
          Experience the Future of Advertising with Our powerful AI Technology
        </h3>
        <div>
          <Row>
            {featuresList.map(({ title, text, image, speed }, key) => (
              <Col lg={4} sm={12} md={4} key={key}>
                <Parallax
                  scale={[0.8, 1]}
                  rotate={[1, 0]}
                  easing="easeInQuad"
                  speed={speed}
                >
                  <FeaturesCard {...{ title, text, image }} />
                </Parallax>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
};

export default Features;
