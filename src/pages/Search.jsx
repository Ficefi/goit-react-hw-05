import { useState } from "react";
import { getSearchMovies } from "../js/api";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import Header from "../components/Header/Header";

export default function Search() {
  const [movie, setMovie] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  const findMovie = async () => {
    try {
      const data = await getSearchMovies(searchParams.get("query"));
      setMovie(data);
    } catch (error) {
      console.error(error);
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
    <>
      <Header />

      <form onSubmit={handleSubmit}>
        <input name="search" onChange={handleChange} placeholder="Search" />
        <button type="submit">Submit</button>
      </form>

      <ul>
        {movie.map(({ title, id }) => (
          <li key={id}>
            <Link to={`/movies/${id}`} state={location}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
