import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({
    name: 'messages',
    initialState: {
        data: [],
    },
    reducers: {
        setMessage(state, action) {
            state.data = [...action.payload];
        },
        addNewMessage(state, action) {
            state.data = [
                ...state.data,
                action.payload
            ]
        }
    }
});

export default messageSlice.reducer;
export const { setMessage, addNewMessage } = messageSlice.actions;