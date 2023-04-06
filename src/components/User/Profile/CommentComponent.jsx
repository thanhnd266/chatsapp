import {
  DislikeFilled,
  DislikeOutlined,
  LikeFilled,
  LikeOutlined,
} from "@ant-design/icons";
import { Avatar, Tooltip } from "antd";
import moment from "moment";
import { useState } from "react";
import { CommentContainer } from "./style/CommentContainer.styled";

const CommentComponent = ({ username, body, avatar }) => {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [action, setAction] = useState();

  const handleSelectStatus = (action) => {
    if (action === "liked") {
      if (likes !== 0) {
        setLikes(0);
        setAction(null);
        return;
      } else {
        setLikes(1);
        setAction(action);
        setDislikes(0);
        return;
      }
    }

    if (action === "disliked") {
      if (dislikes !== 0) {
        setDislikes(0);
        setAction(null);
        return;
      } else {
        setLikes(0);
        setDislikes(1);
        setAction(action);
        return;
      }
    }
  };

  const actions = [
    <span key="comment-basic-like">
      <Tooltip title="Like">
        <span
          style={{ padding: "0 2px" }}
          onClick={() => handleSelectStatus("liked")}
        >
          {action === "liked" ? <LikeFilled /> : <LikeOutlined />}
        </span>
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{likes}</span>
    </span>,
    <span key=' key="comment-basic-dislike"'>
      <Tooltip title="Dislike">
        <span
          style={{ padding: "0 2px" }}
          onClick={() => handleSelectStatus("disliked")}
        >
          {action === "disliked" ? <DislikeFilled /> : <DislikeOutlined />}
        </span>
      </Tooltip>
      <span style={{ paddingLeft: 8, cursor: "auto" }}>{dislikes}</span>
    </span>,
    <span key="comment-basic-reply-to">Reply to</span>,
  ];

  return (
    <CommentContainer
      actions={actions}
      author={<span>{username}</span>}
      avatar={<Avatar src={avatar} alt={username} />}
      content={<p>{body}</p>}
      datetime={
        <Tooltip title={moment().format("YYYY-MM-DD HH:mm:ss")}>
          <span>{moment().fromNow()}</span>
        </Tooltip>
      }
    />
  );
};

export default CommentComponent;
