import { Link } from "react-router-dom";
import css from "./NewSerials.module.css";

export const NewSerials = ({ data }) => {
  const serials_array = data.slice(0, 6);
  return (
    <ul className={css.new_serials_list}>
      {serials_array.map(({ poster_path, name, overview, id }) => (
        <li key={id}>
          <Link to={`/serials/${id}`}>
            <div className={css.serial_container}>
              <div className={css.image_container}>
                <img
                  src={`https://image.tmdb.org/t/p/original${poster_path}`}
                  className={css.poster_image}
                  alt={overview}
                />
                <div className={css.info}>
                  <h5 className={css.serial_name}>{name}</h5>
                  <p className={css.info_item}>
                    {overview.length < 450
                      ? overview
                      : "Description is too long, you can saw info at serial page"}
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
};
