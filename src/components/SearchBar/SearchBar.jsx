import { useState } from "react";
import { apiSearchResponse } from "../../js/api";
import { useSearchParams, useLocation } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { MovieGallery } from "../FIlmSection/MovieGallery/MovieGallery";
import css from "./SearchBar/SearchBar.module.css";

export const SearchBar = () => {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const findMovie = async () => {
    try {
      const data = await apiSearchResponse(searchParams("query"));
      setMovie(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSearchParams({ query: event.target.search.value });
    findMovie();
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.search_form}>
        <input name="search" className={css.search_bar} placeholder="Search" />
        <button className={css.search_btn} type="submit">
          <LuSearch size={25} color="white" />
        </button>
      </form>
      <MovieGallery data={movie} link_state={location} />;
    </div>
  );
};
