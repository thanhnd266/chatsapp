
import React from 'react'
import { chatAdditionalInfo } from '../../contants/messenger'

const ChatBoxAdditionalMobile = ({ onClose, currentReceiver }) => {
  return (
    <div className="chatbox-additional-body__wrapper">
        <div className="text-start">
            <button className="btn" onClick={() => onClose()}>
                <i className="fa-solid fa-chevron-left"></i>
            </button>
        </div>

        <div className="user-info">
            <img src={currentReceiver.profilePicture} alt="avatar" />
            <div className="user-info__name mt-2">
                <h2>{currentReceiver.username}</h2>
            </div>
            <div className="d-flex justify-content-center align-items-center my-4">
                <div className="user-info__btn">
                    <span className="user-info__icon"><i className="fa-solid fa-address-card"></i></span>
                    <span className="user-info__text">View Profile</span>
                </div>
                <div className="user-info__btn">
                    <span className="user-info__icon"><i className="fa-solid fa-bell"></i></span>
                    <span className="user-info__text">Mute</span>
                </div>
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
                        <div className="chat-feature d-flex justify-content-start align-items-center" key={i}>
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

export default ChatBoxAdditionalMobile