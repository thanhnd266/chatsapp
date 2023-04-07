import { Modal } from "antd";
import styled from "styled-components";

export const ModalCreateChatStyled = styled(Modal)`
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
      .modal-search {
        position: relative;

        .search-input {
          input {
            border-radius: 20px;
            padding: 10px 20px;
            background-color: #c2d5e766;
            border: 1px solid #c2d5e766;

            &:focus-visible {
              outline: unset !important;
            }

            &:focus {
              border: 1px solid #333;
            }
          }
        }

        .search-icon {
          font-size: 18px;
          position: absolute;
          top: 3px;
          right: 13px;
          color: #918f8f;
          cursor: pointer;
          padding: 4px 6px;
        }
      }

      .modal-list {
        background: #e7eef5;
        border-radius: 20px;
        min-height: 300px;
        max-height: 400px;
        margin-top: 10px;
        overflow: auto;
        padding: 10px 0 0 0;

        .modal-list__item {
          display: flex;
          align-items: center;
          margin-bottom: 10px;
          padding: 8px 20px;
          cursor: pointer;
          border-radius: 50px;

          &:hover {
            background-color: #c2d5e766;
          }

          .modal-list__item__img {
            border-radius: 100%;
            position: relative;

            img {
              width: 40px;
              height: auto;
              border-radius: 100%;
            }

            .item-img__status {
              position: absolute;
              bottom: -4px;
              right: -5px;

              i {
                border-radius: 100%;
                border: 2px solid #fff;
                font-size: 10px;
                margin-right: 2px;
                color: rgb(118, 235, 8);
              }
            }

            .item-img__status-offline {
              i {
                color: grey;
              }
            }
          }

          .modal-list__item__info {
            font-size: 16px;
            font-weight: 600;
            margin-left: 14px;
          }
        }
      }
    }
  }
`;
