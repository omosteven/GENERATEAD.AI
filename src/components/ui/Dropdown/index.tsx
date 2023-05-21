import Dropdown from "react-bootstrap/Dropdown";
import "./Dropdown.scss";

interface Props {
  items: Array<{ text: string; handleAction?: Function }>;
  menuTitle: string;
}

const DropdownMenu = (props: Props) => {
  const { items, menuTitle } = props;
  return (
    <>
      <Dropdown className="custom-dropdown">
        <Dropdown.Toggle variant="success">{menuTitle}</Dropdown.Toggle>

        <Dropdown.Menu>
          {items?.map(({ text, handleAction }, key) => (
            <Dropdown.Item
              href="#/action-1"
              onClick={() => handleAction?.()}
              key={key}
            >
              {text}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
};

export default DropdownMenu;
