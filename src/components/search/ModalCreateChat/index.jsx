import { Modal } from "antd";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import axiosClient from "../../../config/axios";
import { addNewConversation } from "../../../redux/reducer/conversationSlice";

const ModalCreateChat = ({
  open, 
  setOpen, 
  currentOnliner, 
  currentUser, 
  setCurrentChat, 
  listUser }) => {

  const [listUserChat, setListUserChat] = useState([]);

  const dispatch = useDispatch();

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    let arrOnliner = [];
    let arrOffliner = [];

    listUser?.forEach(user => {
      if(user._id === currentUser._id) {
        return;
      }

      if(currentOnliner.length > 1) {
        currentOnliner.forEach(onliner => {
          if(onliner._id === currentUser._id) {
            return;
          }

          if(onliner._id === user._id) {
            return arrOnliner.push({
              ...user,
              isOnline: true,
            })
          } else {
            return arrOffliner.push({
              ...user,
              isOnline: false,
            })
          }
        })
      } else {
        return arrOffliner.push({
          ...user,
          isOnline: false,
        })
      }
    })

    setListUserChat([...arrOnliner, ...arrOffliner]);
  }, [currentOnliner, listUser, currentUser])

  const handleSelectConv = async (e, receiverId) => {
    e.preventDefault();
    
    try {
      const res = await axiosClient.get(`/conversation/get-one/${receiverId}/${currentUser._id}`);
      if(res.status_code === 200) {
        if(res.data) {
          setOpen(false);
          setCurrentChat(res.data)
        } else {
          const res = await axiosClient.post("/conversation/create", {
            senderId: currentUser._id,
            receiverId,
          })
          setOpen(false);
          setCurrentChat(res.data);
          dispatch(addNewConversation(res.data))
        }
      }
    } catch(err) {
      console.log(err);
    }
  }

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
          {listUserChat &&
            listUserChat.map((user, index) => {
              return (
                <div className="modal-list__item" key={index} onClick={(e) => handleSelectConv(e, user._id)}>
                  <div className="modal-list__item__img">
                    <img src={user.profilePicture} alt="avatar" />

                    {user.isOnline && (
                      <span className="item-img__status">
                        <i className="fa-solid fa-circle"></i>
                      </span>
                    )}
                  </div>

                  <div className="modal-list__item__info">
                    <span>{user.username}</span>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </Modal>
  );
};

export default ModalCreateChat;
