import { useState, useRef, useEffect } from 'react';
import { RollbackOutlined, SendOutlined } from '@ant-design/icons';
import axios from 'axios';

//components
import Message from '../message/Message';
import axiosClient from '../../config/axios';

const ChatBox = ({ loading, currentUser, currentChat, messages, setMessages, socket }) => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const emojiEl = useRef();
  const iconEl = useRef();
  const bundleEmoji = useRef();
  const inputEl = useRef();
  const scrollRef = useRef();
  const [receiverUser, setReceiverUser] = useState();

  useEffect(() => {
    if(currentChat) {
      const receiverUserId = currentChat.members.find((memberId) => memberId !== currentUser._id);
      
      const getUser = async () => {
        try {
          const res = await axios.get(`/user/${receiverUserId}`);
          setReceiverUser(res.data);
        } catch(err) {
          console.log(err);
        }
      }

      getUser();
    }
  }, [currentChat, currentUser]);

    useEffect(() => {
      window.onclick = (e) => {
        if(e.target !== emojiEl.current && e.target !== iconEl.current && e.target !== bundleEmoji.current) {
          setOpenEmoji(false);
        }
      }
    }, [openEmoji]);
    
    useEffect(() => {
      if(openEmoji) {
        bundleEmoji.current.addEventListener('emoji-click', event => {
          inputEl.current.innerHTML += event.detail.unicode;
        });
      }
    }, [openEmoji, inputEl.innerHTML])
  
    useEffect(() => {
      scrollRef.current?.scrollIntoView({behavior: "smooth"});
    }, [])
    
    
    //Handler function
    const adjustHeight = (e) => {
      const el = e.target;
      if(el.scrollHeight >= 110) {
        el.style.height = '110px';
      } else {
        el.style.height = 'unset';
      }
    }
  
    const handleOpenEmoji = () => {
      if(!openEmoji) {
        setOpenEmoji(true);
      } else {
        setOpenEmoji(false);
      }
    }

    const handleSubmitMessage = async (e) => {
      e.preventDefault();

      try {
        const payload = {
          conversationId: currentChat._id,
          senderId: currentUser._id,
          text: inputEl.current.innerHTML,
        };

        const receiverId = currentChat.members.find(member => member !== currentUser._id);

        socket.current.emit("sendMessage", {
          senderId: currentUser._id,
          receiverId,
          text: inputEl.current.innerHTML,
        })

        const res = await axiosClient.post('/message/add', {
          ...payload,
        });

        setMessages(res.data);
      } catch(err) {
        console.log(err);
      }
    }

    return (
        <div className="chatBox">
          { loading && <div className="loader">
              <RollbackOutlined />
            </div>}
          { !loading && 
              <div className="chatBoxWrapper">
              <div className="chatBoxNavbar">
                <div className="receiver-info">
                  <img src={receiverUser && receiverUser.profilePicture} alt="avatar" />
                  <div>
                    <div className="receiver-info-name">{ receiverUser && receiverUser.username }</div>
                    <div className="receiver-info-status">
                      Online
                    </div>
                  </div>
                </div>
                <div className="chat-feature">
                  <div className="chat-feature-call">
                    <span><i className="fa-solid fa-phone"></i></span>
                  </div>

                  <div className="chat-feature-video">
                    <span><i className="fa-solid fa-video"></i></span>
                  </div>

                  <div className="chat-feature-info">
                    <span><i className="fa-solid fa-circle-info"></i></span>
                  </div>
                </div>
              </div>
              <div ref={scrollRef} className="chatBoxTop">
                {messages && messages.map((mess, index) => {
                  return ((
                    <Message receiverUser={receiverUser} own={mess.senderId === currentUser._id} key={index} message={mess}/>
                  ))
                })}
              </div>
              <div className="chatBoxBottom">
                <div className="ultilities">
                  <span><i className="fa-solid fa-circle-plus"></i></span>
                </div>
                <div className="upload-img">
                  <span><i className="fa-solid fa-image"></i></span>
                </div>
                <div className="chatBoxInput">
                  <div
                    onKeyUp={adjustHeight}
                    className="chatMessageInput"
                    contentEditable="true"
                    suppressContentEditableWarning={true}
                    data-placeholder="Aa"
                    ref={inputEl}
                  >
                  </div>
                  <div className="emoji">
                    {
                      openEmoji 
                        ? <span onClick={handleOpenEmoji} ref={emojiEl}><i ref={iconEl} className="fa-solid fa-face-smile"></i></span> 
                        : <span onClick={handleOpenEmoji} ref={emojiEl}><i ref={iconEl} className="fa-regular fa-face-smile"></i></span>
                    }

                    { openEmoji && 
                        <div className="bundle-emoji">
                          <emoji-picker ref={bundleEmoji}></emoji-picker>
                        </div>
                    }
                  </div>
                </div>
                <button className="chatSubmitButton" onClick={(e) => handleSubmitMessage(e)}>
                  <span><SendOutlined /></span>
                </button>
              </div>
            </div>
          }
      </div>
    )
};

export default ChatBox;