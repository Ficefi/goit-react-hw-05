import css from "./HeaderNavigation.module.css";

export const HeaderNavigation = () => {
  return (
    <div className={css.navigation}>
      <a href="/" className={css.header_logo}>
        <img src="/src/assets/onair-logo.svg" alt="logo_onair" />
      </a>
      <ul className={css.categoriesList}>
        <li>
          <a className={css.categoryElement} href="#">
            Movies
          </a>
        </li>
        <li>
          <a className={css.categoryElement} href="#">
            Series
          </a>
        </li>
        <li>
          <a className={css.categoryElement} href="#">
            Channels
          </a>
        </li>
      </ul>
    </div>
  );
};
