import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../baseAxios";

export const searchMovies = createAsyncThunk(
  "searchSlice/searchMovies",
  async (searchTerm, { rejectWithValue }) => {
    try {
      const response = await axios.get(
        `search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API_KEY}&language=en-US&query=${searchTerm}&page=1`
      );
      return response.data.results;
    } catch (error) {
      if (!error.response) {
        throw error;
      }

      return rejectWithValue(error.response.data);
    }
  }
);

const searchSlice = createSlice({
  name: "search",
  initialState: {
    entities: [],
    error: null,
    loading: "idle",
    searchTerm: "",
  },
  reducers: {},
  extraReducers: {
    [searchMovies.pending]: (state, action) => {
      state.loading = "pending";
      state.searchTerm = action.meta.arg;
    },

    [searchMovies.fulfilled]: (state, action) => {
      state.loading = "fulfilled";
      state.entities = action.payload;
    },

    [searchMovies.rejected]: (state, action) => {
      if (action.payload) {
        state.error = action.payload.status_message;
      } else {
        state.error = action.error;
      }
      state.loading = "idle";
    },
  },
});

export const selectSearchResults = (state) => state.search.entities;

export const selectSearchError = (state) => state.search.error;

export const selectSearchLoadingState = (state) => state.search.loading;

export default searchSlice.reducer;
