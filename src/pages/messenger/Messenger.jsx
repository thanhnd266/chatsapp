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
  const [messages, setMessages] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const navigate = useNavigate();
  const isActived = true;
  const socket = useRef();
  const user = JSON.parse(localStorage.getItem('userData'));

  useEffect(() => {
    socket.current = io("ws://localhost:8900");
    socket.current.on("getMessage", data => {
      setArrivalMessage({
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
      console.log(users)
    })
  }, [])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('userData'));
    setCurrentUser(userData);
    if(!userData) {
      navigate('/login');
    }
  }, [navigate])

  useEffect(() => {
    const getConversations = async () => {
      try {
        const response = await axios.get(`conversation/get-list/${currentUser._id}`);
        if(response.data && response.data.length > 0) {
          setConversations(response.data);
          setCurrentChat(response.data[0]);
        }

      } catch(err) {
        console.log(err);
      }
    }
    getConversations();
  }, [currentUser])

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
        />
      </div>
      
      <div className="additionalInfo-container">
        <ChatBoxAdditional />
      </div>
    </div>
  );
};

export default Messenger;
