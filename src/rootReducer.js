import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./features/auth/authSlice";
import movieInfoReducer from "./features/movieInfo/movieInfoSlice";
import trendingReducer from "./features/trending/trendingSlice";
import watchListReducer from "./features/watchlist/watchlistSlice";
import searchReducer from "./features/search/searchSlice.js";

const rootReducer = combineReducers({
  auth: authReducer,
  trending: trendingReducer,
  movieInfo: movieInfoReducer,
  watchList: watchListReducer,
  search: searchReducer,
});

export default rootReducer;
