
const Message = ({ receiverUser, message, own}) => {

    return (
        <div className={own ? 'message own' : 'message'}>
            <div className="messageTop">
                <img 
                    className="messageImg"
                    src={receiverUser && receiverUser.profilePicture}
                    alt="" 
                />
                <p className="messageText">
                    {message && message.text}
                </p>
            </div>
            <div className="messageBottom">
                15m ago
            </div>
        </div>
    )
}

export default Message;