import { Button } from "antd";
const ButtonComponent = ({ text, ...props }) => {
  return <Button {...props}>{text}</Button>;
};
export default ButtonComponent;
