import { Comment } from "antd";
import styled from "styled-components";

export const CommentContainer = styled(Comment)`
  .ant-comment-inner {
    padding-top: 2px;
  }

  .ant-comment-avatar {
    .ant-avatar {
      width: 40px !important;
      height: 40px;
      border: 1px solid #333;

      img {
        width: 100%;
        height: 100% !important;
        height: auto;
        object-position: center;
      }
    }
  }

  .ant-comment-content {
    .ant-comment-content-author {
      .ant-comment-content-author-name {
        font-weight: 700;
      }
    }

    .ant-comment-content-detail {
      background-color: #f5f5f5;
      border-radius: 20px;
      display: inline-block;

      p {
        padding: 10px;
      }
    }

    .ant-comment-actions {
      margin-top: 6px;
      display: flex;
      align-items: center;

      li {
        span {
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 14px;
        }
      }
    }
  }
`;
