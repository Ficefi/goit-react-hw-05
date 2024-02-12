// import { FaHeart } from "react-icons/fa";
import css from "./MovieCard.module.css";

export const MovieCard = ({ item }) => {
  return (
    <li className={css.photo_card}>
      <div className={css.info_container}>
        <img
          src={
            item.poster_path == null
              ? `https://via.placeholder.com/182x273?text=${item.title}`
              : `https://image.tmdb.org/t/p/original${item.poster_path}`
          }
          alt={item.overview}
          className={css.image}
        />
      </div>
    </li>
  );
};
