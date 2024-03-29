import styled from "styled-components";
import backgroundImg from "../../../assets/images/gaming-gear-background.png";

export const TabContentStyled = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  border-radius: 4px;
  position: relative;
  .tab-content__mark {
    position: absolute;
    inset: 0 0 0 0;
    background-color: #1e1d1d54;
    z-index: 0;
  }

  .tab-content__wrapper {
    padding: 20px 40px 30px 40px;

    @media screen and (max-width: 575px) {
      padding: 20px;
    }

    .btn-view-all {
      .btn-view-all__link {
        display: block;
        padding: 10px 40px;
        background: #001529;
        border-radius: 6px;
        color: #fff;
        z-index: 1;
      }
    }

    .swiper {
      .swiper-wrapper {
        padding: 20px 0;
      }
      .swiper-pagination {
        bottom: 0;
        .swiper-pagination-bullet {
          background-color: #fff;
        }
      }
    }

    .ant-card {
      border-radius: 4px;
      overflow: hidden;
      width: unset !important;
      height: 383px !important;

      .ant-card-cover {
        .ant-image {
          width: 100% !important;
          display: flex;
          justify-content: center;
          align-items: center;

          img {
            object-fit: cover;
            object-position: center;
            width: 220px;
            height: 220px;
            transition: transform 0.5s;

            &:hover {
              transform: translateZ(0) scale(1.1);
            }
          }
        }
      }

      .ant-card-body {
        padding: 10px 24px 24px 24px;

        .card-body__wrapper {
          position: relative;

          .card-title {
            line-height: 1.6rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            max-height: 3.2rem;

            h4 {
              font-size: 16px;
              font-weight: 700;
            }
          }
          .card-description {
            line-height: 1.6rem;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .card-sale {
            h3 {
              margin-top: 6px;
              font-size: 16px;
              color: #4e4ecd;
            }
          }
          .card-price {
            h3 {
              margin: 0;
              font-size: 14px;
              text-decoration: line-through;
            }
          }
          .card-save-money {
            position: absolute;
            top: -52px;
            right: -16px;
            background-image: linear-gradient(140deg, #aa20ff, #413eff);
            border-radius: 10px;
            text-align: center;
            padding: 2px 10px;

            h6 {
              font-size: 10px;
              font-weight: 700;
              color: #ffd591;
            }
            h4 {
              font-size: 12px;
              font-weight: 700;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
`;
