import { Col, Row } from "react-bootstrap";
import "./Team.scss";
import TeamMember from "./TeamMember/TeamMember";
import josh from "assets/images/team/IMG_20230523_092103_211~2.jpg";
import alex from "assets/images/team/alex.jpeg";
import julian from "assets/images/team/Screenshot_20230522-202447.jpg";

const teamMembers = [
  {
    name: "Joshua D. Omole",
    position: "Founder | Lead",
    scale: -10,
    image: josh,
  },
  {
    name: "Julian G. Dcruz",
    position: (
      <>
        Founder | Technical Lead <br /> Senior AI Engineer & Lead Researcher
      </>
    ),
    scale: 15,
    image: julian,
  },
  {
    name: "Alex Starr",
    position: "Google, cornell Grad. | Advisor.",
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
