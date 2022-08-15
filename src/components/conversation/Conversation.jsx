import "./conversation.scss";

const Conversation = ({ isActived }) => {
  return (
    <div className="conversation">
      <div className="conversation-item">
        <div className="item-image">
          <img
            src="https://haycafe.vn/wp-content/uploads/2021/11/Anh-avatar-dep-chat-lam-hinh-dai-dien.jpg"
            alt="avatar"
          />
        </div>
        <div className="item-additionalInfo">
          <div className="item-username">
            <h3>Jonas Smidthmann</h3>
          </div>
          <div className="item-news">
            <div className="latest-massage">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              sed itaque optio dolorem rerum voluptatum minus.
            </div>
            <span className="time-message">15m</span>
          </div>
          <div className="item-time-active">
            <span>Active 1h ago</span>
          </div>
        </div>

        {isActived && <div className="conversation-active"></div>}
      </div>
    </div>
  );
};

export default Conversation;
