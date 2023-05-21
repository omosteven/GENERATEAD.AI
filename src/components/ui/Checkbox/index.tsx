import "./Checkbox.scss";
interface InputTypes {
  boxClass?: string;
  labelClass?: string;
  label?: string;
  onChange?: Function;
  value?: boolean;
  id?: string;
  name?: string;
  invertStyle?: boolean;
}

const Checkbox = (props: InputTypes) => {
  const {
    boxClass,
    labelClass,
    label,
    onChange,
    value,
    id,
    name,
    invertStyle,
  } = props;
  return (
    <>
      <div className="checkbox-input">
        <label
          className={`${invertStyle ? "label-inverts" : ""} ${labelClass}`}
        >
          {label}
          <input
            type="checkbox"
            className={`${boxClass}`}
            onChange={(e) => onChange?.(e.target.checked)}
            checked={value}
            id={id}
            name={name}
          />
          <span></span>
        </label>
      </div>
    </>
  );
};

export default Checkbox;
