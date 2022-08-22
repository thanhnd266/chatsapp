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
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();

  const isActived = true;

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setUserInfo(userData);
    if(!userData || !userData.access_token) {
      navigate('/login');
    }
    
  }, [navigate])

  console.log(userInfo._id);

  useEffect(() => {
    const getConversations = async () => {
      try {
        const response = await axios.get(`conversation/get-list/${userInfo._id}`);
        console.log(response);
      } catch(err) {
        console.log(err);
      }
    }
    getConversations();
  }, [])

  return (
    <div className="messenger-wrapper">
      <div className="conversations-container">
        <Conversation />
        <Conversation isActived={isActived} />
      </div>

      <div className="messages-container">
        <ChatBox />
      </div>

      <div className="additionalInfo-container">
        <ChatBoxAdditional />
      </div>
    </div>
  );
};

export default Messenger;
