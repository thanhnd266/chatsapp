import { Avatar, Form } from "antd";
import styled from "styled-components";

export const ModalPostContent = styled(Form)`
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
    .ant-form-item {
      margin: 0;
      width: 100%;

      .ant-form-item-control {
        max-width: 100%;
        margin-left: 0;
      }
    }
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

export const ImagePreview = styled.div`
  border: 1px solid #e4e6eb;
  padding: 10px 6px;
  border-radius: 6px;
  margin-top: 10px;
`;

export const ImagePreviewWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.numberItemPerRow}, 1fr)`};
  gap: 4px;

  .image-preview__item {
    width: 100%;
    max-height: ${(props) =>
      props.numberItemPerRow === 1 ? "400px" : "200px"};
    height: ${(props) => (props.numberItemPerRow === 1 ? "unset" : "200px")};
    img {
      height: 100%;
      width: 100%;
      object-fit: ${(props) =>
        props.numberItemPerRow === 1 ? "contain" : "cover"};
      object-position: center;
      box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
    }
  }
`;
