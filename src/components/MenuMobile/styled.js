import { Drawer } from "antd";
import styled from "styled-components";

export const MenuMobileWrapper = styled(Drawer)`
  .ant-drawer-content-wrapper {
    .ant-drawer-header {
      .ant-drawer-header-title {
        flex-direction: row-reverse !important;

        .ant-drawer-close {
          margin: 0;
          padding: 0;
        }
      }
    }

    .ant-drawer-body {
      .menu-list {
        text-align: right;

        .menu-list__item {
          list-style-type: none;
          margin-top: 20px;

          a {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            font-size: 18px;
            font-weight: 700;
            color: #333;

            span {
              margin-left: 10px;
              font-size: 20px;
            }

            &:hover {
              color: #6574bb;
            }
          }

          .active {
            color: #6574bb;
          }
        }
      }
    }
  }
`;
