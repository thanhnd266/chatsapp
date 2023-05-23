import { message } from "antd";
import { useEffect } from "react";

const Toast = ({ toastStatus, text }) => {
  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {

    if (toastStatus === 'success') {
      messageApi.open({
        type: "success",
        content: text,
      });
    } else if (toastStatus === 'error') {
      messageApi.open({
        type: "error",
        content: text,
      });
    } else {
      messageApi.open({
        type: "warning",
        content: text,
      });
    }
  }, []);

  return <>{contextHolder}</>;
};
export default Toast;
