import React from "react";
import { Input } from "antd";
import { useDispatch } from "react-redux";
import { searchMovies } from "./searchSlice";
import { useDebounce, useUpdateEffect } from "../../shared/hooks";
import { useState } from "react";
import { SearchOutlined } from "@ant-design/icons";

export default function SearchInput() {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useUpdateEffect(() => {
    dispatch(searchMovies(debouncedSearchTerm));
  }, [debouncedSearchTerm.trim()]);

  return (
    <Input
      size="large"
      value={searchTerm}
      placeholder="Search movies..."
      addonAfter={<SearchOutlined />}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
