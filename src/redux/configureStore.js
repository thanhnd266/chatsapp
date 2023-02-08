import { combineReducers, configureStore } from '@reduxjs/toolkit';
import messageReducer from './reducer/messageSlice';

const reducer = combineReducers({
    listMessage: messageReducer,
})

const store = configureStore({
    reducer: reducer
})

export default store;