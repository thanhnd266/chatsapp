import styled from "styled-components";

export const ChatBoxAdditionalStyled = styled.div`
  color: #001529;
  min-width: 240px;

  @media screen and (max-width: 1300px) {
    max-width: 240px;
  }

  @media screen and (max-width: 992px) {
    min-width: 200px;
  }

  .receiver-mainInfo {
    text-align: center;
    margin: 20px 0 0 0;

    .receiver-img {
      img {
        width: 160px;
        height: 160px;
        border-radius: 100%;
        border: 5px solid #001529;

        @media screen and (max-width: 992px) {
          width: 100px !important;
          height: auto;
          border: 2px solid #001529;
        }
      }
    }

    .receiver-username {
      h2 {
        color: #001529;
        margin: 10px 0 0 0;
        font-size: 26px;
        font-weight: 700;
      }
    }

    .receiver-status__online {
      span {
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;

        i {
          font-size: 10px;
          margin-right: 2px;
          color: rgb(118, 235, 8);
        }
      }
    }

    .receiver-status__offline {
      span {
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;

        i {
          font-size: 10px;
          margin-right: 2px;
          color: #c3c3c3;
        }
      }
    }
  }

  .receiver-otherInfo {
    font-size: 16px;
    margin-top: 30px;

    @media screen and (max-width: 992px) {
      display: flex;
      justify-content: center;
      align-items: center;

      .receiver-email,
      .receiver-phone,
      .receiver-profile {
        padding: 4px 10px !important;

        .receiver-info-icon {
          font-size: 20px !important;
        }

        .receiver-info-text {
          display: none !important;
        }
      }
    }

    .receiver-email,
    .receiver-phone,
    .receiver-profile {
      display: flex;
      align-items: center;
      padding: 10px 22px 10px 22px;
      cursor: pointer;
      margin: 0 10px;
      border-radius: 4px;

      &:hover {
        background-color: #001529;
        color: #fff;
      }

      .receiver-info-icon {
        font-size: 18px;
      }

      .receiver-info-text {
        margin-left: 12px;
        width: 164px;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }

  .system-pane {
    margin-top: 20px;

    .accordion-wrapper {
      margin: 0 16px;

      .accordion-item {
        .accordion-custom-btn {
          border-radius: 4px;
        }

        // .accordion-button:not(.collapsed) {
        //     background-color: transparent;
        //     color: #fff;
        //     font-weight: 600;
        //     background-color: #001529;
        // }

        // .accordion-button:focus {
        //     z-index: 3;
        //     border-color: transparent;
        //     outline: 0;
        //     box-shadow: none;
        // }

        .accordion-body {
          margin: 0 10px;
          font-size: 15px;
          color: #001529;
          cursor: pointer;
          padding: 10px 0;

          .chat-feature {
            padding: 4px 0;

            .chat-feature__icon {
              width: 32px;
              height: 32px;
              border-radius: 100%;
            }

            &:hover {
              background-color: #001529;
              color: #fff;
              border-radius: 10px;

              .chat-feature__icon {
                background: #3a3b3c1f;
              }
            }
          }
        }
      }
    }
  }
`;
