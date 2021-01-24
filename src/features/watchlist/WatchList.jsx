import React, { useEffect } from "react";
import { selectWatchList } from "./watchlistSlice";
import { WATCH_LIST_KEY } from "../../shared/helpers";
import { useSetLocalStorage } from "../../shared/hooks";
import { useSelector } from "react-redux";

import MovieChart from "../../shared/component/MovieChart.jsx";

export default function WatchList() {
  const watchList = useSelector(selectWatchList);
  const [syncLocalStorage] = useSetLocalStorage(WATCH_LIST_KEY);

  useEffect(() => {
    syncLocalStorage(watchList);
  }, [syncLocalStorage, watchList]);

  return (
    <MovieChart name="WatchList" movieList={watchList} hideAction={true} />
  );
}
