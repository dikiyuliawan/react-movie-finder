import axios from "axios";

export const getMovieList = async () => {
  const result = await axios.get(
    `${process.env.REACT_APP_BASEURL}/movie/popular?api_key=${process.env.REACT_APP_APIKEY}`
  );
  return result.data.results;
};

export const searchMovie = async (q) => {
  const result = await axios.get(q);
  return;
};
