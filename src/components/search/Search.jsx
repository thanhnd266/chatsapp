import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axiosClient from "../../config/axios";
import { setConversation } from "../../redux/reducer/conversationSlice";
import ModalCreateChat from "./ModalCreateChat";

const SearchConv = ({ conversationDB, currentOnliner, currentUser, setCurrentChat }) => {
  const [open, setOpen] = useState(false);
  const [listUser, setListUser] = useState([]);

  const inputRef = useRef();
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.listConversation.data);

  const handleSearchConv = (e) => {
    if (e.target.value === "") {
      return dispatch(setConversation([...conversationDB]));
    }

    let newConv = [];

    conversations?.forEach((conv) => {
      conv.members.forEach((mem) => {
        if (mem.username.includes(e.target.value)) {
          newConv.push(conv);
        }
      });
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
            setCurrentChat={setCurrentChat}
            listUser={listUser}
          />}

          <div className="list-user__online">
            {currentOnliner && currentOnliner.map((item, index) => {

              if(item._id === currentUser._id) {
                return (
                  <div key={index}></div>
                );
              }

              return (
                <div className="onliner-item" key={index}>
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
            onKeyDown={(e) => (e.keyCode === 13 ? handleSearchConv(e) : "")}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchConv;
