import axios from "axios";

const baseAxios = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

export default baseAxios;
