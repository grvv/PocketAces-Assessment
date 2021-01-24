import React from "react";
import { useDispatch } from "react-redux";
import { Card, Menu, Dropdown, Button } from "antd";
import {
  addToWatchList,
  removeFromWatchList,
} from "../../features/watchlist/watchlistSlice";
import { emptyImage } from "../helpers";
import { showInfo } from "../../features/movieInfo/movieInfoSlice";
import { EllipsisOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Meta } = Card;

export default function MovieCard({ movie, hideAction }) {
  const dispatch = useDispatch();

  const {
    name,
    original_name,
    original_title,
    backdrop_path,
    poster_path,
  } = movie;

  return (
    <Card
      hoverable
      className="movie-card-styling"
      cover={
        <img
          alt={`movie-thumbnail`}
          src={
            poster_path || backdrop_path
              ? `https://image.tmdb.org/t/p/original/${
                  poster_path || backdrop_path
                }`
              : emptyImage
          }
        />
      }
      actions={[
        <InfoCircleOutlined onClick={() => dispatch(showInfo(movie))} />,
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="0">
                <Button
                  block
                  onClick={() => {
                    if (hideAction) {
                      dispatch(removeFromWatchList({ id: movie.id }));
                    } else {
                      dispatch(addToWatchList(movie));
                    }
                  }}
                >
                  {hideAction ? "Remove from Watchlist" : "Add to Watch List"}
                </Button>
              </Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <EllipsisOutlined key="ellipsis" />
        </Dropdown>,
      ]}
    >
      <Meta title={name || original_name || original_title} />
    </Card>
  );
}
