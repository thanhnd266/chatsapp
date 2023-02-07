import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { apiSlice } from "../api/apiSlice";


const messageAdapter = createEntityAdapter({
    selectId: message => message._id,
});

const initialState = messageAdapter.getInitialState();

export const extendedApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getMessages: builder.query({
            query: id => `/message/get/${id}`,
            transformResponse: responseData => {

                console.log(responseData)
                return messageAdapter.setAll(initialState, responseData.data);
            },
            providesTags: (result, error, arg) => [
                { type: 'Message', id: "LIST" },
                ...result.ids.map(id => ({ type: 'Message', id }))
            ]
        })
    })
})

export const {
    useGetMessagesQuery,
} = extendedApiSlice;

// //return the query result object
// export const selectMessagesResult = extendedApiSlice.endpoints.getMessages.select();

// //Create memoized selector
// const selectMessagesData = createSelector(
//     selectMessagesResult,
//     messgesResult => messgesResult.data //normalized state object with ids & entities
// );

// //getSelectors creates these selectors and we rename them with aliases using destructuring
// export const {
//     selectAll: selectAllMessages,
//     selectById: selectMessageById,
//     selectIds: selectMessageIds
// } = messageAdapter.getSelectors(state => selectMessagesData(state) ?? initialState);

