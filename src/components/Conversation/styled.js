import styled from "styled-components";

export const ConversationStyled = styled.div`
  .no-conversation {
    text-align: center;
    margin: 40px 8px 0 0;

    h2 {
      font-size: 22px;
      font-weight: 700;
      color: grey;
    }

    @media screen and (max-width: 992px) {
      display: none;
    }
  }
  .conversation {
    background-color: #fff;
    margin: 0 8px 8px 0;
    border-radius: 4px;
    position: relative;

    @media screen and (max-width: 992px) {
      margin: 0;

      .item-image {
        img {
          width: 42px !important;
          height: auto !important;
        }
      }
    }

    @media screen and (max-width: 575px) {
      height: 100px !important;
      margin-top: 4px;
    }

    .item-unread__message {
      position: absolute;
      top: 8px;
      right: 6px;
      color: #fff;
      border-radius: 100%;
      width: 10px;
      height: 10px;
    }

    .conversation-item__active {
      background-color: aliceblue;
    }

    .conversation-item {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: 20px 0;
      box-shadow: 2px 2px 4px #888888;
      cursor: pointer;
      border-radius: 6px;

      @media screen and (max-width: 575px) {
        height: 100%;
      }

      .item-image {
        margin: 0 20px;
        position: relative;

        img {
          border-radius: 50%;
          width: 60px;
          height: 60px;
        }

        .item-image__status {
          position: absolute;
          bottom: -4px;
          right: -4px;

          i {
            border-radius: 100%;
            border: 3px solid #fff;
            font-size: 12px;
            margin-right: 2px;
            color: rgb(118, 235, 8);
          }
        }
      }

      .item-additionalInfo {
        flex: 1;

        @media screen and (max-width: 992px) {
          display: none;
        }

        @media screen and (max-width: 575px) {
          display: block;
        }

        .item-username {
          h3 {
            margin: 0 0 4px 0;
            font-size: 16px;
            color: #666;
          }
        }

        .item-news {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-right: 20px;

          .latest-massage {
            flex: 1;
            width: 160px;
            display: inline-block;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
            margin: 2px 0;
          }
        }

        .time-message {
          color: #918f8f;
          font-size: 12px;
        }
        .item-time-active {
          margin-top: 6px;
          color: #918f8f;
          font-size: 12px;
        }
      }

      .conversation-active {
        position: absolute;
        left: 0;
        width: 6px;
        height: 100%;
        background-color: #fe7558;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;

        @media screen and (max-width: 575px) {
          display: none;
        }
      }
    }
  }
`;
