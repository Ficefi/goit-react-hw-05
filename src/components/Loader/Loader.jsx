import { Triangle } from "react-loader-spinner";
import css from "./Loader.module.css";

export const Loader = () => {
  return (
    <div className={css.triangle}>
      <Triangle
        visible={true}
        height="80"
        width="80"
        color="#000"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
