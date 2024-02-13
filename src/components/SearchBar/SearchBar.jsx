import { useState } from "react";
import { apiSearchResponse } from "../../js/api";
import { useSearchParams, useLocation } from "react-router-dom";
import { LuSearch } from "react-icons/lu";
import { MovieGallery } from "../FIlmSection/MovieGallery/MovieGallery";
import css from "./SearchBar.module.css";
import { Error } from "../Error/Error";

export const SearchBar = () => {
  const [movie, setMovie] = useState([]);
  const [error, setError] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const findMovie = async () => {
    try {
      const data = await apiSearchResponse(searchParams.get("query"));
      setMovie(data);
      setError(false);
    } catch (error) {
      setError(true);
    }
  };

  const handleChange = (event) => {
    setSearchParams({ query: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    findMovie();
    event.target.reset();
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={css.search_form}>
        <input
          name="search"
          onChange={handleChange}
          className={css.search_bar}
          placeholder="Search"
        />
        <button className={css.search_btn} type="submit">
          <LuSearch size={25} color="white" />
        </button>
      </form>
      {error && <Error />}
      {!error && <MovieGallery data={movie} link_state={location} />}
    </div>
  );
};
