import styled from "styled-components";

export const ChatBoxAdditionalMobileStyled = styled.div`
  @media screen and (max-width: 575px) {
    padding: 20px 40px;
  }

  @media screen and (max-width: 480px) {
    padding: 20px;
  }

  .user-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
      border-radius: 100%;
      border: 1px solid;
      width: 160px;
      height: 160px;
      object-fit: cover;
      box-shadow: 1px 2px 8px #999;
    }

    .user-info__btn {
      display: flex;
      flex-direction: column;
      width: 64px;
      margin: 0 18px;
      cursor: pointer;

      .user-info__name {
        margin-top: 20px;
      }

      .user-info__icon {
        font-size: 22px;
      }

      .user-info__text {
        font-size: 12px;
      }
    }
  }

  .system-pane {
    margin-top: 20px;

    .accordion-wrapper {
      .accordion-item {
        border-radius: 4px !important;

        .accordion-custom-btn {
          border-radius: 4px;
        }

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
