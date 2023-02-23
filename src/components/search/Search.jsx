import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axiosClient from '../../config/axios';
import { setConversation } from '../../redux/reducer/conversationSlice';

const Search = ({ conversationDB }) => {

    const inputRef = useRef();
    const dispatch = useDispatch();
    const conversations = useSelector(state => state.listConversation.data);

    const handleGetListUser = async () => {
        try {
            await axiosClient.get('/user/get-list');
        } catch(err) {
            console.log(err);
        }
    }

    const handleSearchConv = (e) => {
        if(e.target.value === '') {
            return dispatch(setConversation([...conversationDB]))
        }

        conversations?.forEach(conv => {
            conv.members.forEach(mem => {
                if(mem.username === e.target.value) {
                    return dispatch(setConversation([conv]))
                }
            })
        })
    }   

    return (
        <div className="search-wrapper">
            <div className="search-element">
                <button className="search-btn">
                    <span><i className="fa-solid fa-magnifying-glass"></i></span>
                </button>
                <div className="search-input">
                    <input 
                        id="search-input" 
                        placeholder="Search..." 
                        type="text" 
                        ref={inputRef}
                        onChange={e => handleSearchConv(e)}
                        onKeyDown={e => e.keyCode === 13 ? handleSearchConv(e) : ''}
                    />
                </div>
            </div>
            <div className="btn-new-message">
                <button onClick={e => handleGetListUser(e)}>
                    <span>+</span>
                </button>
            </div>
        </div>
    )
}

export default Search;