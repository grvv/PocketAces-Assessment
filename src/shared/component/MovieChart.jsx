import React from "react";
import { Empty } from "antd";
import MovieCard from "./MovieCard";

export default function MovieChart({ name, movieList, hideAction = false }) {
  return (
    <div className="chart">
      <h2 className="chart-name">{name}</h2>

      {!movieList.length ? (
        <Empty />
      ) : (
        <div className="movies-container">
          {movieList.map((movie) => (
            <MovieCard movie={movie} key={movie.id} hideAction={hideAction} />
          ))}
        </div>
      )}
    </div>
  );
}
