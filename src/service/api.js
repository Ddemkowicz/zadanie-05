import axios from 'axios';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMzA0MDU0OGQ2MjcyNGRmNTc5MTE3YzdhNTRjY2Y3YiIsInN1YiI6IjY0N2M0ODllOTM4MjhlMDBkY2RkMmQwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oZ753rYnCGi5ODuHjhxkcjRH0b9I3-Ufeq7IdUCc1ak',
  },
};

const fetchGetTrending = async () => {
  const response = axios.get(
    'https://api.themoviedb.org/3/trending/all/day?language=en-US',
    options
  );
  return (await response).data.results;
};

const fetchSearchMovies = async query => {
  const response = axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
    options
  );
  return (await response).data;
};

const fetchGetMoviesDetails = async movieId => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`,
    options
  );
  return await response;
};

const fetchGetMoviesCredits = async movieId => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    options
  );
  return (await response).data;
};

const fetchGetMoviesReviews = async movieId => {
  const response = axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    options
  );
  return (await response).data.results;
};

export const api = {
  fetchGetTrending,
  fetchSearchMovies,
  fetchGetMoviesDetails,
  fetchGetMoviesCredits,
  fetchGetMoviesReviews,
};
