import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
//components
import ChatBox from '../../components/chatBox/ChatBox';
import ChatBoxAdditional from '../../components/chatBoxAdditional/ChatBoxAdditional';
//socket
import { io } from 'socket.io-client';
import axiosClient from '../../config/axios';
import { useDispatch } from 'react-redux';
import { setConversation } from '../../redux/reducer/conversationSlice';
import Conversation from '../../components/Conversation';

const Messenger = () => {
  const [loading, setLoading] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentReceiver, setCurrentReceiver] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [currentOnliner, setCurrentOnliner] = useState([]);
  const [messages, setMessages] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [waitingMessage, setWaitingMessage] = useState(null);
  const [isOpenChatInfo, setIsOpenChatInfo] = useState(true);

  const chatAdditionalRef = useRef();

  const navigate = useNavigate();
  const socket = useRef();
  const user = JSON.parse(localStorage.getItem('userData'));
  const dispatch = useDispatch();

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
            dispatch(setConversation(response.data))
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
      const receiverUser = currentChat.members.find((member) => member._id !== currentUser._id);
      
      const getReceiver = async () => {
        try {
          const res = await axiosClient.get(`/user/${receiverUser._id}`);
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
    socket.current = io(process.env.REACT_APP_BASE_URL, {
      secure:true, 
      rejectUnauthorized: false,
	    transports: ['polling']
    });
    
  }, [])

  useEffect(() => {
    socket.current.on("getMessage", data => {
      if(currentChat && currentChat?._id !== data.conversationId) {
        return setWaitingMessage({
          _id: data._id,
          conversationId: data.conversationId,
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          __v: data.__v,
          isUnread: true,
        })
      }

      return setArrivalMessage({
        _id: data._id,
        conversationId: data.conversationId,
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        __v: data.__v,
      })
    })

  }, [currentChat])

  useEffect(() => {
    if(arrivalMessage) {
      currentChat?.members.forEach(mem => {
        if(mem._id === arrivalMessage.sender) {
          setMessages((prev) => [...prev, arrivalMessage])
          return;
        }
      })
    }

  }, [arrivalMessage, currentChat])

  useEffect(() => {
    socket.current.emit("addUser", user);
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
        <Conversation
          conversationDB={conversations}
          currentChat={currentChat}
          currentMessages={messages}
          setCurrentChat={setCurrentChat}
          waitingMessage={waitingMessage}
          setWaitingMessage={setWaitingMessage}
          currentUser={currentUser} 
          currentReceiver={currentReceiver}
          handleChangeConv={handleChangeConv}
          currentOnliner={currentOnliner}
        />
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
          setIsOpenChatInfo={setIsOpenChatInfo}
          chatAdditionalRef={chatAdditionalRef}
        />
      </div>

      {isOpenChatInfo && (
        <div className="additionalInfo-container" ref={chatAdditionalRef}>
          <ChatBoxAdditional
            currentChat={currentChat}
            currentUser={currentUser} 
            currentReceiver={currentReceiver}
          />
        </div>
      )}
    </div>
  );
};

export default Messenger;
