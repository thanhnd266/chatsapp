import styled from "styled-components";

export const MainSliderStyled = styled.div`
  .main-slider__wrapper {
    .home-slider {
      .swiper-wrapper {
        .swiper-slide {
          .slider-slide__item {
            img {
              width: 100%;
              object-fit: cover;
              object-position: center center;
              height: 50vh;
              border-radius: 4px;

              @media screen and (max-width: 992px) {
                height: 30vh;
              }

              @media screen and (max-width: 575px) {
                height: 25vh;
              }
            }
          }
        }
      }

      .swiper-button-prev,
      .swiper-button-next {
        padding: 20px;
        color: #fff;

        &:after {
          font-size: 20px;
        }
      }

      .swiper-pagination {
        .swiper-pagination-bullet {
          background-color: #fff;
        }
      }
    }
  }
`;
