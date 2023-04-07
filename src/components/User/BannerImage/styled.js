import styled from "styled-components";

export const BannerImageStyled = styled.div`
  background-color: #f0f2f5;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  z-index: 1;

  .banner-image_wrapper {
    position: relative;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    max-width: 1440px;
    margin: 0 auto;
    padding-bottom: 20px;

    @media screen and (max-width: 1584px) {
      padding: 0 20px 20px 20px;
    }

    .image-avatar {
      position: absolute;
      bottom: 30px;
      left: 50px;
      display: flex;
      align-items: flex-end;

      @media screen and (max-width: 575px) {
        left: 20px;
      }

      .image-avatar__img {
        .ant-avatar {
          border: 2px solid #000;
          display: block;
          padding: 10px;
          width: 160px !important;
          height: auto !important;
          background-color: grey;

          @media screen and (max-width: 575px) {
            width: 100px !important;
          }
        }
      }

      .image-avatar__info {
        margin-left: 16px;
        color: #fff;

        h4 {
          font-weight: 700;
          margin: 0;
          color: #fff;
          text-shadow: 2px 2px 2px #000;
        }
      }
    }
  }
`;
