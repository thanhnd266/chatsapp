import { Modal } from "antd";
import { useEffect, useRef, useState } from "react";
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
  const [listUserSearch, setListUserSearch] = useState([]);
    
  const dispatch = useDispatch();

  const searchTermRef = useRef();

  const handleCancel = () => {
    setOpen(false);
  };

  useEffect(() => {
    let arrOnliner = [];
    let arrOffliner = [];

    for(let i = 0; i < listUser.length; i++) {
      if(listUser[i]._id === currentUser._id) {
        continue;
      }

      if(currentOnliner.length > 1) {

        let isUserOnline = false;

        for(let j = 0; j < currentOnliner.length; j++) {
          if(currentOnliner[j]._id === currentUser._id) {
            continue;
          };

          if(currentOnliner[j]._id === listUser[i]._id) {
            isUserOnline = true;
            arrOnliner.push({
              ...listUser[i],
              isOnline: true,
            })
            break;
          }
        }

        if(isUserOnline === false) {
          arrOffliner.push({
            ...listUser[i],
            isOnline: false,
          })

          continue;
        }

      } else {
        arrOffliner.push({
          ...listUser[i],
          isOnline: false,
        })
        continue;
      }
    }
    setListUserChat([...arrOnliner, ...arrOffliner]);

    if(!searchTermRef.current.value) {
      setListUserSearch([...arrOnliner, ...arrOffliner]);
    } else {
      const sortArr = [...arrOnliner, ...arrOffliner].filter(user => user.username.includes(searchTermRef.current.value));
      setListUserSearch(sortArr);
    }
  
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

  const handleSearchUser = (e) => {
    let newArr = [];

    if(!e || e.target.value === "") {
      return setListUserSearch(listUserChat);
    }

    listUserChat?.forEach(user => {
      if(user.username.includes(e.target.value)) {
        newArr.push(user)
      }
    })

    setListUserSearch(newArr);
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
              ref={searchTermRef}
              onChange={(e) => handleSearchUser(e)}
            />
          </div>

          <span className="search-icon">
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </div>

        <div className="modal-list">
          {listUserSearch &&
            listUserSearch.map((user, index) => {
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
