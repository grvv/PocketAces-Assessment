import { message } from "antd";
import { WATCH_LIST_KEY } from "../../shared/helpers";
import { createSlice } from "@reduxjs/toolkit";

const getWatchList = () => {
  try {
    const watchList = localStorage.getItem(WATCH_LIST_KEY);
    return JSON.parse(watchList);
  } catch (error) {
    localStorage.removeItem(WATCH_LIST_KEY);
    return [];
  }
};

const initialState = {
  entities: getWatchList() || [],
};

const watchList = createSlice({
  name: "watchlist",
  initialState,
  reducers: {
    addToWatchList(state, { payload }) {
      const movieAlreadyExists = state.entities.find(
        ({ id }) => id === payload.id
      );
      if (!movieAlreadyExists) {
        state.entities.push(payload);
        message.success("Movie Added to the WatchList");
      } else {
        message.error("Movie is Already in the WatchList");
      }
    },
    removeFromWatchList(state, { payload }) {
      state.entities = state.entities.filter(({ id }) => id !== payload.id);
      message.success("Movie removed from the WatchList");
    },
    emptyWatchList(state) {
      state.entities = [];
    },
  },
});

export const {
  addToWatchList,
  removeFromWatchList,
  emptyWatchList,
} = watchList.actions;

export const selectWatchList = (state) => state.watchList.entities;

export default watchList.reducer;
