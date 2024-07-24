import { ModalSelectFeatureChatStyled } from "./ModalSelectFeatureChat.styled";
import ImageChatBot from '@/assets/images/chat/bot-chat.png';
import ImageChatCommunity from '@/assets/images/chat/community-chatbot.png';
import axiosClient from "@/config/axios";
import { Image, message } from "antd";
import axios from "axios";

const dataChart = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

const ModalSelectFeatureChat = ({
  open,
  setOpen,
}) => {
    const user = JSON.parse(localStorage.getItem("userData"));
  const handleCancel = () => {
    setOpen(false);
  };

  const handleCreateCommunityChat = async () => {
    try {
        const res = await axiosClient.post("/conversation/create-community", {
            owner_name: user.username, 
            user_secret: '123456', 
            title: "Nhóm chat cộng đồng", 
            is_direct_chat: false, 
            members: ['RuyTank', 'duythanh']
        })

        if(res.status_code === 200) {
            message.success("Tạo nhóm chat cộng đồng thành công!")
            handleCancel();
        } else {
            message.error("Tạo nhóm chat cộng đồng thất bại!")
            handleCancel();
        }

        
    } catch(err) {
        message.error("Tạo nhóm chat cộng đồng thất bại!")
        console.log(err);
        handleCancel();
    }
  }

  const handleCreateBotChat = async () => {
    try {
        const res = await axiosClient.post("/conversation/create-botchat", {
            owner_name: user.username, 
            user_secret: '123456', 
            title: "Nhóm chat tư vấn", 
            is_direct_chat: false, 
            members: ['Chatbot', 'tuvanvien']
        })

        if(res.status_code === 200) {
            message.success("Tạo nhóm chat tư vấn thành công!")
            handleCancel();
        } else {
            message.error("Tạo nhóm chat tư vấn thất bại!")
            handleCancel();
        }

        
    } catch(err) {
        message.error("Tạo nhóm chat tư vấn thất bại!")
        console.log(err);
        handleCancel();
    }
  }

  return (
    <ModalSelectFeatureChatStyled
      title="Tạo hội thoại"
      open={open}
      onCancel={handleCancel}
      maskClosable={true}
      footer={null}
    >
      <div className="ant-body__wrapper">
        <div className="option-chat">
          <div className="community-chat" onClick={() => handleCreateCommunityChat()}>
            <div>
                <img width={160} height={160} src={ImageChatCommunity} />
            </div>
            <div className="community-chat-title">
                <i className="fa-solid fa-plus"></i>
                <span>Chat cộng đồng</span>
            </div>
          </div>

          <div className="bot-chat community-chat" onClick={() => handleCreateBotChat()}>
            <div>
                <img width={160} height={160} src={ImageChatBot} />
            </div>
            <div className="community-chat-title">
                <i className="fa-solid fa-plus"></i>
                <span>Chat với Bot</span>
            </div>
          </div>
        </div>
      </div>
    </ModalSelectFeatureChatStyled>
  );
};

export default ModalSelectFeatureChat;
