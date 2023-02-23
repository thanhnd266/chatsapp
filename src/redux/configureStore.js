import { combineReducers, configureStore } from '@reduxjs/toolkit';
import conversationReducer from './reducer/conversationSlice';

const reducer = combineReducers({
    listConversation: conversationReducer,
})

const store = configureStore({
    reducer: reducer
})

export default store;