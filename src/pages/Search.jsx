import { useEffect, useState } from "react";
import { Header } from "../components/Header/Header";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { apiSearchResponse } from "../js/api";
import { MovieGallery } from "../components/FIlmSection/MovieGallery/MovieGallery";

export const Search = () => {
  const [movie, setMovie] = useState([]);
  // const [page, setPage] = useState(1);

  // const morePage = () => {
  //   setPage(page + 1);
  // };

  const findMovie = async (query) => {
    try {
      const data = await apiSearchResponse(query);
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   findMovie();
  // });

  return (
    <>
      <Header />
      <SearchBar onSearch={findMovie} />
      <MovieGallery data={movie} />
    </>
  );
};
