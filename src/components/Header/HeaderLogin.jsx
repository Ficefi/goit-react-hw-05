import { VscAccount } from "react-icons/vsc";
import { LuSearch } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./HeaderLogin.module.css";

const buildLinkClass = ({ isActive }) => {
  return clsx(css.search_btn, isActive && css.active);
};

export const HeaderLogin = () => {
  return (
    <div className={css.login_box}>
      <NavLink to="/search" className={buildLinkClass}>
        <LuSearch color="white" className={css.search_icon} size={24} />
        Search
      </NavLink>
      <a href="/" className={css.signIn_btn}>
        <VscAccount color="white" className={css.signIn_icon} size={24} />
        Sign in
      </a>
    </div>
  );
};
