import { Modal } from "antd";
import { useEffect, useState } from "react";

const ModalCreateChat = ({ onSelectConv, open, setOpen, currentOnliner, currentUser }) => {
  const [infoUserOnliner, setInfoUserOnliner] = useState([]);

  const handleCancel = () => {
    console.log("Clicked cancel button");
    setOpen(false);
  };

  useEffect(() => {
    setInfoUserOnliner(prev => {
        const listUserOnline = currentOnliner?.filter(onliner => onliner._id !== currentUser._id)
        return prev = [...listUserOnline]
    });
  }, [currentOnliner, currentUser._id])

  return (
    <Modal
      title="Create Chatbox"
      open={open}
      onCancel={handleCancel}
      maskClosable={false}
      footer={null}
    >
      <div className="ant-body__wrapper">
        <div className="modal-search">
          <div className="search-input w-100">
            <input
              className="w-100"
              id="search-input"
              placeholder="Search..."
              type="text"
            />
          </div>

          <span className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <div className="modal-list">
          {infoUserOnliner &&
            infoUserOnliner.map((onliner, index) => {
              return (
                <div className="modal-list__item" key={index} onClick={(e) => onSelectConv(e)}>
                  <div className="modal-list__item__img">
                    <img src={onliner.profilePicture} alt="avatar" />

                    <span className="item-img__status">
                        <i className="fa-solid fa-circle"></i>
                    </span>
                  </div>

                  <div className="modal-list__item__info">
                    <span>{onliner.username}</span>
                  </div>
                </div>
              );
            })}

            {infoUserOnliner && infoUserOnliner.length === 0 && (
                <div className="w-100 h-100 d-flex justify-content-center align-items-center">
                    <span>No users online</span>
                </div>
            )}
        </div>
      </div>
    </Modal>
  );
};

export default ModalCreateChat;
