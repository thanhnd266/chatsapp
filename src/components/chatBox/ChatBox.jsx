import { useState, useRef, useEffect } from 'react';
import { SendOutlined } from '@ant-design/icons';

//components
import Message from '../message/Message';
import axiosClient from '../../config/axios';
import Loading from '../loading/Loading';

const ChatBox = ({ loading, currentUser, currentChat, messages, setMessages, socket, currentOnliner, currentReceiver }) => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const emojiEl = useRef();
  const iconEl = useRef();
  const bundleEmoji = useRef();
  const inputEl = useRef();
  const scrollRef = useRef();

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
    }, [messages])
    
    
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

      const payload = {
        conversationId: currentChat._id,
        senderId: currentUser._id,
        text: inputEl.current.innerHTML.replace(/&nbsp;/g," ").trim(),
      };

      if(payload.text === '') return inputEl.current.innerHTML = '';

      const receiverId = currentChat.members.find(member => member !== currentUser._id);
      const isOnlineReceiver = currentOnliner.some(onliner => onliner.userId === receiverId);

      
      try {
        
        const res = await axiosClient.post('/message/add', {
          ...payload,
        });

        if(res.status_code === 200) {
          if (isOnlineReceiver) {
            socket.current.emit("sendMessage", {
              ...res.data[res.data.length - 1],
              receiverId,
            })
          }
  
          setMessages(res.data);
        }

        inputEl.current.innerHTML = '';
        
      } catch (err) {
        console.log(err);

      }
    }

    return (
        <div className="chatBox">
          { loading && <Loading />}
          { !loading && 
              <div className="chatBoxWrapper">
              <div className="chatBoxNavbar">
                <div className="receiver-info">
                  <div className="receiver-info__img">
                    <img src={currentReceiver && currentReceiver.profilePicture} alt="avatar" />

                    <span className="receiver-info-user__status">
                      <i className="fa-solid fa-circle"></i>
                    </span>
                  </div>
                  <div>
                    <div className="receiver-info-name">{ currentReceiver && currentReceiver.username }</div>
                    <div className="receiver-info-status">
                      <span>
                        Online
                      </span>
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
              <div className="chatBoxTop">
                {messages && messages.map((mess, index) => {
                  return (
                    <div ref={scrollRef} key={index}>
                      <Message 
                        currentUser={currentUser} 
                        receiverUser={currentReceiver} 
                        own={mess.senderId === currentUser._id} 
                        key={index} 
                        message={mess}
                      />
                    </div>
                  )
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
                    onKeyDown={e => e.keyCode === 13 ? handleSubmitMessage(e) : ''}
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
                <button 
                  className="chatSubmitButton" 
                  onClick={(e) => handleSubmitMessage(e)}
                >
                  <span><SendOutlined /></span>
                </button>
              </div>
            </div>
          }
      </div>
    )
};

export default ChatBox;