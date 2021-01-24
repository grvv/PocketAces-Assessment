import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchTrending,
  selectAllTrendingVideos,
  selectTrendingError,
  selectTrendingLoadingState,
} from "./trendingSlice";

import MovieChart from "../../shared/component/MovieChart.jsx";

export default function Trending() {
  const trendingVideos = useSelector(selectAllTrendingVideos);
  const trendingAPIError = useSelector(selectTrendingError);
  const trendingLoadingState = useSelector(selectTrendingLoadingState);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrending());
  }, [dispatch]);

  if (trendingLoadingState === "pending") {
    return <h1>Loading...</h1>;
  }

  if (trendingAPIError) {
    return <h1>Error Occurred</h1>;
  }
  return <MovieChart name="Trending" movieList={trendingVideos} />;
}
