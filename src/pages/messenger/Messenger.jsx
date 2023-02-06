import axios from 'axios';
import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
//components
import Conversation from "../../components/conversation/Conversation";
import ChatBox from '../../components/chatBox/ChatBox';
import ChatBoxAdditional from '../../components/chatBoxAdditional/ChatBoxAdditional';
//socket
import { io } from 'socket.io-client';
import axiosClient from '../../config/axios';

const Messenger = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [currentOnliner, setCurrentOnliner] = useState([]);
  const [messages, setMessages] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const navigate = useNavigate();
  const isActived = true;
  const socket = useRef();
  const user = JSON.parse(localStorage.getItem('userData'));

  
  useEffect(() => {
    setCurrentUser(user);
    if(!user) {
      navigate('/login');
    }
  }, [navigate])

  useEffect(() => {
    const getConversations = async () => {
      try {
        if(Object.keys(currentUser).length > 0) {
          const response = await axiosClient.get(`conversation/get-list/${currentUser._id}`);
          if(response.status_code === 200) {
            setConversations(response.data);
            setCurrentChat(response.data[0]);
          }
        }
      } catch(err) {
        console.log(err);
      }
    }
    getConversations();
  }, [currentUser])

  useEffect(() => {
    socket.current = io("http://localhost:2626/");
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        conversationId: data.conversationId,
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
      })
    })

  }, [])

  useEffect(() => {
    arrivalMessage && currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat])

  useEffect(() => {
    socket.current.emit("addUser", user._id);

    socket.current.on("getUsers", (users) => {
      setCurrentOnliner([...users]);
    })
  }, [])

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);

      if(currentChat) {
        try {
          const res = await axios.get(`/message/get/${currentChat._id}`);
          setLoading(false);
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
          loading={loading}
          currentUser={currentUser} 
          currentChat={currentChat}
          messages={messages}
          setMessages={setMessages}
          socket={socket}
          currentOnliner={currentOnliner}
        />
      </div>
      
      <div className="additionalInfo-container">
        <ChatBoxAdditional />
      </div>
    </div>
  );
};

export default Messenger;
