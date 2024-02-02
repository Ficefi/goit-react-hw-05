import css from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.description_box}>
        <h1 className={css.hero_article}>
          Dive into a <b>universe</b> of un-ending content and channels
        </h1>
        <button className={css.hero_btn}>
          Start <b>FREE</b> trial
        </button>
      </div>
    </section>
  );
};
