import { Input } from "antd";
import React from "react";
import {
  ActivityButton,
  AvatarCard,
  CardTypingWrapper,
} from "./style/CardTyping.styled";
import { CardContainer } from "./style/CardContainer.styled";

const CardTyping = () => {
  return (
    <CardContainer
      bordered={false}
      style={{
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <CardTypingWrapper>
        <div className="card-avatar">
          <AvatarCard src="https://cdn-icons-png.flaticon.com/512/5556/5556512.png" />
          <Input placeholder="What's on your mind?" />
        </div>

        <div className="card-activity">
          <ActivityButton>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
              alt="livestream"
            />
            <span>Live video</span>
          </ActivityButton>

          <ActivityButton>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png"
              alt="Media"
            />
            <span>Photo/video</span>
          </ActivityButton>

          <ActivityButton>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/pkbalDbTOVI.png"
              alt="event"
            />
            <span>Life event</span>
          </ActivityButton>
        </div>
      </CardTypingWrapper>
    </CardContainer>
  );
};

export default CardTyping;
