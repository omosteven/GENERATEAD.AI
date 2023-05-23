import axios from "axios";

import moment from "moment";

import { toast } from "react-toastify";

export const joinWaitList = async (
  data: any,
  setLoading: Function,
  handleClose?: Function
) => {
  let currentDate = moment().format("D-MMM-YY");

  setLoading(true);
  const formDataSearchParams = new URLSearchParams();
  formDataSearchParams.set("FullName", data.fullName);
  formDataSearchParams.set("Email", data?.email);
  formDataSearchParams.set("Date", currentDate);
  formDataSearchParams.set("form-name", "WaitingList");

  await axios
    .post("/", formDataSearchParams.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((suc) => {
      toast.success("Thank you for joining our waitlist!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
      handleClose?.();
    })
    .catch((e) => {
      setLoading(false);

      return toast.error("Sorry, an error occurred. Kindly try again, please", {
        position: "top-right",
        // autoClose: 5000,
        hideProgressBar: false,
        // closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};

export const saveSurvey = async (
  data: any,
  setLoading: Function,
  handleClose?: Function
) => {
  setLoading(true);
  let currentDate = moment().format("D-MMM-YY");

  const formDataSearchParams = new URLSearchParams();
  formDataSearchParams.set("Email", data?.email);
  formDataSearchParams.set("Budget", data?.proposedBudget);
  formDataSearchParams.set("Industry", data?.industry);
  formDataSearchParams.set("Date", currentDate);
  formDataSearchParams.set("form-name", "Survey");

  await axios
    .post("/", formDataSearchParams.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((suc) => {
      toast.success("Thanks for filling the survey", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setLoading(false);
      handleClose?.();
    })
    .catch((e) => {
      setLoading(false);

      return toast.error("Sorry, an error occurred. Kindly try again, please", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    });
};
