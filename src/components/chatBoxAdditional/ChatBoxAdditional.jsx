import { Tooltip } from 'antd';
import { chatAdditionalInfo } from '../../contants/messenger';

const ChatBoxAdditional = ({ currentReceiver }) => {

    return (
        <div className="chatbox-additionalInfo">
          <div className="receiver-mainInfo">
            <div className="receiver-img">
              <img 
                src={currentReceiver && currentReceiver.profilePicture}
                alt="avatar" 
              />
            </div>
            <div className="receiver-username">
              <h2>{currentReceiver && currentReceiver.username}</h2>
            </div>
            <div className="receiver-status">
              <span><i className="fa-solid fa-circle"></i>
                {currentReceiver && (currentReceiver.status || 'Online')}
              </span>
            </div>
          </div>
          <div className="receiver-otherInfo">
            <div className="receiver-profile">
              <span className="receiver-info-icon"><i className="fa-solid fa-address-card"></i></span>
              <span className="receiver-info-text">View Profile</span>
            </div>

            <div className="receiver-email">
              <span className="receiver-info-icon"><i className="fa-solid fa-envelope"></i></span>
              <span className="receiver-info-text">
                <Tooltip placement="top" title={currentReceiver && currentReceiver.email}>
                  {currentReceiver && currentReceiver.email}
                </Tooltip>
              </span>
            </div>

            <div className="receiver-phone">
              <span className="receiver-info-icon"><i className="fa-solid fa-phone"></i></span>
              <span className="receiver-info-text">
                <Tooltip placement="bottom" title={currentReceiver && (currentReceiver.phone || '+84.932.179.22')}>
                  {currentReceiver && (currentReceiver.phone || '+84.932.179.22')}
                </Tooltip>
              </span>
            </div>
          </div>

          <div className="system-pane">
            <div className="accordion accordion-wrapper accordion-flush" id="accordionFlushExample">
              {chatAdditionalInfo.map((item, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-custom-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${item.id}`} aria-expanded="false" aria-controls={item.id}>
                      {item.title}
                    </button>
                  </h2>
                  <div id={item.id} className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body">
                      {item && item.accordion.map((childItem, i) => (
                        <div className="chat-feature d-flex justify-content-start align-items-center mt-2" key={i}>
                          <div className="chat-feature__icon d-flex justify-content-center align-items-center me-1">
                            {childItem.icon}
                          </div>
                          <span>{childItem.feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

    )
}

export default ChatBoxAdditional;