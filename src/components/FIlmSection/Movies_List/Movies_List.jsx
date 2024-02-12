import { useState, useEffect } from "react";
import { apiResponse } from "../../../js/api";
import { Link } from "react-router-dom";
import css from "./Movies_List.module.css";

export const Movies_List = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const Api = async () => {
      try {
        const data = await apiResponse();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    Api();
  }, []);

  return (
    <div>
      <ul className={css.new_movies_list}>
        {movies.map(({ poster_path, title, overview, id }) => (
          <li key={id}>
            <Link to={`${id}`}>
              <div className={css.movie_container}>
                <div className={css.image_container}>
                  <img
                    src={`https://image.tmdb.org/t/p/original${poster_path}`}
                    className={css.poster_image}
                    alt={overview}
                  />
                  <div className={css.info}>
                    <h5 className={css.movie_name}>{title}</h5>
                    <p className={css.info_item}>
                      {overview.length < 450
                        ? overview
                        : "Description is too long, you can saw info at movie page"}
                    </p>
                    <button className={css.watch_now}>
                      Watch <b>Now</b>
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      );
    </div>
  );
};
