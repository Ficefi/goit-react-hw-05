import { VscAccount } from "react-icons/vsc";
import { LuSearch } from "react-icons/lu";
import css from "./HeaderLogin.module.css";

export const HeaderLogin = () => {
  return (
    <div className={css.login_box}>
      <div>
        <button className={css.search_btn}>
          <LuSearch color="white" className={css.search_icon} size={24} />
          Search
        </button>
      </div>
      <a href="/" className={css.signIn_btn}>
        <VscAccount color="white" className={css.signIn_icon} size={24} />
        Sign in
      </a>
    </div>
  );
};
