import styled from "styled-components";

export const FamousBrandStyled = styled.div`
  background-color: #fff;
  margin: 40px 0;

  .famous-brand__wrapper {
    padding: 20px;

    .famous-brand__title {
      h2 {
        font-size: 20px;
        font-weight: 700;
        margin-bottom: 20px;
      }
    }

    .swiper {
      .swiper-wrapper {
        .swiper-slide {
          .ant-card {
            border: none;

            &:hover {
              box-shadow: unset;
            }

            .ant-card-cover {
              .ant-image {
                .ant-image-img {
                  border-radius: 6px;
                  height: 152px !important;
                  object-fit: cover;
                  object-position: center;
                }
              }
            }

            .ant-card-body {
              padding: 4px;

              .card-title {
                text-align: center;
                margin-top: 10px;

                h4 {
                  font-size: 16px;
                  font-weight: 600;
                }
              }
            }
          }
        }
      }
    }
  }
`;
