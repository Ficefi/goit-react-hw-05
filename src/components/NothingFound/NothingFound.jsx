import css from "./NothingFound.module.css";

export const NothingFound = () => {
  return (
    <div className={css.not_found}>
      <h1>Error 404</h1>
      <h2>Sorry but we doesn`t found that page</h2>
      <h3>Please return to main page</h3>
    </div>
  );
};
