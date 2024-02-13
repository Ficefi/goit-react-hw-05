import css from "./Error.module.css";

export const Error = () => {
  return (
    <div>
      <h2 className={css.error}>Sorry, but we have some errors</h2>
      <h3 className={css.desire}>Please, try reload site</h3>
    </div>
  );
};
