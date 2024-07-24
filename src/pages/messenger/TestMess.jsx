import { useEffect, useState } from "react";
import { ChatEngine, getOrCreateChat } from "react-chat-engine";
import PieChartComp from "./charts/PieChart";
import TestChart from "./charts/TestChart";
import SearchChat from "./components/SearchChat";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useDispatch } from "react-redux";
import axiosClient from "@/config/axios";
import { setConversation } from "@/redux/reducer/conversationSlice";
import { socket } from "@/config/socket";
import CustomMessage from "./components/CustomMessage";
import './TestMess.scss';
import FormSubmitMessage from "./components/FormSubmitMessage";
import BarChartComp from "./charts/BarChart";
import ComposedChart from "./charts/TreeChartComp";
import TreeChartComp from "./charts/TreeChartComp";



const TestMess = () => {
  const user = JSON.parse(localStorage.getItem("userData"));
  const [username, setUsername] = useState("");
  ///////////////////////
  const [currentOnliner] = useOutletContext();
  const [loading, setLoading] = useState(false);
  const [openChatBox, setOpenChatBox] = useState(false);
  const [conversations, setConversations] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [currentReceiver, setCurrentReceiver] = useState({});
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState(null);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [waitingMessage, setWaitingMessage] = useState(null);
  const [isOpenChatInfo, setIsOpenChatInfo] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    setCurrentUser(user);
    if (!user) {
      navigate("/login");
    }
  }, [navigate]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        if (Object.keys(currentUser).length > 0) {
          const response = await axiosClient.get(
            `conversation/get-list/${currentUser._id}`
          );
          if (response.status_code === 200) {
            dispatch(setConversation(response.data));
            setConversations(response.data);
            setCurrentChat(response.data[0]);
          }
        }
      } catch (err) {
        console.log(err);
      }
    };
    getConversations();
  }, [currentUser]);

  useEffect(() => {
    if (currentChat) {
      const receiverUser = currentChat.members.find(
        (member) => member._id !== currentUser._id
      );

      const getReceiver = async () => {
        try {
          const res = await axiosClient.get(`/user/${receiverUser._id}`);
          if (res.status_code === 200) {
            setCurrentReceiver(res.data);
          }
        } catch (err) {
          console.log(err);
        }
      };

      getReceiver();
    }
  }, [currentChat, currentUser]);

  useEffect(() => {
    socket.on("getMessage", (data) => {
      if (currentChat && currentChat?._id !== data.conversationId) {
        return setWaitingMessage({
          _id: data._id,
          conversationId: data.conversationId,
          sender: data.senderId,
          text: data.text,
          createdAt: Date.now(),
          updatedAt: Date.now(),
          __v: data.__v,
          isUnread: true,
        });
      }

      return setArrivalMessage({
        _id: data._id,
        conversationId: data.conversationId,
        sender: data.senderId,
        text: data.text,
        createdAt: Date.now(),
        updatedAt: Date.now(),
        __v: data.__v,
      });
    });
  }, [currentChat]);

  useEffect(() => {
    if (arrivalMessage) {
      currentChat?.members.forEach((mem) => {
        if (mem._id === arrivalMessage.sender) {
          setMessages((prev) => [...prev, arrivalMessage]);
          return;
        }
      });
    }
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    const getMessage = async () => {
      setLoading(true);

      if (currentChat) {
        try {
          const res = await axiosClient.get(`/message/get/${currentChat._id}`);
          if (res.status_code === 200) {
            // dispatch(setMessage(res.data));
            setLoading(false);
            setMessages(res.data);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    getMessage();
  }, [currentChat, dispatch]);

  const handleChangeConv = (e, conversation) => {
    e.preventDefault();
    setCurrentChat(conversation);
    setArrivalMessage(null);
    setOpenChatBox(true);
  };

  const onCloseDrawerChatbox = () => {
    setOpenChatBox(false);
  };

  ////////////////////////

  function createDirectChat(creds) {
    getOrCreateChat(
      creds,
      { is_direct_chat: true, usernames: [username] },
      () => setUsername("")
    );
  }

  function renderChatForm(creds) {
    return (
      <div className="chat-form">
        <SearchChat 
          currentOnliner={currentOnliner}
        />
        <div className="search-element">
          <button className="search-btn">
            <span>
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </button>
          <div className="search-input">
            <input
              id="search-input"
              placeholder="Nhập tên người dùng..."
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              onKeyDown={(e) => {
                if(e.keyCode === 13) {
                  createDirectChat(creds)
                }
              }}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="test_mess">
      <div className="shadow">
        {user && (
          <ChatEngine
            projectID="aa4fd5a4-a606-449c-acce-3ecf07291e1b"
            userName={user?.username}
            userSecret="admin"
            renderNewChatForm={(creds) => renderChatForm(creds)}
            height="90vh"
            // renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) => <CustomMessage props={{
            //     creds: creds,
            //     chat: chat,
            //     lastMessage: lastMessage,
            //     message: message,
            //     nextMessage: nextMessage,
            // }} />}
            // renderNewMessageForm={(creds, chatId) => <FormSubmitMessage creds={creds} chatId={chatId} />}
          />
        )}
      </div>
    </div>
  );
};

export default TestMess;
