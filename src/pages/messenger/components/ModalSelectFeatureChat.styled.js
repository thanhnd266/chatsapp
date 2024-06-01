import { Modal } from "antd";
import styled from "styled-components";

export const ModalSelectFeatureChatStyled = styled(Modal)`
  border-radius: 4px !important;
  overflow: hidden;

  .ant-modal-content {
    border-radius: 4px;
  }

  .ant-modal-header {
    border: none;
  }

  .ant-modal-body {
    padding: 10px 24px 40px 24px;

    .ant-body__wrapper {
        .option-chat {
            border-radius: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 30px;

            .community-chat {
                display: flex;
                flex-direction: column;
                align-items: center;
                cursor: pointer;
                border: 1px solid #c2d5e766;
                padding: 20px 30px;
                border-radius: 8px;
                transition: all 0.3s ease-in-out;

                .community-chat-title {
                    display: flex;
                    align-items: center;
                    margin-top: 10px;

                    span {
                        margin-left: 8px;
                    }
                }

                &:hover {
                    background-color: #c2d5e766;
                }
            }
        }
    }
  }
`;
