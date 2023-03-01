import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import axiosClient from "../../config/axios";
import { addNewConversation, setConversation } from "../../redux/reducer/conversationSlice";
import { removeAccents } from "../../utils/helpers";
import ModalCreateChat from "./ModalCreateChat";

const SearchConv = ({ conversationDB, currentOnliner, currentUser, setCurrentChat, setOpenChatBox }) => {
  const [open, setOpen] = useState(false);
  const [listUser, setListUser] = useState([]);

  const inputRef = useRef();
  const dispatch = useDispatch();

  const handleSearchConv = (e) => {
    if (e.target.value === "") {
      return dispatch(setConversation([...conversationDB]));
    }

    let newConv = [];

    conversationDB?.forEach((conv) => {
      for(let i = 0; i < conv.members.length; i++) {
        if (
            removeAccents(conv.members[i].username.toLowerCase())
              .includes(removeAccents(e.target.value.toLowerCase()))
        ) {
          if(conv.members[i]._id !== currentUser._id) {
            newConv.push(conv);
            break;
          }
        }
      }
    });

    dispatch(setConversation([...newConv]));
  };

  const showModal = async () => {
    try {
      const res = await axiosClient.get("/user/get-list");
      if(res.status_code === 200) {
        setListUser(res.data);
        setOpen(true);

      }
    } catch(err) { 
      console.log(err);
    }
  };

  const handleSelectConv = async (e, receiverId, isModeModal) => {
    e.preventDefault();
    
    try {
      const res = await axiosClient.get(`/conversation/get-one/${receiverId}/${currentUser._id}`);
      if(res.status_code === 200) {
        if(res.data) {
          isModeModal && setOpen(false);
          setCurrentChat(res.data)
          setOpenChatBox(true)
        } else {
          const res = await axiosClient.post("/conversation/create", {
            senderId: currentUser._id,
            receiverId,
          })
          isModeModal && setOpen(false);
          setCurrentChat(res.data);
          dispatch(addNewConversation(res.data))
          setOpenChatBox(true)
        }
      }
    } catch(err) {
      console.log(err);
    }
  }

  return (
    <div className="search-wrapper">
      <div className="search-header">
        <h3>Chats</h3>

        <div className="btn-new-message">
          <div>
            <button onClick={showModal}>
              <span>
                <i className="fa-solid fa-pen-to-square"></i>
              </span>
            </button>
          </div>

          {open && <ModalCreateChat
            open={open} 
            setOpen={setOpen}
            currentOnliner={currentOnliner}
            currentUser={currentUser}
            listUser={listUser}
            onSelectConv={handleSelectConv}
          />}

          <div className="list-user__online">
            {currentOnliner && currentOnliner.map((item, index) => {
              if(item._id === currentUser._id) {
                return (
                  <div key={index}></div>
                );
              }

              return (
                <div className="onliner-item" key={index} onClick={(e) => handleSelectConv(e, item._id)}>
                  <img src={item.profilePicture} alt="avatar" />
  
                  <span className="item-image__status">
                    <i className="fa-solid fa-circle"></i>
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className="search-element">
        <button className="search-btn">
          <span>
            <i className="fa-solid fa-magnifying-glass"></i>
          </span>
        </button>
        <div className="search-input">
          <input
            id="search-input"
            placeholder="Search..."
            type="text"
            ref={inputRef}
            onChange={(e) => handleSearchConv(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchConv;
