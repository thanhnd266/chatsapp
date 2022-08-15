import './message.scss';

const Message = ({text}) => {

    return (
        <div className='message'>
            <div className="messageTop">
                <img 
                    className="messageImg"
                    src="https://i2-prod.irishmirror.ie//article16196990.ece/ALTERNATES/s1200c/0_I190524_165813_2368442oTextTRMRMMGLPICT000183636161o.jpg" 
                    alt="" 
                />
                <p className="messageText">
                    {text ? text : 'Hello bro!'}
                </p>
            </div>
            <div className="messageBottom">
                15m ago
            </div>
        </div>
    )
}

export default Message;