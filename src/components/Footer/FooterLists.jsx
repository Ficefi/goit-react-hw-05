import { VscAccount } from "react-icons/vsc";
import css from "./FooterLists.module.css";

export const FooterLists = () => {
  return (
    <div className={css.list_container}>
      <ul className={css.footer_list_signIn}>
        <h5 className={css.header_element}>
          <VscAccount color="white" className={css.sign_icon} /> Sign in
        </h5>
        <li className={css.list_element}>Personal data</li>
        <li className={css.list_element}>Choosing a Plan</li>
        <li className={css.list_element}>Payment</li>
      </ul>
      <ul className={css.footer_list_movies}>
        <h5 className={css.header_element}>Movies</h5>
        <li className={css.list_element}>Lock Upp</li>
        <li className={css.list_element}>Pavitra Rishta</li>
        <li className={css.list_element}>Girgit</li>
        <li className={css.list_element}>Hai Taubba Season 3</li>
        <li className={css.list_element}>Cartel</li>
        <li className={css.list_element}>Crimes And Confessions</li>
        <li className={css.list_element}>Puncch Beat Season 2</li>
        <li className={css.list_element}>Broken But Beautiful Season 3</li>
      </ul>
      <ul className={css.footer_list_series}>
        <h5 className={css.header_element}>Series</h5>
        <li className={css.list_element}>X.X.X. Season 2</li>
        <li className={css.list_element}>Gandii Baat Season 5</li>
        <li className={css.list_element}>Gandii Baat Season 6</li>
        <li className={css.list_element}>Broken But Beautiful Season 1</li>
        <li className={css.list_element}>Broken But Beautiful Season 2</li>
        <li className={css.list_element}>Class Of 2020</li>
        <li className={css.list_element}>Bekaaboo Season 1</li>
        <li className={css.list_element}>Ragini MMS Returns Season 2</li>
      </ul>
    </div>
  );
};
