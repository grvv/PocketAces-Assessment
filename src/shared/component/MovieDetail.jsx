import React from "react";
import moment from "moment";
import { emptyImage } from "../helpers";
import { useDispatch } from "react-redux";
import { addToWatchList } from "../../features/watchlist/watchlistSlice";
import { genreMap, randomColor, ratingBadgeColor } from "../helpers";
import { Typography, Badge, Tag, Button, Row, Col } from "antd";

const { Text, Title, Paragraph } = Typography;

export default function MovieDetail({ movie }) {
  const {
    name,
    original_name,
    poster_path,
    backdrop_path,
    original_title,
    release_date,
    vote_average,
    overview,
    first_air_date,
    genre_ids = [],
  } = movie;

  const genreList = genre_ids.map((id) => genreMap[id]).filter(Boolean);
  const dispatch = useDispatch();

  return (
    <>
      <Row justify="center">
        <img
          alt={original_title}
          style={{ marginBottom: "20px", height: "400px" }}
          src={
            poster_path || backdrop_path
              ? `https://image.tmdb.org/t/p/original/${
                  poster_path || backdrop_path
                }`
              : emptyImage
          }
        />
      </Row>
      <Row justify="space-between" align="center">
        <Col>
          <Title level={3} style={{ marginBottom: 0 }}>
            {name || original_name || original_title}
          </Title>
        </Col>
        <Col>
          <Badge
            style={{ backgroundColor: `${ratingBadgeColor(vote_average)}` }}
            count={vote_average}
          />
        </Col>
      </Row>
      <Text type="secondary">
        {moment(first_air_date || release_date).format("dddd, MMMM Do YYYY")}
      </Text>

      <br />

      <div style={{ marginTop: "8px" }}>
        {genreList.length &&
          genreList.map((genre) => (
            <Tag key={genre} color={randomColor()}>
              {genre}
            </Tag>
          ))}
      </div>

      <Paragraph
        ellipsis={{
          rows: 5,
          expandable: true,
        }}
        style={{ marginTop: "20px" }}
      >
        {overview}
      </Paragraph>

      <Button
        block
        style={{ marginTop: "32px" }}
        onClick={() => dispatch(addToWatchList(movie))}
      >
        Add to WatchList
      </Button>
    </>
  );
}
