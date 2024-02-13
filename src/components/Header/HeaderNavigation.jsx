import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./HeaderNavigation.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.categoryElement, isActive && css.active);
};

export const HeaderNavigation = () => {
  return (
    <div className={css.navigation}>
      <a href="/" className={css.header_logo}>
        <img src="/src/assets/onair-logo.svg" alt="logo_onair" />
      </a>
      <ul className={css.categoriesList}>
        <li>
          <NavLink className={buildLinkClass} to="/movies">
            Movies
          </NavLink>
        </li>
        <li>
          <NavLink className={css.categoryElement} to="/serials">
            Serials
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
