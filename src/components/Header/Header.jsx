import { HeaderLogin } from "./HeaderLogin";
import { HeaderNavigation } from "./HeaderNavigation";
import css from "./Header.module.css";

export const Header = () => {
  return (
    <header className={css.header}>
      <HeaderNavigation />
      <HeaderLogin />
    </header>
  );
};
