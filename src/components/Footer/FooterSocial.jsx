import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

import css from "./FooterSocial.module.css";

export const FooterSocial = () => {
  return (
    <div className={css.social_container}>
      <div className={css.footer_logo}>
        <a href="/">
          <img src="../src/assets/white-onair-logo.svg" alt="white_logo" />
        </a>
      </div>
      <p className={css.footer_description}>
        On Air, we offer original, exclusive and premium stories. Everything you want to watch,
        anytime, anywhere and as much.
      </p>
      <div className={css.online_markets_box}>
        <a href="" className={css.applestore_logo}>
          <img src="../src/assets/appstore.svg" alt="appstore" />
        </a>
        <a href="">
          <img src="../src/assets/googleplay.svg" alt="googleplay" />
        </a>
      </div>
      <ul className={css.footer_social}>
        <li className={css.social_link}>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            <FaFacebookSquare size={20} color="white" className={css.facebook} />
          </a>
        </li>
        <li className={css.social_link}>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <FaInstagram size={20} color="white" className={css.instagram} />
          </a>
        </li>
        <li className={css.social_link}>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
            <BsTwitterX size={20} color="white" className={css.twitter} />
          </a>
        </li>
        <li className={css.social_link}>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FaYoutube size={20} color="white" className={css.youtube} />
          </a>
        </li>
      </ul>
      <div>
        <ul className={css.privacy_box}>
          <li>
            <a href="#" className={css.privacy_text}>
              Terms of use
            </a>
          </li>
          <li>
            <a href="#" className={css.privacy_text}>
              Privacy Policy
            </a>
          </li>
        </ul>
        <p className={css.copyright}>Copyright © 2024 On Air. All rights reserved.</p>
      </div>
    </div>
  );
};
