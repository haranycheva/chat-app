import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://6f01-46-164-129-202.ngrok-free.app";

const setAuthHeader = (token) => {
  axios.defaults.headers.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.Authorization = ``;
};

export const signUp = createAsyncThunk(
  "auth/signup",
  async ({ email, token, userName }, thunkApi) => {
    setAuthHeader(token);
    try {
      const res = await axios.post("/api/users/signup", {
        email,
        token: `Bearer ${token}`,
        userName,
      });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const signIn = createAsyncThunk(
  "auth/signin",
  async ({ email, token }, thunkApi) => {
    setAuthHeader(token);
    try {
      const res = await axios.post("/api/users/signin", {
        email,
        token: `Bearer ${token}`,
      });
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    const res = await axios.post("/api/users/logout");

    clearAuthHeader();
    return res.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const addChat = createAsyncThunk(
  "chats/add",
  async (chat, thunkApi) => {
    try {
      const res = await axios.post(`/api/chats/`, chat);
      return res.data.addedChat;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const sendMessage = createAsyncThunk(
    "message/send",
    async ({ chatId, message  }, thunkApi) => {
      try {
        const res = await axios.post(`/api/chats/${chatId}/`, message);
        console.log(res.data);
        return res.data;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );
