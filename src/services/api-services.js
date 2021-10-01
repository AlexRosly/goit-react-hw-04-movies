import { API_KEY } from "./key";
import axios from "axios";

axios.defaults.baseURL = `https://api.themoviedb.org/3/`;

export const fetchMovies = async () => {
  const { data } = await axios.get(`trending/movie/day?api_key=${API_KEY}`);
  const result = data.results;
  return result;
};

export const fetchMovieDetails = async (id) => {
  const { data } = await axios.get(
    `movie/${id}?api_key=${API_KEY}&language=en-US`
  );
  return data;
};

export const fetchSearchMovie = async (query, page) => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&page=${page}&language=en-US&query=${query}`
  );
  const result = await data.results;
  if (result.length === 0) {
    throw new Error(`Not found ${query}`);
  }
  return result;
};

export const fetchMovieCredits = async (id) => {
  const { data } = await axios.get(
    `movie/${id}/credits?api_key=${API_KEY}&language=en-US`
  );
  const result = data.cast;
  if (result.length === 0) {
    throw new Error(`404 Not found`);
  }
  return result;
};

export const fetchMovieReviews = async (id) => {
  const { data } = await axios.get(
    `movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=1`
  );
  const result = data.results;
  if (result.length === 0) {
    throw new Error(`404 Not found`);
  }
  return result;
};
