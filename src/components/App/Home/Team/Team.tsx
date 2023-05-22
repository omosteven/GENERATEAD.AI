import { Col, Row } from "react-bootstrap";
import "./Team.scss";
import TeamMember from "./TeamMember/TeamMember";
import josh from "assets/images/team/lin.jpeg";
import alex from "assets/images/team/alex.jpeg";
// import tim from "assets/images/team/Tim.jpeg";

const teamMembers = [
  {
    name: "Joshua D. Omole",
    position: "Founder | Lead",
    scale: -10,
    image: josh,
  },
  // {
  //   name: "Tim Cvetko",
  //   position: "Founder | Technical Lead | AI Engineer & Researcher",
  //   scale: 15,
  //   image: tim,
  // },
  {
    name: "Alex Starr",
    position: "Google, cornell Grad. | Advisor.",
    scale: -10,
    image: alex,
  },
];

const Team = () => {
  return (
    <section className="team">
      <h1>The Team</h1>
      <div className="team__members">
        <Row>
          {teamMembers?.map(({ name, position, scale, image }, key) => (
            <Col lg={4} key={key}>
              <TeamMember {...{ name, position, image }} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Team;
