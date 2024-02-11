// import { FaHeart } from "react-icons/fa";
import css from "./MovieCard.module.css";

export const MovieCard = ({ items }) => {
  return (
    <li className={css.photo_card}>
      <div className={css.info_container}>
        <img
          src={
            items.poster_path == null
              ? `/src/assets/no_image.png`
              : `https://image.tmdb.org/t/p/original${items.poster_path}`
          }
          alt={items.overview}
          className={css.image}
        />
      </div>
    </li>
  );
};
