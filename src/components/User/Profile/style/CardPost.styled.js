import { Avatar } from "antd";
import styled from "styled-components";

export const CardPostHeader = styled.div`
  display: flex;
  align-items: center;

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

export const AvatarCard = styled(Avatar)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: grey;
`;

export const CardPostBody = styled.div`
  margin: 10px 0;

  .ant-image {
    width: 100%;
    display: flex;
    justify-content: center;

    img {
      width: 400px;
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

        .btn-sending {
          position: absolute;
          right: 6px;
          top: 0;
          bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          cursor: pointer;
          padding: 10px 20px;
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
`;
