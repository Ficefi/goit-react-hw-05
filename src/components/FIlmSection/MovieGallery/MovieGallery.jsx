import { MovieCard } from "./MovieCard/MovieCard";
import { Link } from "react-router-dom";
import css from "./MovieGallery.module.css";

export const MovieGallery = ({ data }) => {
  return (
    <div className={css.container}>
      <ul className={css.gallery}>
        {data.map((item) => (
          <Link key={item.id} to={`${item.id}`}>
            <MovieCard items={item} />
            {console.log(item.id)}
          </Link>
        ))}
      </ul>
    </div>
  );
};
