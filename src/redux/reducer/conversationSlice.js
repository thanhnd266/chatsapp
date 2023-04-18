import { createSlice } from "@reduxjs/toolkit";

const conversationSlice = createSlice({
  name: "conversation",
  initialState: {
    data: [],
  },
  reducers: {
    setConversation(state, action) {
      state.data = [...action.payload];
    },
    addNewConversation(state, action) {
      state.data = [...state.data, action.payload];
    },
  },
});

export default conversationSlice.reducer;
export const { setConversation, addNewConversation } =
  conversationSlice.actions;
