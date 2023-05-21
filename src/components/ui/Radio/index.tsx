import "./Radio.scss";

interface InputTypes {
  radioClass?: string;
  labelClass?: string;
  label?: string;
  onChange?: Function;
  value?: boolean;
  id?: string;
  name?: string;
  invertStyle?: boolean;
}

const Radio = (props: InputTypes) => {
  const {
    radioClass,
    labelClass,
    label,
    onChange,
    id,
    name,
    invertStyle,
    value,
  } = props;

  return (
    <>
      <div className="radio-input">
        <label
          className={`${invertStyle ? "label-inverts" : ""} ${labelClass}`}
        >
          {label}
          <input
            type="radio"
            className={`${radioClass}`}
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

export default Radio;
