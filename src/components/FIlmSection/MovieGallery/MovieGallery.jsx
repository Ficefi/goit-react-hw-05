import { MovieCard } from "./MovieCard/MovieCard";
import { Link } from "react-router-dom";
import css from "./MovieGallery.module.css";

export const MovieGallery = ({ data }) => {
  return (
    <div className={css.container}>
      <ul className={css.gallery}>
        {data.map((items) => (
          <Link key={items.id} to={`${items.id}`}>
            <MovieCard item={items} />
          </Link>
        ))}
      </ul>
    </div>
  );
};
