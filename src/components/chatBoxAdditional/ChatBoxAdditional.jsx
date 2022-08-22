import './chatBoxAdditional.scss';

const ChatBoxAdditional = () => {

    return (
        <div className="chatbox-additionalInfo">
          <div className="receiver-mainInfo">
            <div className="receiver-img">
              <img 
                src="https://i2-prod.irishmirror.ie//article16196990.ece/ALTERNATES/s1200c/0_I190524_165813_2368442oTextTRMRMMGLPICT000183636161o.jpg" 
                alt="avatar" 
              />
            </div>
            <div className="receiver-username">
              <h2>Jonas Smidthmann</h2>
            </div>
            <div className="receiver-status">
              <span><i className="fa-solid fa-circle"></i>
                Online
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
              <span className="receiver-info-text">smidthmann26@gmail.com</span>
            </div>

            <div className="receiver-phone">
              <span className="receiver-info-icon"><i className="fa-solid fa-phone"></i></span>
              <span className="receiver-info-text">+84.932.179.22</span>
            </div>
          </div>

          <div className="system-pane">
            <div className="accordion accordion-wrapper accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-custom-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Customize chat
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <div className="search-chat">
                      <i className="fa-solid fa-magnifying-glass"></i>
                      <span>Search in conversation</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-custom-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Media, files and links
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <div className="mediafile-items">
                      <div className="media-conversation">
                        <div className="custom-icon">
                          <i className="fa-solid fa-images"></i>
                        </div>
                        <span>Media</span>
                      </div>
                      <div className="files-conversation">
                        <div className="custom-icon">
                          <i className="fa-solid fa-file-lines"></i> 
                        </div>
                        <span>Files</span>
                      </div>
                      <div className="links-conversation">
                        <div className="custom-icon">
                          <i className="fa-solid fa-link"></i>
                        </div>
                        <span>Links</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-custom-btn accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Privacy & support
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    <div className="support-items">
                      <div className="mute-noti">
                        <div className="custom-icon">
                          <i className="fa-solid fa-bell"></i> 
                        </div>
                        <span>Mute notifications</span>
                      </div>
                      <div className="block-friend">
                        <div className="custom-icon">
                          <i className="fa-solid fa-user-lock"></i>
                        </div>
                        <span>Block</span>
                      </div>
                      <div className="report-system">
                        <div className="custom-icon">
                          <i className="fa-solid fa-triangle-exclamation"></i> 
                        </div>
                        <span>Report</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    )
}

export default ChatBoxAdditional;