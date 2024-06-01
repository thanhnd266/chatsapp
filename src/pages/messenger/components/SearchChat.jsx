
import SearchConv from '@/components/search/Search'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './SearchChat.scss';
import ModalSelectFeatureChat from './ModalSelectFeatureChat';

const SearchChat = ({
    currentOnliner,
}) => {
    const currentUser = JSON.parse(localStorage.getItem("userData"));
    const [listConversation, setListConversation] = useState([]);
    const [isOpenModalSelecteFeatureChat, setIsOpenModalSelecteFeatureChat] = useState(false);

    useEffect(() => {
        if(currentUser) {
            const getListConversation = async () => {
                try {
                    const res = await axios.get("https://api.chatengine.io/chats/", {
                        headers: {
                            'Project-ID': '5f5b4220-901f-4bde-826b-b245dcb0f9bf',
                            'User-Name': currentUser?.username,
                            'User-Secret': '123456'
                        }
                    })
                    if(res.status === 200) {
                        setListConversation(res?.data);
                    }
                } catch(err) {
                    console.log("failed to get list conversation");
                }
            }
    
            getListConversation();
        }
    }, [])

  return (
    <div className='search-chat'>
        <div className="search-header">
        <h3>Chats</h3>

        <div className="btn-new-message">
          <div>
            <button onClick={() => setIsOpenModalSelecteFeatureChat(true)}>
              <span>
                <i className="fa-solid fa-pen-to-square"></i>
              </span>
            </button>
          </div>

          {isOpenModalSelecteFeatureChat && (
            <ModalSelectFeatureChat
              open={isOpenModalSelecteFeatureChat}
              setOpen={setIsOpenModalSelecteFeatureChat}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchChat