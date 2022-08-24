import './message.scss';

const Message = ({receiverUser, message}) => {

    return (
        <div className='message'>
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