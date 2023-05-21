import TableRow from "./TableRow";

interface TbodyProps {
  body: Array<object>;
}

const Tbody = (props: TbodyProps) => {
  const { body } = props;
  return (
    <>
      <tbody>
        {body.map((item: any, key) => (
          <TableRow item={item} key={key} />
        ))}
      </tbody>
    </>
  );
};

export default Tbody;
