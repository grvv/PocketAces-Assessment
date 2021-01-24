import React from "react";
import { logout } from "../auth/authSlice";
import { useSelector, useDispatch } from "react-redux";
import { Layout, Button, Col, Row, Drawer } from "antd";
import SearchInput from "../search/SearchInput";
import MovieDetail from "../../shared/component/MovieDetail";
import Trending from "../trending/Trending";
import WatchList from "../watchlist/WatchList";
import SearchList from "../search/SearchList";
import { closeInfo } from "../movieInfo/movieInfoSlice";
import { emptyWatchList } from "../watchlist/watchlistSlice";

const { Header, Content } = Layout;

export default function Dashboard() {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.movieInfo.modalState);
  const selectedMovie = useSelector((state) => state.movieInfo.selectedMovie);
  const searchTerm = useSelector((state) => state.search.searchTerm);

  return (
    <>
      <Layout>
        <Header>
          <Row justify="space-between">
            <Col>
              <h1 style={{ color: "white" }}>Welcome to the Movie App</h1>
            </Col>

            <Col>
              <Button
                ghost
                danger
                onClick={() => {
                  dispatch(logout());
                  dispatch(emptyWatchList());
                }}
              >
                Logout
              </Button>
            </Col>
          </Row>
        </Header>

        <Content style={{ padding: "32px 32px 0px 32px" }}>
          <SearchInput />
          {Boolean(searchTerm.trim().length) && <SearchList />}
          <Trending />
          <WatchList />
        </Content>
      </Layout>

      <Drawer
        width={500}
        closable={false}
        placement="right"
        destroyOnClose={true}
        onClose={() => dispatch(closeInfo())}
        visible={modalState}
      >
        {selectedMovie && <MovieDetail movie={selectedMovie} />}
      </Drawer>
    </>
  );
}
