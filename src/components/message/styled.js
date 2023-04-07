import styled from "styled-components";

export const MessageWrapper = styled.div`
  .message {
    display: flex;
    margin: 20px;
    flex-direction: column;

    .messageTop {
      display: inline-flex;

      .messageImg {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        object-fit: cover;
        margin-right: 10px;
        border: 1px solid #333;
      }

      .messageText {
        padding: 10px;
        border-radius: 20px;
        background-color: #ffffffe6;
        color: black;
        max-width: 100%;
        margin: 0;
        word-wrap: break-word;
        overflow: hidden;

        .messageText_area {
          width: 100%;
          overflow: hidden;
        }
      }
    }

    .messageBottom {
      margin: 0;
      font-size: 12px;
      margin-top: 10px;
      color: #918fa9;
    }
  }

  .own {
    align-items: flex-end;

    .messageTop {
      flex-direction: row-reverse;
      width: 80%;

      .messageImg {
        margin: 0 0 0 10px;
      }

      .messageText {
        display: block;
        background-color: #1877f2;
        color: #fff;
        word-wrap: break-word;
        overflow: hidden;

        .messageText_area {
          width: 100%;
          overflow: hidden;
        }
      }
    }
  }
`;
