import { createSlice } from "@reduxjs/toolkit";
import { addChat, logout, sendMessage, signIn, signUp } from "../fetch";

export const MessagerSlice = createSlice({
  name: "message",
  initialState: {
    chats: [],
    isLoading: false,
    error: null,
  },
  extraReducers: (builder) =>
    builder
      .addCase(addChat.fulfilled, (state, action) => {
        state.chats.push(action.payload);
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        const {data, chatId} = action.payload
        const chatIndex = state.chats.findIndex((chat) => chat._id === chatId);
        const chat = state.chats[chatIndex]
        const messageList = state.chats[chatIndex].message
        state.chats.splice(chatIndex, 1, {...chat, message: [...messageList, data.addedMessage, data.responseMessage]})
      })
      .addMatcher(
        (action) => {
          return (
            action.type.endsWith("signin/fulfilled") ||
            action.type.endsWith("signup/fulfilled")
          );
        },
        (state, action) => {
          state.chats = action.payload.chat;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("pending"),
        (state) => {
          state.isLoading = true;
          state.error = null;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("rejected"),
        (state, action) => {
          state.isLoading = false;
          state.error = action.payload;
        }
      )
      .addMatcher(
        (action) => action.type.endsWith("fulfilled"),
        (state) => {
          state.isLoading = false;
        }
      ),
});

export const RootReducer = MessagerSlice.reducer;
