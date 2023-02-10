import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//components
import ChatBox from '../../components/chatBox/ChatBox';
import ChatBoxAdditional from '../../components/chatBoxAdditional/ChatBoxAdditional';
import Conversation from "../../components/conversation/Conversation";
//socket
import { io } from 'socket.io-client';
import axiosClient from '../../config/axios';
import { useDispatch } from 'react-redux';

const Messenger = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentReceiver, setCurrentReceiver] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [currentOnliner, setCurrentOnliner] = useState([]);
  const [messages, setMessages] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const navigate = useNavigate();
  const isActived = true;
  const socket = useRef();
  const user = JSON.parse(localStorage.getItem('userData'));
  const dispatch = useDispatch()

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
  }, [currentUser]);

  useEffect(() => {
    if(currentChat) {
      const receiverUserId = currentChat.members.find((memberId) => memberId !== currentUser._id);
      
      const getReceiver = async () => {
        try {
          const res = await axiosClient.get(`/user/${receiverUserId}`);
          if(res.status_code === 200) {
            setCurrentReceiver(res.data);
          }

        } catch(err) {
          console.log(err);
        }
      }

      getReceiver();
    }
  }, [currentChat, currentUser]);

  useEffect(() => {
    socket.current = io("http://localhost:2626/");
    socket.current.on("getMessage", data => {
      setArrivalMessage({
        _id: data._id,
        conversationId: data.conversationId,
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        __v: data.__v,
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
          const res = await axiosClient.get(`/message/get/${currentChat._id}`);
          if(res.status_code === 200) {
            // dispatch(setMessage(res.data));
            setLoading(false);
            setMessages(res.data);
          }
        } catch(err) {
          console.log(err);
        }
      }
    }
    getMessage();

  }, [currentChat, dispatch]);

  const handleChangeConv = (e, conversation) => {
    e.preventDefault();
    setCurrentChat(conversation);
    setArrivalMessage(null);
  }

  return (
    <div className="messenger-wrapper">
      <div className="conversations-container">
        {conversations && conversations.map((conv, index) => (
          <div key={index} onClick={(e) => handleChangeConv(e, conv)}> 
            <Conversation 
              conversation={conv}
              setCurrentChat={setCurrentChat}
              currentMessages={messages}
              currentUser={currentUser} 
              currentReceiver={currentReceiver}
              isActived={isActived}
            />
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
          currentReceiver={currentReceiver}
        />
      </div>
      
      <div className="additionalInfo-container">
        <ChatBoxAdditional 
          currentChat={currentChat}
          currentUser={currentUser} 
          currentReceiver={currentReceiver}
        />
      </div>
    </div>
  );
};

export default Messenger;
