import { FooterSocial } from "./FooterSocial";
import { FooterLists } from "./FooterLists";
import css from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer className={css.footer}>
      <FooterSocial />
      <FooterLists />
    </footer>
  );
};
