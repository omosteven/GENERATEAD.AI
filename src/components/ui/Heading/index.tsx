import "./Heading.scss";

interface Props {
  title: string;
  subTitle?: string;
}

const Heading = (props: Props) => {
  const { title, subTitle } = props;
  return (
    <>
      <div className="page-heading">
        <h2>{title}</h2>
        <p>{subTitle}</p>
      </div>
    </>
  );
};

export default Heading;
