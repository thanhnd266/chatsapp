import { useState, useEffect } from 'react';
import axiosClient from '../../config/axios';
import TimeAgo from '../timeAgo/TimeAgo';

const Conversation = ({ conversation, currentUser, isActived }) => {

  const [receiverUser, setReceiverUser] = useState();
  const [messagesConv, setMessagesConv] = useState();
  
  useEffect(() => {
    const receiverUserId = conversation.members.find((memberId) => memberId !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axiosClient.get(`/user/${receiverUserId}`);
        setReceiverUser(res.data);
      } catch(err) {
        console.log(err);
      }
    }

    getUser();
  }, [conversation, currentUser]);

  useEffect(() => {
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
  }, [conversation]);


  return (
    <div className="conversation">
      <div className="conversation-item">
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
            <h3>{receiverUser && receiverUser.username}</h3>
          </div>
          <div className="item-news">
            <div className="latest-massage">
              {/* {messagesConv && messagesConv[messagesConv.length - 1].text} */}
            </div>
          </div>
          <div className="time-message">
            {/* <TimeAgo timestamp={messagesConv && messagesConv[messagesConv.length - 1].createdAt} /> */}
          </div>
          {/* <div className="item-time-active">
            <span>Active 1h ago</span>
          </div> */}
        </div>

        {isActived && <div className="conversation-active"></div>}
      </div>
    </div>
  );
};

export default Conversation;
