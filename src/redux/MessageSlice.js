import { createSlice } from "@reduxjs/toolkit";
import { addChat, deleteChat, deleteMessage, logout, sendMessage, signIn, signUp } from "../fetch";

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
      .addCase(deleteChat.fulfilled, (state, action) => {
        const chatIndex = state.chats.findIndex((chat) => chat._id === action.payload);
        state.chats.splice(chatIndex, 1);
      })
      .addCase(sendMessage.fulfilled, async(state, action) => {
        const {data, chatId} = action.payload
        const chatIndex = state.chats.findIndex((chat) => chat._id === chatId);
        const chat = state.chats[chatIndex]
        const messageList = chat.message
        state.chats.splice(chatIndex, 1, {...chat, message: [...messageList, data.addedMessage, data.responseMessage]})
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        const {chatId, messageId} = action.payload
        const chatIndex = state.chats.findIndex((chat) => chat._id === chatId);
        const chat = state.chats[chatIndex]
        const messageList = chat.message
        const messageIndex = messageList.findIndex((message) => message._id === messageId);
        messageList.splice(messageIndex, 1)
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
