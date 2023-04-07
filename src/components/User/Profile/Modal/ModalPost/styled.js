import { Avatar } from "antd";
import styled from "styled-components";

export const ModalPostContent = styled.div`
  padding: 0 10px;
  position: relative;

  .modal-avatar {
    display: flex;
    align-items: center;

    .modal-avatar__info {
      margin-left: 12px;

      h6 {
        margin-bottom: 4px;
      }

      .ant-select {
        background: #e4e6eb;
        border-radius: 6px;
      }
    }
  }

  .modal-main {
    margin-top: 10px;
    width: 100%;

    .post-input {
      border-radius: 6px;
      font-size: 16px;
      width: 100%;
      min-height: 80px !important;
      max-height: 500px;
      overflow: auto;
      padding: 0 10px;

      &:empty:not(:focus)::before {
        content: attr(data-placeholder);
        box-shadow: none;
        border: none;
      }
      &:before {
        color: #bfbfbf;
        pointer-events: none;
      }

      &:focus-visible {
        outline: none;
      }
    }

    .modal-utils {
      display: flex;
      margin-top: 10px;
      justify-content: flex-end;
      align-items: center;

      .emoji {
        font-size: 20px;
        position: relative;

        span {
          cursor: pointer;
          padding: 10px;
        }

        .bundle-emoji {
          emoji-picker {
            position: absolute;
            bottom: calc(100% + 10px);
            right: 0;
            z-index: 1000;
          }
        }
      }

      .upload-img {
        font-size: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 34px;
        height: 34px;
        cursor: pointer;
      }
    }
  }

  .ant-divider {
    margin: 12px 0;
  }

  .modal-footer {
    .ant-btn {
      background: #e4e6eb;
      color: #bfbfbf;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 6px;
      border: none;
      padding: 18px;
    }
  }
`;

export const AvatarCard = styled(Avatar)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: grey;
`;
