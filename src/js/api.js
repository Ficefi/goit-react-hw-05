import axios from "axios";

const key = "1de42737f0cfbbed709839ac9ec078eb";

export const getMoviesResponse = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${key}`
  );

  return response.data.results;
};

export const getSearchMovies = async (query) => {
  const searchResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?`, {
    params: {
      language: "en-US",
      query: query,
      api_key: key,
    },
  });

  return searchResponse.data.results;
};

export const getMovieDescriptionByID = async (id) => {
  const movieDescriptionID = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=${key}`
  );

  return movieDescriptionID.data;
};

export const getMovieReviewsByID = async (id) => {
  const movieReviewsID = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&api_key=${key}`
  );

  return movieReviewsID.data;
};

export const getMovieCastByID = async (id) => {
  const movieCastID = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US&api_key=${key}`
  );

  return movieCastID.data;
};
