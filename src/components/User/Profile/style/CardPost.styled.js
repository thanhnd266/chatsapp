import { Avatar, Dropdown } from "antd";
import styled from "styled-components";

export const CardPostHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  .header-left {
    display: flex;
    align-items: center;
  }

  .header-info {
    margin-left: 10px;

    h6 {
      margin: 0;
    }

    span {
      font-size: 12px;
      color: #65676b;
    }
  }
`;

export const DropdownProperties = styled(Dropdown)`
  .ant-space-item {
      color: #939292;
      font-size: 18px;
      cursor: pointer;
    }
`

export const AvatarCard = styled(Avatar)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: grey;
`;

export const CardPostBody = styled.div`
  margin: 10px 0;

  .text-content {
    margin: 0;
  }

  .ant-image {
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 14px 0;

    img {
      width: 100%;
      max-height: 570px;
      object-fit: cover;
      object-position: center;
      border-radius: 4px;
    }
  }
`;

export const CardPostFooter = styled.div`
  .statistic-like {
    display: flex;
    align-items: center;

    span {
      margin-left: 4px;
      color: #65676b;
    }
  }

  .status--btn__active {
    color: #046fe4;
  }

  .status-btn {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 4px;
    border-top: 1px solid rgb(228, 230, 235);
    border-bottom: 1px solid rgb(228, 230, 235);
    margin-top: 10px;
  }

  .comment-section {
    margin-top: 10px;

    .card-avatar {
      display: flex;
      justify-content: space-between;
      display: flex;
      width: 100%;

      .ant-input {
        background: #f0f2f5;
        border: none;
        border-radius: 20px;
        font-size: 16px;
        padding: 8px 20px;
      }

      .sending-cmt {
        width: 94%;
        position: relative;

        .comment-field {
          .comment-box {
            width: 100%;
            display: flex;
            position: relative;

            .comment-input {
              background: #f0f2f5;
              border: none;
              border-radius: 20px;
              font-size: 16px;
              padding: 8px 86px 8px 20px;
              width: 100%;
              overflow: auto;
              margin-left: 6px;

              &:empty:not(:focus)::before {
                content: attr(data-placeholder);
                margin-left: 4px;
              }

              &:before {
                color: #bfbfbf;
              }
            }

            .comment-utils {
              display: flex;
              align-items: center;
              justify-content: center;
              position: absolute;
              right: 18px;
              top: 0;
              bottom: 0;

              .emoji {
                font-size: 20px;

                span {
                  cursor: pointer;
                  padding: 10px;
                }

                .bundle-emoji {
                  position: absolute;
                  bottom: 32px;
                  right: 8px;
                }
              }

              .upload-img {
                font-size: 20px;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 34px;
                height: 34px;
                cursor: pointer;
              }

              .btn-sending {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 20px;
                cursor: pointer;
                padding: 0 10px;
              }
            }
          }
        }
      }
    }
  }
`;

export const ButtonStatus = styled.div`
  padding: 6px 20px;
  margin: 4px 0;
  text-align: center;
  font-size: 16px;
  border-radius: 6px;
  cursor: pointer;
  color: #65676b;

  &:hover {
    background: #f1f1f1;
  }

  span {
    margin-left: 6px;
    font-weight: 600;
  }

  @media screen and (max-width: 992px) {
    padding: 6px 10px;
  }

  @media screen and (max-width: 575px) {
    padding: 6px 0;
    span {
      font-size: 13px;
    }
  }
`;
