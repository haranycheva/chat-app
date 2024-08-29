import { createSlice } from "@reduxjs/toolkit";
import {
  addChat,
  deleteChat,
  deleteMessage,
  logout,
  sendMessage,
  signIn,
  signUp,
} from "../fetch";
import { showMessegeNotification } from "../functions/showMessegeNotification";
import toast from "react-hot-toast";

export const MessagerSlice = createSlice({
  name: "message",
  initialState: {
    chats: [],
    isLoading: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(addChat.fulfilled, (state, action) => {
        state.chats.push(action.payload);
        console.log(action.payload);
        
      })
      .addCase(deleteChat.fulfilled, (state, action) => {
        const chatIndex = state.chats.findIndex(
          (chat) => chat._id === action.payload
        );
        state.chats.splice(chatIndex, 1);
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        const { data, chatId } = action.payload;
        const chatIndex = state.chats.findIndex((chat) => chat._id === chatId);
        const chat = state.chats[chatIndex];
        chat.message.push(data.addedMessage, data.responseMessage);
        showMessegeNotification(data.responseMessage, chat.firstName)
      })
      .addCase(deleteMessage.fulfilled, (state, action) => {
        const { chatId, messageId } = action.payload;
        const chatIndex = state.chats.findIndex((chat) => chat._id === chatId);
        const chat = state.chats[chatIndex];
        const messageList = chat.message;
        const messageIndex = messageList.findIndex(
          (message) => message._id === messageId
        );
        messageList.splice(messageIndex, 1);
      })
      .addMatcher(
        (action) => {
          return (
            action.type.endsWith("rejected")
          );
        },
        (_, action) => {
            toast.error(action.payload.message);
        }
      )
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
        (action) => {
          return (
            action.type.endsWith("signin/pending") ||
            action.type.endsWith("signup/pending")
          );
        },
        (state) => {
            state.isLoading= true
        }
      )
      .addMatcher(
        (action) => {
          return (
            action.type.endsWith("signin/fulfilled") ||
            action.type.endsWith("signup/fulfilled") ||
            action.type.endsWith("signin/rejected") ||
            action.type.endsWith("signup/rejected")
          );
        },
        (state) => {
            state.isLoading= false
        }
      )
});

export const RootReducer = MessagerSlice.reducer;
