import "./messenger.scss";
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//components
import Conversation from "../../components/conversation/Conversation";
import ChatBox from '../../components/chatBox/ChatBox';
import ChatBoxAdditional from '../../components/chatBoxAdditional/ChatBoxAdditional';

const Messenger = () => {
  const [conversations, setConversations] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);

  const navigate = useNavigate();

  const isActived = true;

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setCurrentUser(userData);
    if(!userData || !userData.access_token) {
      navigate('/login');
    }
  }, [navigate])

  useEffect(() => {
    const getConversations = async () => {
      try {
        const response = await axios.get(`conversation/get-list/${currentUser._id}`);
        setConversations(response.data);
      } catch(err) {
        console.log(err);
      }
    }
    getConversations();
  }, [currentUser])

  useEffect(() => {
    const getMessage = async () => {
      if(currentChat) {
        try {
          const res = await axios.get(`/message/get/${currentChat._id}`);
          setMessages(res.data);
        } catch(err) {
          console.log(err);
        }
      }
    }
    getMessage();

  }, [currentChat])

  return (
    <div className="messenger-wrapper">
      <div className="conversations-container">
        {conversations && conversations.map((conv, index) => (
          <div key={index} onClick={() => setCurrentChat(conv)}>
            <Conversation conversation={conv} currentUser={currentUser} isActived={isActived} />
          </div>
        ))}
      </div>

      <div className="messages-container">
        <ChatBox
          currentUser={currentUser} 
          currentChat={currentChat}
          messages={messages}
        />
      </div>
      
      <div className="additionalInfo-container">
        <ChatBoxAdditional />
      </div>
    </div>
  );
};

export default Messenger;
