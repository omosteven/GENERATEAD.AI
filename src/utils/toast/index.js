import { toast } from "react-toastify";

const toastMessage = (content, hasError) => {
  return hasError ? toast.error(content) : toast(content);
};

export default toastMessage;
