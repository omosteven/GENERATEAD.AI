import "./DatePicker.scss";
import Icon from "../Icon";

interface DatePickerProps {
  className?: string;
  placeHolder?: string;
  labelClass?: string;
  label?: string;
  onChange?: Function;
  value?: string;
  id?: string;
  name?: string;
  invertStyle?: boolean;
}

const DatePicker = (props: DatePickerProps) => {
  const {
    className,
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
      <div className={`date-picker-input  ${className}`}>
        <label className={`${labelClass} label`}>{label}</label>
        <div className={`${invertStyle ? "div-invert" : ""}`}>
          <input
            type="date"
            onChange={(e) => onChange?.(e.target.value)}
            value={value}
            id={id}
            name={name}
          />
          <Icon icon="calendar" className="icon" />
        </div>
      </div>
    </>
  );
};

export default DatePicker;
