import { createSlice } from "@reduxjs/toolkit";
import { addChat, logout, signIn, signUp } from "../fetch";

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
