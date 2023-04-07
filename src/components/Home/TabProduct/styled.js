import styled from "styled-components";

export const TabProductStyled = styled.div`
  margin-top: 50px;

  .ant-tabs {
    .ant-tabs-nav {
      .ant-tabs-nav-wrap {
        .ant-tabs-nav-list {
          width: 100%;

          @media screen and (max-width: 600px) {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
          }

          .ant-tabs-tab {
            padding: 10px 20px;
            border-radius: 6px;
            display: flex;
            justify-content: center;
            background-color: #d3d3d3;

            .ant-tabs-tab-btn {
              font-size: 14px;
              font-weight: 600;
            }
          }

          .ant-tabs-tab-active {
            background-image: linear-gradient(to right, #09309b, #00dfb7);

            .ant-tabs-tab-btn {
              color: #fff !important;
            }
          }
        }
      }
    }
  }
`;
