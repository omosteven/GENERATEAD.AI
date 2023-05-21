import { ReactNode } from "react";

interface TheadProps {
  head: Array<ReactNode>;
}

const Thead = (props: TheadProps) => {
  const { head } = props;
  return (
    <>
      <thead>
        <tr>
          {head.map((item: any, key) => (
            <th key={key}>{item}</th>
          ))}
        </tr>
      </thead>
    </>
  );
};

export default Thead;
