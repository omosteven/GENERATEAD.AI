import Button from "..";

interface ButtonProps {
  text: string;
  className?: string;
  onClick?: Function;
  id?: string;
  invertStyle?: boolean;
}

const CreateButton = (props: ButtonProps) => {
  const { text, className, onClick, id, invertStyle } = props;
  return <Button {...{ text, className, onClick, id, invertStyle }} />;
};

export default CreateButton;
