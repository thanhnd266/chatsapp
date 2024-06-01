import { SendOutlined } from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
import { FormSubmitMessageStyled } from "./FormSubmitMessage.styled";
import { message } from "antd";
import axiosClient from "@/config/axios";

const FormSubmitMessage = ({ creds, chatId }) => {
  const inputEl = useRef();
  const emojiEl = useRef();
  const iconEl = useRef();
  const bundleEmoji = useRef();
  const [openEmoji, setOpenEmoji] = useState(false);
  const currentUser = JSON.parse(localStorage.getItem("userData"));

  function decodeHtmlEntities(htmlContent) {
    const tempElement = document.createElement('textarea');
    tempElement.innerHTML = htmlContent;
    return tempElement.value;
}

  useEffect(() => {
    window.onclick = (e) => {
      if (
        e.target !== emojiEl.current &&
        e.target !== iconEl.current &&
        e.target !== bundleEmoji.current
      ) {
        setOpenEmoji(false);
      }
    };
  }, [openEmoji]);

  useEffect(() => {
    if (openEmoji) {
      bundleEmoji.current.addEventListener("emoji-click", (event) => {
        inputEl.current.innerHTML += event.detail.unicode;
      });
    }
  }, [openEmoji, inputEl.innerHTML]);

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    try {
        const payload = {
          text: inputEl.current.innerHTML.replace(/&nbsp;/g, " ").trim(),
          owner_name: currentUser.username, 
          user_secret: '123456', 
          chatId: chatId, 
          attachment_urls: [],
        };

        const res = await axiosClient.post("/conversation/create-message", payload)

        if(res.status_code === 200) {
            inputEl.current.innerHTML = "";
        } else {
            message.error("Gửi tin nhắn thất bại!");
        }
    } catch(err) {
        console.log(err);
        message.error("Gửi tin nhắn thất bại!");
    }

  };

  const adjustHeight = (e) => {
    const el = e.target;
    if (el.scrollHeight >= 110) {
      el.style.height = "110px";
    } else {
      el.style.height = "unset";
    }
  };

  const handleOpenEmoji = () => {
    if (!openEmoji) {
      setOpenEmoji(true);
    } else {
      setOpenEmoji(false);
    }
  };

  const handlePaste = (event) => {
    // Prevent the default paste behavior
    event.preventDefault();

    // Get the text from the clipboard
    const text = (event.clipboardData || window.clipboardData).getData('text');

    // Insert the plain text at the cursor position
    document.execCommand('insertText', false, text);
  };

  return (
    <FormSubmitMessageStyled>
      <div className="chatBoxBottom">
        <div className="ultilities">
          <span>
            <i className="fa-solid fa-circle-plus"></i>
          </span>
        </div>
        <div className="upload-img">
          <span>
            <i className="fa-solid fa-image"></i>
          </span>
        </div>
        <div className="chatBoxInput">
          <div
            onKeyUp={adjustHeight}
            onKeyDown={(e) => (e.keyCode === 13 ? handleSubmitMessage(e) : "")}
            onPaste={(e) => handlePaste(e)}
            className="chatMessageInput"
            contentEditable="true"
            suppressContentEditableWarning={true}
            data-placeholder="Aa"
            ref={inputEl}
          ></div>
          <div className="emoji">
            {openEmoji ? (
              <span onClick={handleOpenEmoji} ref={emojiEl}>
                <i ref={iconEl} className="fa-solid fa-face-smile"></i>
              </span>
            ) : (
              <span onClick={handleOpenEmoji} ref={emojiEl}>
                <i ref={iconEl} className="fa-regular fa-face-smile"></i>
              </span>
            )}

            {openEmoji && (
              <div className="bundle-emoji">
                <emoji-picker ref={bundleEmoji}></emoji-picker>
              </div>
            )}
          </div>
        </div>
        <button
          className="chatSubmitButton"
          onClick={(e) => handleSubmitMessage(e)}
        >
          <span>
            <SendOutlined />
          </span>
        </button>
      </div>
    </FormSubmitMessageStyled>
  );
};

export default FormSubmitMessage;
