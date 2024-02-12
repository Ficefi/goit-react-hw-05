import { useEffect, useState } from "react";
import { apiResponse, getSerials } from "../../js/api";
import { NewMovies } from "./NewMovies/NewMovies";
import { NewSerials } from "./NewSerials/NewSerials";

export const FilmSection = () => {
  const [movies, setMovies] = useState([]);
  const [serials, setSerials] = useState([]);

  useEffect(() => {
    const movieResponse = async () => {
      try {
        const data_movie = await apiResponse();
        setMovies(data_movie);
      } catch (error) {
        console.log(error);
      }
    };

    const serialResponse = async () => {
      try {
        const data_serial = await getSerials();
        setSerials(data_serial);
      } catch (error) {
        console.log(error);
      }
    };

    movieResponse();
    serialResponse();
  }, []);

  return (
    <div>
      <h2>New Series</h2>
      <NewSerials data={serials} />
      <h2>New Movies</h2>
      <NewMovies data={movies} />
    </div>
  );
};
