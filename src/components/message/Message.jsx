import { Tooltip } from 'antd';
import format from 'date-fns/format';

const Message = ({ currentUser, receiverUser, message, own}) => {
    let timeMessage;

    const formatMessageTime = (time) => {
        let now = Date.now();
        let today = new Date(now);
        let messageDate = new Date(message.createdAt);

        if(today.getFullYear() === messageDate.getFullYear()) {
            if(today.getMonth() + 1 === messageDate.getMonth() + 1) {
                if(today.getDate() === messageDate.getDate()) {
                    return timeMessage = format(messageDate, 'p');
                }
            }

            return timeMessage = format(messageDate, 'Pp');
        }

        return timeMessage = format(messageDate, 'Pp');
    }
    formatMessageTime()

    return (
        <div className={own ? 'message own' : 'message'}>
            {own && currentUser && message && (
                <div className="messageTop">
                    <img 
                        className="messageImg"
                        src={currentUser.profilePicture}
                        alt="" 
                    />
                    <p className="messageText">
                        <Tooltip placement="left" title={timeMessage}>
                            <span className="messageText_area">{message.text}</span>
                        </Tooltip>
                    </p>
                    </div>
            )}

            {!own && (
                <div className="messageTop">
                    <img 
                        className="messageImg"
                        src={receiverUser && receiverUser.profilePicture}
                        alt="" 
                    />
                    <p className="messageText">
                        <Tooltip placement="right" title={timeMessage}>
                            <span className="messageText_area">{message && message.text}</span>
                        </Tooltip>
                    </p>
                    </div>
            )}
        </div>
    )
}

export default Message;