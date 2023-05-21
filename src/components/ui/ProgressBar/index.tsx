import "./ProgressBar.scss";

interface Props {
  size?: number;
  value?: number;
  strokeWidth?: number;
  trackColor?: string;
  indicatorColor?: string;
  indicatorWidth?: number;
  label?: string;
  labelColor?: string;
  spinnerMode?: boolean;
  spinnerSpeed?: number;
  showLabel?: boolean;
  className?: string;
}

const ProgressBar = (props: Props) => {
  let {
    size = 150,
    value = 20,
    strokeWidth = 2,
    trackColor = `#99a3ba`,
    indicatorWidth = 3,
    indicatorColor = "#275efe",
    label = `Loading...`,
    labelColor = `#99a3ba`,
    spinnerMode = false,
    spinnerSpeed = 1,
    showLabel = false,
    className,
  } = props;

  const center = size / 2,
    radius =
      center - (strokeWidth > indicatorWidth ? strokeWidth : indicatorWidth),
    dashArray = 2 * Math.PI * radius,
    dashOffset = dashArray * ((100 - value) / 100);

  let hideLabel = size < 100 || !label.length || spinnerMode ? true : false;

  return (
    <>
      <div
        className={`circular-progress ${className}`}
        style={{ width: size, height: size }}
      >
        <svg
          className="circular-progress-orientation"
          style={{ width: size, height: size }}
        >
          <circle
            className="circular-progress-track"
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />
          <circle
            className={`circular-progress-indicator ${
              spinnerMode ? "circular-progress-indicator--spinner" : ""
            }`}
            style={{ animationDuration: `${spinnerSpeed} * ${1000}` }}
            cx={center}
            cy={center}
            fill="transparent"
            r={radius}
            stroke={indicatorColor}
            strokeWidth={indicatorWidth}
            strokeDasharray={dashArray}
            strokeDashoffset={dashOffset}
          />
        </svg>

        {!hideLabel && showLabel && (
          <div
            className="circular-progress-label"
            style={{ color: labelColor }}
          >
            <span className="circular-progress-label__loading">{label}</span>

            {!spinnerMode && (
              <span className="circular-progress-label__progress">
                {`${value > 100 ? 100 : value}%`}
              </span>
            )}
          </div>
        )}
      </div>
    </>
  );
};
export default ProgressBar;
