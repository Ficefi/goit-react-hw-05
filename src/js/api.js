import axios from "axios";

const key = "1de42737f0cfbbed709839ac9ec078eb";

export const apiResponse = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=${key}`
  );
  // console.log(response.data.results);
  return response.data.results;
};

export const apiSearchResponse = async (query, page = 1) => {
  const searchResponse = await axios.get(`https://api.themoviedb.org/3/search/movie?`, {
    params: {
      language: "en-US",
      page: page,
      query: query,
      api_key: key,
    },
  });

  console.log(searchResponse.data.results);

  return searchResponse.data.results;
};
