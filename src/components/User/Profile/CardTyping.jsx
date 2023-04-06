import { Input } from "antd";
import React, { useState } from "react";
import {
  ActivityButton,
  AvatarCard,
  CardTypingWrapper,
} from "./style/CardTyping.styled";
import { CardContainer } from "./style/CardContainer.styled";
import ModalPost from "./Modal/ModalPost";

const CardTyping = () => {
  const [openModalPosting, setOpenModalPosting] = useState(false);

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
          <Input
            placeholder="What's on your mind?"
            onClick={() => setOpenModalPosting(true)}
          />
        </div>

        <div className="card-activity">
          <ActivityButton>
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png"
              alt="livestream"
            />
            <span>Live video</span>
          </ActivityButton>

          <ActivityButton onClick={() => setOpenModalPosting(true)}>
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
      <ModalPost
        open={openModalPosting}
        onCancel={() => setOpenModalPosting(false)}
      />
    </CardContainer>
  );
};

export default CardTyping;
