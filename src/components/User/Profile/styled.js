import styled from "styled-components";

export const ProfileStyled = styled.div`
  .profile {
    background-color: #e9e9e9;
    margin-top: 2px;

    .profile-wrapper {
      display: flex;
      max-width: 1440px;
      margin: 0 auto;
      padding: 20px 0;

      @media screen and (max-width: 1584px) {
        padding: 20px;
      }

      @media screen and (max-width: 900px) {
        display: block;
      }

      .profile-left {
        width: 44vw;
        position: sticky;
        top: -430px;
        height: fit-content;

        @media screen and (max-width: 900px) {
          width: 100%;
          position: unset;
        }
      }

      .ant-card {
        color: #333;
        border-radius: 6px;
        margin-bottom: 16px;

        .ant-card-head {
          color: #333;
          border-bottom: none;
          padding: 0;

          .ant-card-head-title {
            font-size: 20px;
            font-weight: 700;
            padding: 10px 20px;

            .header-more {
              display: flex;
              justify-content: space-between;
              align-items: center;

              .view-more {
                font-size: 14px;
              }
            }
          }
        }

        .ant-card-body {
          padding: 0 20px 20px 20px;

          .card-content {
            padding-bottom: 8px;

            .card-content__icon {
              display: inline-flex;
              justify-content: center;
              align-items: center;
              width: 24px;
              height: 24px;
              font-size: 20px;
              color: #8c939d;
            }

            .card-content__desc {
              font-size: 16px;
              color: #333;
              margin-left: 16px;
              font-weight: 600;
            }

            .ant-btn {
              font-size: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 0 20px;
              border: none;

              &:hover {
                background: #d5d4d4 !important;
              }

              span {
                margin-left: 6px;
                font-weight: 500;
              }
            }
          }

          .card-img {
            display: grid;
            gap: 10px;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: 1fr;
            .ant-image {
              height: 100%;

              img {
                height: 100%;
                border-radius: 6px;
                object-fit: cover;
                object-position: center;
              }
            }

            .photo-friend {
              height: 90%;
            }
          }
        }
      }

      .profile-right {
        width: 56vw;
        margin-left: 20px;

        @media screen and (max-width: 900px) {
          width: 100%;
          margin: 0;
        }

        .wrapper {
          width: 100%;
          height: 100%;
          border-radius: 6px;
        }
      }
    }
  }
`;
