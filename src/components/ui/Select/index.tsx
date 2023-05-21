import "./Select.scss";

interface SelectTypes {
  selectClass?: string;
  labelClass?: string;
  label?: string;
  placeholder?: string;
  onChange?: Function;
  value?: string;
  id?: string;
  name?: string;
  invertStyle?: boolean;
  hasError?: boolean;
  errorMsg?: string;
  className?: string;
  register?: Function;
  required?: boolean;
  type?: string;
  optionClass?: string;
  options?: Array<{
    value: string;
    label: string;
  }>;
}

const Select = (props: SelectTypes) => {
  const {
    selectClass,
    labelClass,
    label,
    onChange,
    value,
    id,
    name,
    invertStyle,
    errorMsg,
    hasError,
    className,
    register,
    required = false,
    options,
    optionClass,
  } = props;

  return (
    <>
      <div className={`custom-select ${className}`}>
        <label className={`label ${labelClass}`}>{label}</label>
        <select
          name={name}
          id={id}
          className={`select ${selectClass} ${
            invertStyle ? "input-invert" : ""
          } ${hasError ? "input-error-input" : ""}`}
          onChange={(e) => onChange?.(e.target.value)}
          {...register?.(name, { required })}
        >
          {options?.map((option, key) => (
            <option
              value={option?.value}
              key={key}
              className={`option ${optionClass}`}
              selected={value === option?.value}
            >
              {option?.label}
            </option>
          ))}
        </select>
        {hasError && (
          <span className="input-error">
            {errorMsg ? errorMsg : `${label} is required.`}
          </span>
        )}
      </div>
    </>
  );
};

export default Select;
