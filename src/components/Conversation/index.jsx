import SearchConv from "../search/Search";
import ConversationItem from "./ConversationItem";
import { useSelector } from "react-redux";

const Conversation = ({
    conversationDB,
    currentChat,
    currentMessages,
    setCurrentChat,
    waitingMessage, 
    setWaitingMessage,
    currentUser, 
    currentReceiver,
    handleChangeConv,
    currentOnliner,
}) => {

  let conversations = useSelector(state => state.listConversation.data);

  return (
      <div className="conversation-wrapper">
        <SearchConv 
          conversationDB={conversationDB} 
          currentOnliner={currentOnliner} 
          currentUser={currentUser}
          setCurrentChat={setCurrentChat}
        />

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

        {conversations && conversations.length === 0 && (
          <div className="no-conversation">
            <h2>No Conversation Match</h2>
          </div>
        )}
      </div>
  );
}
 
export default Conversation;