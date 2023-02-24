import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setConversation } from "../../redux/reducer/conversationSlice";
import ModalCreateChat from "./ModalCreateChat";

const Search = ({ conversationDB, currentOnliner, currentUser, setCurrentChat }) => {
  const [open, setOpen] = useState(false);

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

  const showModal = () => {
    setOpen(true);
  };

  const handleSelectConv = (e) => {
    e.preventDefault();
    
  }

  return (
    <div className="search-wrapper">
      <div className="search-header">
        <h3>Chats</h3>

        <div className="btn-new-message">
          <button onClick={showModal}>
            <span>
              <i className="fa-solid fa-pen-to-square"></i>
            </span>
          </button>

          <ModalCreateChat onSelectConv={handleSelectConv} open={open} setOpen={setOpen} currentOnliner={currentOnliner} currentUser={currentUser} />
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

export default Search;
