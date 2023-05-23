import { Modal } from "antd";
import styled from "styled-components";

export const ModalWrapper = styled(Modal)`
  .ant-modal {
    &-header {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.12);
      display: flex;
      align-items: center;
      padding: 10px 12px;
      height: 48px;
      margin-bottom: 0;
      border-top-left-radius: 4px !important;
      border-top-right-radius: 4px !important;
    }
    &-title {
      font-weight: 500;
      font-size: 18px;
    }
    &-content {
      padding: 0;
      padding-bottom: 10px;
      border: none;
    }

    &-close {
      top: -8px;
    }

    &-footer {
      padding: 10px 12px;
      margin: 0 !important;
      border: none;
      border-bottom-left-radius: 4px !important;
      border-bottom-right-radius: 4px !important;
    }
  }
`;

export const ModalBody = styled.div`
  padding: 10px 10px 2px 10px;
`;
