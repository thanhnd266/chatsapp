import "./messenger.scss";

//components
import Conversation from "../../components/conversation/Conversation";
import ChatBox from '../../components/chatBox/ChatBox';
import ChatBoxAdditional from '../../components/chatBoxAdditional/ChatBoxAdditional';

const Messenger = () => {
  const isActived = true;

  return (
    <div className="messenger-wrapper">
      <div className="conversations-container">
        <Conversation />
        <Conversation isActived={isActived} />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
        <Conversation />
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
