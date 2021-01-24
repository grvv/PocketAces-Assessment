import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedMovie: null,
  modalState: false,
};

const modal = createSlice({
  name: "modal",
  initialState,
  reducers: {
    showInfo(state, { payload }) {
      state.selectedMovie = payload;
      state.modalState = true;
    },
    closeInfo(state) {
      state.selectedMovie = null;
      state.modalState = false;
    },
  },
});

export const { showInfo, closeInfo } = modal.actions;

export default modal.reducer;
