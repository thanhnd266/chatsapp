import styled from "styled-components";

export const MessengerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  height: 86vh;
  margin: 30px 50px;

  @media screen and (max-width: 1280px) {
    margin: 30px 20px;
  }

  @media screen and (max-width: 575px) {
    position: relative;
  }

  .conversations-container {
    overflow-y: scroll;
    overflow-x: hidden;
    height: 80vh;
    border-radius: 10px;
    width: 340px;
    height: 100%;

    @media screen and (max-width: 1280px) {
      width: 280px;
    }

    @media screen and (max-width: 992px) {
      width: unset;
    }

    @media screen and (max-width: 575px) {
      width: 100%;
      overflow-y: hidden;
    }
  }

  .messages-container__drawer {
    display: none;

    @media screen and (max-width: 575px) {
      display: block;

      .ant-drawer {
        .ant-drawer-mask {
          border-radius: 10px;
        }

        .ant-drawer-content-wrapper {
          width: 100% !important;
          border-radius: 10px;
          overflow: hidden;

          .ant-drawer-wrapper-body {
            border-radius: 10px;

            .ant-drawer-body {
              padding: 0;

              .chatBox {
                .chatBoxTop {
                  background: #c9d3dd;
                }

                .chatBoxBottom {
                  background: #c9d3dd;
                  margin: 0;
                  padding: 6px 20px 6px 10px;
                }
              }
            }
          }
        }
      }
    }
  }

  .messages-container {
    height: 80vh;
    flex-grow: 1;
    background-color: #c9d3dd;
    border-radius: 10px;
    width: calc(100vw / 3);
    height: 100%;

    @media screen and (max-width: 575px) {
      display: none;
    }
  }

  .additionalInfo-container {
    display: none;
    margin-left: 16px;
    height: 80vh;
    border-radius: 10px;
    background-color: #fff;
    height: 100%;

    @media screen and (min-width: 1025px) {
      display: block;
    }
  }
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #d6d2d2;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
