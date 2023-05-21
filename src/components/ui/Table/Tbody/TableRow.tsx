interface TableRowProps {
  item?: any;
  rowClass?: string;
  dataClass?: string;
}

const TableRow = (props: TableRowProps) => {
  const { item } = props;

  return (
    <>
      <tr>
        {Object.values(item).map((subitem: any, key) => (
          <td key={key}>{subitem}</td>
        ))}
      </tr>
    </>
  );
};

export default TableRow;
