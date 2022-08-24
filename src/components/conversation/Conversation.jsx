import "./conversation.scss";
import axios from 'axios';
import { useState, useEffect } from 'react';

const Conversation = ({ conversation, currentUser, isActived }) => {

  const [receiverUser, setReceiverUser] = useState();
  
  useEffect(() => {

    const receiverUserId = conversation.members.find((memberId) => memberId !== currentUser._id);

    const getUser = async () => {
      try {
        const res = await axios.get(`/user/${receiverUserId}`);
        setReceiverUser(res.data);
      } catch(err) {
        console.log(err);
      }
    }

    getUser();
  }, [conversation, currentUser]);


  return (
    <div className="conversation">
      <div className="conversation-item">
        <div className="item-image">
          <img
            src={receiverUser && receiverUser.profilePicture}
            alt="avatar"
          />
        </div>
        <div className="item-additionalInfo">
          <div className="item-username">
            <h3>{receiverUser && receiverUser.username}</h3>
          </div>
          <div className="item-news">
            <div className="latest-massage">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              sed itaque optio dolorem rerum voluptatum minus.
            </div>
            <span className="time-message">15m</span>
          </div>
          <div className="item-time-active">
            <span>Active 1h ago</span>
          </div>
        </div>

        {isActived && <div className="conversation-active"></div>}
      </div>
    </div>
  );
};

export default Conversation;
