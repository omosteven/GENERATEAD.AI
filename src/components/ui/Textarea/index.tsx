import "./Textarea.scss";

interface TextareaTypes {
  textareaClass?: string;
  labelClass?: string;
  label?: string;
  placeholder?: string;
  onChange?: Function;
  value?: string;
  cols?: number;
  rows?: number;
  id?: string;
  name?: string;
  invertStyle?: boolean;
  hasError?: boolean;
  errorMsg?: string;
  className?: string;
  register?: Function;
  required?: boolean;
  hideLabel?: boolean;
}

const Textarea = (props: TextareaTypes) => {
  const {
    textareaClass,
    labelClass,
    placeholder,
    label,
    onChange,
    value,
    cols,
    rows,
    id,
    name,
    invertStyle,
    errorMsg,
    hasError,
    className,
    required,
    hideLabel,
    register,
  } = props;
  return (
    <>
      <div className={`textarea-input ${className}`}>
        {!hideLabel && <label className={`label ${labelClass}`}>{label}</label>}
        <textarea
          className={`textarea  ${
            invertStyle ? "textarea-invert" : ""
          } ${textareaClass} ${hasError ? "textarea-error-input" : ""}`}
          placeholder={placeholder}
          onChange={(e) => onChange?.(e.target.value)}
          value={value}
          cols={cols}
          rows={rows}
          id={id}
          name={name}
          required={required}
          {...register?.(name, { required })}
        />
        {hasError && (
          <div className="textarea-error">
            {errorMsg ? errorMsg : `${label} is required.`}
          </div>
        )}
      </div>
    </>
  );
};

export default Textarea;
