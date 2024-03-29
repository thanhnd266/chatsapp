import styled from "styled-components";

export const ChatBoxStyled = styled.div`
  height: 100%;

  .chatBoxWrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: relative;
    height: 100%;

    .chatBoxNavbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      background-color: #001529;
      padding: 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      .receiver-info,
      .receiver-info__mobile {
        padding-left: 4px;
        display: flex;
        align-items: center;
        color: #fff;

        .receiver-info__img {
          position: relative;
          cursor: pointer;

          img {
            width: 42px;
            height: 42px;
            border-radius: 50%;
          }

          .receiver-info-user__status {
            position: absolute;
            bottom: -5px;
            right: -6px;

            i {
              border-radius: 100%;
              border: 2px solid #333;
              font-size: 10px;
              margin-right: 2px;
              color: rgb(118, 235, 8);
            }
          }

          .receiver-info-user__status-offline {
            position: absolute;
            bottom: -5px;
            right: -6px;

            i {
              border-radius: 100%;
              border: 2px solid #333;
              font-size: 10px;
              margin-right: 2px;
              color: #c3c3c3;
            }
          }
        }

        .receiver-info-name {
          font-size: 16px;
          font-weight: 600;
          margin-left: 16px;
          cursor: pointer;
        }

        .receiver-info-status {
          color: #fff;
          margin-left: 16px;
          font-size: 12px;
        }
      }

      .receiver-info {
        display: flex;

        @media screen and (max-width: 1024px) {
          display: none;
        }
      }

      .receiver-info__mobile {
        display: none;
        padding: 0;

        .btn-back-conv {
          color: #fff;
          font-size: 18px;
          padding: 4px 10px;
          margin-right: 8px;
          border-radius: 100%;
          width: 32px;
          height: 32px;
          display: none;
          align-items: center;

          &:hover {
            background-color: #fd7f65;
          }

          @media screen and (max-width: 575px) {
            display: flex;
          }
        }

        @media screen and (max-width: 1024px) {
          display: flex;
        }
      }

      .chat-feature {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: #fff;
        font-size: 20px;

        .chat-feature-call,
        .chat-feature-video,
        .chat-feature-info {
          padding: 4px;
          cursor: pointer;
          border-radius: 100%;
          width: 34px;
          height: 34px;
          display: flex;
          align-items: center;
          justify-content: center;

          &:hover {
            background-color: #fe7558;
          }
        }

        .chat-feature-video {
          margin: 0 10px;
        }

        .chat-feature-info {
          @media screen and (max-width: 1024px) {
            display: none;
          }
        }
      }
    }

    .chatBoxTop {
      height: 100%;
      overflow-y: scroll;

      .chatbox-messages {
        display: block;
      }
    }

    .chatBoxBottom {
      margin-top: 5px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px 10px 10px;

      .ultilities,
      .upload-img {
        padding: 4px;
        border-radius: 100%;
        font-size: 20px;
        width: 34px;
        height: 34px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;

        &:hover {
          background-color: #fe7558;
        }
      }

      .upload-img {
        margin: 0 10px;
      }

      .chatBoxInput {
        width: 90%;
        display: flex;
        position: relative;

        .chatMessageInput {
          background-color: #fff;
          width: 100%;
          min-height: 50px;
          border-radius: 20px;
          margin-right: 10px;
          padding: 12px 55px 10px 18px;
          border: solid 1px;
          overflow: auto;

          &:empty:not(:focus)::before {
            content: attr(data-placeholder);
            margin-left: 6px;
          }
        }

        .emoji {
          position: absolute;
          right: 30px;
          top: 8px;
          font-size: 20px;

          span {
            cursor: pointer;
            padding: 10px;
          }

          .bundle-emoji {
            position: absolute;
            bottom: 32px;
            right: 8px;
          }
        }
      }

      .chatSubmitButton {
        width: 56px;
        height: 56px;
        border: none;
        border-radius: 100%;
        outline: none;
        cursor: pointer;
        background-color: #fe7558;
        color: #fff;

        &:hover {
          background-color: #fd7f65;
        }

        &:focus {
          box-shadow: none;
        }

        span {
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 20px;
          margin-left: 2px;
        }
      }
    }

    .chatbox-drawer {
      position: absolute;
      inset: 0 0 0 0;
      overflow: hidden;
      text-align: center;
      height: 100%;
      width: 100%;
      display: none;

      @media screen and (max-width: 1024px) {
        display: block;
      }

      .chatbox-drawer__container {
        .ant-drawer {
          .ant-drawer-mask {
            border-radius: 10px;
          }
          .ant-drawer-content-wrapper {
            height: 100% !important;

            @media screen and (max-width: 575px) {
              width: 100% !important;
            }

            .ant-drawer-content {
              border-radius: 10px;
              padding: 10px 20px;

              // .ant-drawer-wrapper-body {
              //   .ant-drawer-body {
              //   }
              // }
            }
          }
        }
      }
    }
  }

  .chatBox-createConv_wrapper {
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgb(190, 190, 190);
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
