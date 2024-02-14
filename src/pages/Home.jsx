import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { getMoviesResponse } from "../js/api";
import Header from "../components/Header/Header";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    async function getMovies() {
      try {
        const data = await getMoviesResponse();
        setMovies(data);
      } catch (error) {
        console.error(error);
      }
    }

    getMovies();
  }, []);

  return (
    <>
      <Header />
      <ul>
        {movies.map(({ title, id }) => (
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
