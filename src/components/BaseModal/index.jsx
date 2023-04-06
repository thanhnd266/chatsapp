import { Space } from "antd";
import { ModalBody, ModalWrapper } from "./styled";

const BaseModal = ({
  title,
  onBack,
  children,
  icon,
  type,
  visible,
  ...props
}) => {
  return (
    <ModalWrapper
      centered
      maskClosable={false}
      style={{
        boxShadow: "0px 2px 8px 3px rgba(0, 0, 0, 0.2)",
        padding: 0,
        background: "#ffffff",
      }}
      bodyStyle={{
        padding: 0,
        overflowY: "auto",
      }}
      open={visible}
      title={
        <Space>
          {icon}
          {title}
        </Space>
      }
      type={type}
      {...props}
    >
      <ModalBody>{children}</ModalBody>
    </ModalWrapper>
  );
};

export default BaseModal;
