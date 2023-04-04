import { Avatar } from "antd";
import styled from "styled-components";

export const CardTypingWrapper = styled.div`
  .card-avatar {
    display: flex;
    justify-content: space-between;
  }

  .ant-input {
    background: #f0f2f5;
    border: none;
    border-radius: 20px;
    font-size: 16px;
    padding: 8px 20px;
    cursor: pointer;
    width: 94%;
  }

  .card-activity {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 12px;
    padding: 8px 10px 0 20px;
    border-top: 1px solid #e4e6eb;
  }
`;

export const ActivityButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  border-radius: 6px;

  &:hover {
    background: #f0f2f5;
    cursor: pointer;
  }

  span {
    margin-left: 10px;
    font-size: 16px;
    font-weight: 600;
    color: #65676b;
  }
`;

export const AvatarCard = styled(Avatar)`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background: grey;
`;
