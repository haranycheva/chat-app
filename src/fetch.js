import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://1a26-176-37-162-35.ngrok-free.app";

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
        return {data: res.data, chatId};
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

  export const deleteMessage = createAsyncThunk(
    "message/delete",
    async ({ chatId, messageId  }, thunkApi) => {
      try {
        const res = await axios.delete(`/api/chats/${chatId}/${messageId}`);
        console.log(res.data);
        console.log( chatId, messageId)
        return { chatId, messageId  };
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

  export const deleteChat = createAsyncThunk(
    "chat/delete",
    async ({chatId}, thunkApi) => {
      try {
        const res = await axios.delete(`/api/chats/${chatId}`);
        return res.data._id;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    }
  );

