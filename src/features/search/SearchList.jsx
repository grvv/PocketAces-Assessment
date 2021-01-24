import React from "react";
import { useSelector } from "react-redux";
import {
  selectSearchResults,
  selectSearchError,
  selectSearchLoadingState,
} from "./searchSlice";

import MovieChart from "../../shared/component/MovieChart.jsx";

export default function SearchList() {
  const searchResult = useSelector(selectSearchResults);
  const searchAPIError = useSelector(selectSearchError);
  const searchLoadingState = useSelector(selectSearchLoadingState);

  if (searchLoadingState === "pending") {
    return <h1>Loading...</h1>;
  }

  if (searchAPIError) {
    return <h1>Error Occurred</h1>;
  }
  return <MovieChart name="Search Results" movieList={searchResult} />;
}
