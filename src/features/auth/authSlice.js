import { createSlice } from "@reduxjs/toolkit";

const TOKEN_KEY = "MOVIE_APP_TOKEN";
const getToken = () => {
  try {
    const token = localStorage.getItem(TOKEN_KEY);
    return token;
  } catch (error) {
    return "";
  }
};

const initialState = {
  token: getToken() || null,
  isAuthenticated: Boolean(getToken()),
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, { payload }) {
      if (payload) {
        state.token = payload;
        state.isAuthenticated = true;
        localStorage.setItem(TOKEN_KEY, payload);
      }
    },
    logout(state) {
      state.token = null;
      state.isAuthenticated = false;
      localStorage.clear();
    },
  },
});

export const { login, logout } = auth.actions;

export default auth.reducer;
