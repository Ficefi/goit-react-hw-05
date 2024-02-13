import { NavLink, useParams, Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import { getSerialDescriptionByID } from "../../js/api";
import clsx from "clsx";
import css from "./Serial.module.css";

export const Serial = () => {
  const { serialID } = useParams();
  const [items, setItems] = useState([]);

  const buildLinkClass = ({ isActive }) => {
    return clsx(css.bottom_headtext, isActive && css.active);
  };

  const getColor = (value) => {
    switch (value) {
      case 10:
        return css.very_good;
      case 9:
      case 8:
        return css.good;
      case 7:
      case 6:
        return css.neutral;
      case 5:
      case 4:
      case 3:
      case 2:
        return css.bad;
      default:
        return css.ny_takoe;
    }
  };

  useEffect(() => {
    const getSerial = async (id) => {
      const data = await getSerialDescriptionByID(id);
      setItems([data]);
    };

    getSerial(serialID);
  }, [serialID]);

  return (
    <>
      <Header />
      <main className={css.serial_main}>
        {items.map((item) => (
          <div key={item.id} className={css.serial_container}>
            <div className={css.poster_container}>
              <img
                src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                className={css.serial_poster}
                loading="lazy"
                alt={item.overview}
              />
            </div>
            <div>
              <h2 className={css.serial_title}>{item.name}</h2>
              <h3 className={css.serial_headtext}>
                User Rating:
                <span className={clsx(getColor(Math.round(item.vote_average)))}>
                  {item.vote_average.toFixed(1)}
                </span>
              </h3>
              <h3 className={css.serial_headtext}>Overview</h3>
              <p className={css.serial_overview}>{item.overview}</p>
              <h3 className={css.serial_headtext}>Genres</h3>
              <ul className={css.genres_list}>
                {item.genres.map((genre) => (
                  <li key={genre.id}>
                    <p className={css.serial_genres}>{genre.name}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
        <div className={css.add_info_container}>
          <NavLink to="reviews" className={buildLinkClass}>
            Reviews
          </NavLink>
          <NavLink to="cast" className={buildLinkClass}>
            Cast
          </NavLink>
        </div>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};
