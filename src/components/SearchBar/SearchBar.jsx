import css from "./SearchBar.module.css";
import { LuSearch } from "react-icons/lu";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (event) => {
    event.preventDefault();

    onSearch(event.target.elements.search.value);
    event.target.clear;
  };

  return (
    <form onSubmit={handleSubmit} className={css.search_form}>
      <input name="search" className={css.search_bar} placeholder="Search" />
      <button className={css.search_btn} type="submit">
        <LuSearch size={25} color="white" />
      </button>
    </form>
  );
};
