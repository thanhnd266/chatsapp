import Search from "../search/Search";
import ConversationItem from "./ConversationItem";
import { useSelector } from "react-redux";

const Conversation = ({
    conversationDB,
    currentChat,
    currentMessages, 
    waitingMessage, 
    setWaitingMessage,
    currentUser, 
    currentReceiver,
    handleChangeConv
}) => {

  let conversations = useSelector(state => state.listConversation.data);

  return (
      <div>
        <Search conversationDB={conversationDB} />

        {conversations && conversations.map((conv, index) => {
          return (
            <div key={index} onClick={(e) => handleChangeConv(e, conv)}> 
              <ConversationItem 
                conversation={conv}
                currentChat={currentChat}
                currentMessages={currentMessages}
                waitingMessage={waitingMessage}
                setWaitingMessage={setWaitingMessage}
                currentUser={currentUser} 
                currentReceiver={currentReceiver}
              />
            </div>
          )
        })}
      </div>
  );
}
 
export default Conversation;