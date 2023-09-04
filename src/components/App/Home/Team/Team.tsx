import { Col, Row } from "react-bootstrap";
import "./Team.scss";
import TeamMember from "./TeamMember/TeamMember";
import josh from "assets/images/team/josh.jpg";
import alex from "assets/images/team/alex.jpeg";
import julian from "assets/images/team/julian.jpeg";
// import ethan from "assets/images/team/ethan.jpeg";
import kim from "assets/images/team/kim.jpg";

const teamMembers = [
  {
    name: "Joshua D. Omole",
    position: "Co-Founder",
    scale: -10,
    image: josh,
  },
  {
    name: "Kimberly Garcia",
    position: "Co-Founder",
    scale: -10,
    image: kim,
  },
  {
    name: "Julian G. Dcruz",
    position: (
      <>
        Co-Founder | Technical Lead <br /> Senior AI Engineer & Lead Researcher
      </>
    ),
    scale: 15,
    image: julian,
  },
  {
    name: "Alex Starr",
    position: "Google | Advisor.",
    scale: -10,
    image: alex,
  },
];

const Team = () => {
  return (
    <section className="team" id="company">
      <h1>The Team</h1>
      <div className="team__members">
        <Row>
          {teamMembers?.map(({ name, position, image }, key) => (
            <Col lg={3} md={6} key={key}>
              <TeamMember {...{ name, position, image }} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Team;
