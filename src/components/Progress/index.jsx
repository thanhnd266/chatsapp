import { Spin } from "antd";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useEffect } from "react";
const SuspenseFallback = () => {
  useEffect(() => {
    NProgress.configure({ showSpinner: false });
    NProgress.start();
    return () => {
      NProgress.done();
    };
  });
  return (
    <div>
      <Spin />
      <span>Đang tải, vui lòng đợi...</span>
    </div>
  );
};
export default SuspenseFallback;
