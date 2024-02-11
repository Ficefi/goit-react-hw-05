import css from "./NewMovies.module.css";

export const NewMovies = ({ data }) => {
  const movies_array = data.slice(0, 6);
  return (
    <ul className={css.new_movies_list}>
      {movies_array.map(({ poster_path, original_title, overview, id }) => (
        <li key={id}>
          <div className={css.movie_container}>
            <div className={css.image_container}>
              <img
                src={`https://image.tmdb.org/t/p/original${poster_path}`}
                className={css.poster_image}
                alt={overview}
              />
              <div className={css.info}>
                <h5 className={css.movie_name}>{original_title}</h5>
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
        </li>
      ))}
    </ul>
  );
};
