import Icon from "../Icon";
import "./FileInput.scss";

interface FileInputProps {
  className?: string;
  labelText?: string;
  onChange?: Function;
  value?: string;
  id?: string;
  name?: string;
  invertStyle?: boolean;
}

const FileInput = (props: FileInputProps) => {
  const { className, labelText, onChange, value, id, name, invertStyle } =
    props;
  return (
    <>
      <div className="file-input">
        <label className={`${className} ${invertStyle ? "label-invert" : ""}`}>
          {labelText ? `${labelText} ` : "Select File "} <Icon icon="file" />
          <input
            type="file"
            size={60}
            onChange={(e) => onChange?.(e.target.files)}
            value={value}
            id={id}
            name={name}
          />
        </label>
      </div>
    </>
  );
};

export default FileInput;
