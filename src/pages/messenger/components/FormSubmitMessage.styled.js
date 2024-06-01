import styled from "styled-components";

export const FormSubmitMessageStyled = styled.div`
    background: #fff;
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 10px 0;

    .chatBoxBottom {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 20px 0 10px;

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
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 100%;
        outline: none;
        cursor: pointer;
        background-color: #1877f2;
        color: #fff;

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
`;