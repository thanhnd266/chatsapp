import { useState, useRef, useEffect } from "react";
import { SendOutlined } from "@ant-design/icons";

//components
import Message from "../message/Message";
import axiosClient from "../../config/axios";
import Loading from "../loading/Loading";
import { Drawer } from "antd";
import ChatBoxAdditionalMobile from "../ChatBoxAdditionalMobile";
import { socket } from "../../config/socket";
import { useSelector } from "react-redux";

const ChatBox = ({
  loading,
  currentUser,
  currentChat,
  messages,
  setMessages,
  currentOnliner,
  currentReceiver,
  setIsOpenChatInfo,
  onCloseDrawerChatbox,
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openEmoji, setOpenEmoji] = useState(false);
  const emojiEl = useRef();
  const iconEl = useRef();
  const bundleEmoji = useRef();
  const inputEl = useRef();
  const scrollRef = useRef();

  let conversations = useSelector((state) => state.listConversation.data);

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

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  //Handler function
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

  const handleSubmitMessage = async (e) => {
    e.preventDefault();

    const payload = {
      conversationId: currentChat._id,
      senderId: currentUser._id,
      text: inputEl.current.innerHTML.replace(/&nbsp;/g, " ").trim(),
    };

    if (payload.text === "") return (inputEl.current.innerHTML = "");

    const receiver = currentChat.members.find(
      (member) => member._id !== currentUser._id
    );

    const isOnlineReceiver = currentOnliner.some(
      (onliner) => onliner._id === receiver._id
    );

    try {
      const res = await axiosClient.post("/message/add", {
        ...payload,
      });

      if (res.status_code === 200) {
        if (isOnlineReceiver) {
          socket.emit("sendMessage", {
            ...res.data[res.data.length - 1],
            receiverId: receiver._id,
          });
        }

        setMessages(res.data);
      }

      inputEl.current.innerHTML = "";
    } catch (err) {
      console.log(err);
    }
  };

  const showDrawer = () => {
    setOpenDrawer(true);
  };
  const onClose = () => {
    setOpenDrawer(false);
  };

  return (
    <div className="chatBox">
      {loading && conversations.length === 0 && (
        <div className="chatBox-createConv_wrapper d-flex align-items-center justify-content-center h-100">
          <div className="text-center">
            <h4 className="fw-bold">No Conversation</h4>
          </div>
        </div>
      )}
      {loading && conversations.length > 0 && <Loading />}
      {!loading && (
        <div className="chatBoxWrapper">
          <div className="chatBoxNavbar">
            {currentOnliner.some(
              (onliner) => onliner._id === currentReceiver?._id
            ) && (
              <div className="receiver-info">
                <div className="receiver-info__img">
                  <img src={currentReceiver.profilePicture} alt="avatar" />

                  <span className="receiver-info-user__status">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
                <div>
                  <div className="receiver-info-name">
                    {currentReceiver.username}
                  </div>
                  <div className="receiver-info-status">
                    <span>Online</span>
                  </div>
                </div>
              </div>
            )}

            {!currentOnliner.some(
              (onliner) => onliner._id === currentReceiver?._id
            ) && (
              <div className="receiver-info">
                <div className="receiver-info__img">
                  <img src={currentReceiver.profilePicture} alt="avatar" />

                  <span className="receiver-info-user__status-offline">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
                <div>
                  <div className="receiver-info-name">
                    {currentReceiver.username}
                  </div>
                  <div className="receiver-info-status">
                    <span>Offline</span>
                  </div>
                </div>
              </div>
            )}

            {currentOnliner.some(
              (onliner) => onliner._id === currentReceiver?._id
            ) && (
              <div className="receiver-info__mobile">
                <div
                  className="btn-back-conv"
                  onClick={() => onCloseDrawerChatbox()}
                >
                  <span>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>
                </div>
                <div className="receiver-info__img" onClick={showDrawer}>
                  <img
                    src={currentReceiver && currentReceiver.profilePicture}
                    alt="avatar"
                  />

                  <span className="receiver-info-user__status">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
                <div>
                  <div className="receiver-info-name" onClick={showDrawer}>
                    {currentReceiver && currentReceiver.username}
                  </div>
                  <div className="receiver-info-status">
                    <span>Online</span>
                  </div>
                </div>
              </div>
            )}

            {!currentOnliner.some(
              (onliner) => onliner._id === currentReceiver?._id
            ) && (
              <div className="receiver-info__mobile">
                <div
                  className="btn-back-conv"
                  onClick={() => onCloseDrawerChatbox()}
                >
                  <span>
                    <i className="fa-solid fa-chevron-left"></i>
                  </span>
                </div>
                <div className="receiver-info__img" onClick={showDrawer}>
                  <img
                    src={currentReceiver && currentReceiver.profilePicture}
                    alt="avatar"
                  />

                  <span className="receiver-info-user__status-offline">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
                <div>
                  <div className="receiver-info-name" onClick={showDrawer}>
                    {currentReceiver && currentReceiver.username}
                  </div>
                  <div className="receiver-info-status">
                    <span>Offline</span>
                  </div>
                </div>
              </div>
            )}

            <div className="chat-feature">
              <div className="chat-feature-call">
                <span>
                  <i className="fa-solid fa-phone"></i>
                </span>
              </div>

              <div className="chat-feature-video">
                <span>
                  <i className="fa-solid fa-video"></i>
                </span>
              </div>

              <div
                className="chat-feature-info"
                onClick={() => setIsOpenChatInfo((prev) => !prev)}
              >
                <span>
                  <i className="fa-solid fa-circle-info"></i>
                </span>
              </div>
            </div>
          </div>
          <div ref={scrollRef} className="chatBoxTop">
            {messages &&
              messages.map((mess, index) => {
                return (
                  <div className="chatbox-messages" key={index}>
                    <Message
                      currentUser={currentUser}
                      receiverUser={currentReceiver}
                      own={mess.senderId === currentUser._id}
                      key={index}
                      message={mess}
                    />
                  </div>
                );
              })}
          </div>
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
                onKeyDown={(e) =>
                  e.keyCode === 13 ? handleSubmitMessage(e) : ""
                }
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

          {openDrawer && (
            <div className="chatbox-drawer">
              <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                open={openDrawer}
                getContainer={false}
                push={true}
              >
                <ChatBoxAdditionalMobile
                  onClose={onClose}
                  currentReceiver={currentReceiver}
                />
              </Drawer>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatBox;
