import { useState, useEffect } from 'react';
import axiosClient from '../../../config/axios';
import TimeAgo from '../../timeAgo/TimeAgo';

const ConversationItem = ({ 
    conversation,
    currentChat,
    currentMessages, 
    waitingMessage, 
    setWaitingMessage,
    currentUser, 
    currentReceiver,
  }) => {

  const [receiverUser, setReceiverUser] = useState();
  const [messagesConv, setMessagesConv] = useState([]);
  const [unreadMessage, setUnreadMessage] = useState({
    status: false,
    conversationId: "",
  });

  useEffect(() => {
    const receiverUser = conversation.members.find((member) => member._id !== currentUser._id);
    
    if(Object.keys(currentReceiver).length > 0) {

      if(receiverUser._id === currentReceiver._id) {
        return setReceiverUser(currentReceiver);
      }
  
      const getUser = async () => {
        try {
          const res = await axiosClient.get(`/user/${receiverUser._id}`);
          setReceiverUser(res.data);
        } catch(err) {
          console.log(err);
        }
      }
  
      getUser();
    }

  }, [conversation, currentUser, currentReceiver]);

  useEffect(() => {

      if(currentMessages?.length > 0) {
        if(currentMessages[0].conversationId === conversation._id) {
          return setMessagesConv(currentMessages);
        }
  
        const getMessageConv = async () => {
          try {
            const res = await axiosClient.get(`/message/get/${conversation._id}`);
            if(res.status_code === 200) {
              setMessagesConv(res.data);
            }
          } catch(err) {
            console.log(err);
          }
        }
    
        getMessageConv();
      }

      if(waitingMessage) {
        if(waitingMessage.conversationId === conversation._id) {
          setMessagesConv((prev) => [...prev, waitingMessage]);
          setUnreadMessage({
            status: true,
            conversationId: waitingMessage.conversationId,
          });
        }
      }
    
  }, [waitingMessage, currentMessages, conversation._id]);


  const handleRemoveUnread = () => {
    setUnreadMessage({
      status: false,
      conversationId: "",
    })
    setWaitingMessage(null);
  }

  return (
    <div className="conversation" onClick={() => handleRemoveUnread()}>
      <div className={ 
          currentChat && currentChat._id === conversation._id
          ? "conversation-item conversation-item__active" 
          : "conversation-item"
        }
      >
        <div className="item-image">
          <img
            src={receiverUser && receiverUser.profilePicture}
            alt="avatar"
          />

          <span className="item-image__status">
            <i className="fa-solid fa-circle"></i>
          </span>
        </div>
        <div className="item-additionalInfo">
          <div className="item-username">
            <h3 className={unreadMessage.status ? "fw-bold text-dark" : ""}>{receiverUser && receiverUser.username}</h3>
          </div>
          <div className="item-news">
            <div className={unreadMessage.status ? "latest-massage text-primary fw-bold" : "latest-massage"}>
              {/* {messagesConv && !(messagesConv.length > 0) && <span className="un-chat-before">No messages yet...</span>} */}

              {messagesConv
                  && messagesConv.length > 0
                  && messagesConv[messagesConv.length - 1].text
              }
            </div>
          </div>
          <div className="time-message">
            {messagesConv 
              && messagesConv.length > 0
              && <TimeAgo timestamp={messagesConv && messagesConv[messagesConv.length - 1].createdAt} />
            }
          </div>
        </div>

        {currentChat 
          && currentChat._id === conversation._id 
          && <div className="conversation-active"></div>
        }
            
      </div>

      {unreadMessage.status && (
        <div className="item-unread__message bg-primary"></div>
      )}
    </div>
  );
};

export default ConversationItem;
