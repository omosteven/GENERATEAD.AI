import { ReactNode } from "react";
import "./Table.scss";
import Tbody from "./Tbody/Tbody";
import Thead from "./Thead/Thead";

interface TableProps {
  tableClass?: string;
  head: Array<ReactNode>;
  body: Array<object>;
}

const Table = (props: TableProps) => {
  const { tableClass, head, body } = props;
  return (
    <div className="custom-table">
      <table className={`${tableClass}`}>
        <Thead head={head} />
        <Tbody body={body} />
      </table>
    </div>
  );
};

export default Table;
