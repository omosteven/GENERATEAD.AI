import "./TeamMember.scss";

const TeamMember = (props: {
  name: string;
  position: String;
  image: string;
}) => {
  const { name, position, image } = props;

  return (
    <div className="team-member">
      <img src={image} alt={name} className="curve" />
      <p>{name}</p>
      <h6>{position}</h6>
    </div>
  );
};

export default TeamMember;
