import { useEffect, useState } from "react";

import "./Alert.scss";

enum DIRECTIONS {
  TOP = "alert-top",
  LEFT = "alert-left",
  RIGHT = "alert-right",
  BOTTOM = "alert-bottom",
}

type directions = keyof typeof DIRECTIONS;

interface AlertProps {
  alertClass?: string;
  title: string;
  text: string;
  show?: boolean;
  isDanger?: boolean;
  timeOut?: number;
  direction?: directions;
}

const Alert = (props: AlertProps) => {
  const {
    alertClass,
    title,
    text,
    show = true,
    isDanger,
    timeOut,
    direction = "TOP",
  } = props;
  const [alert, setAlert] = useState(show);

  useEffect(() => {
    if (show) {
      setAlert(true);
    }

    if (timeOut) {
      setTimeout(() => {
        setAlert(false);
      }, timeOut);
    }
  }, [timeOut, show]);

  return (
    <>
      {alert && (
        <div className="alert-component">
          <div
            className={`alert ${DIRECTIONS[direction]} ${alertClass} ${
              isDanger ? "alert-danger-bg" : ""
            }`}
          >
            <p className="close-alert" onClick={() => setAlert(false)}>
              +
            </p>
            <h1>{title}</h1>
            <p>{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
