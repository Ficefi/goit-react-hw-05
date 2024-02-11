import { useEffect, useState } from "react";
import { apiResponse } from "../../js/api";
import { NewMovies } from "./NewMovies/NewMovies";

export const FilmSection = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const Api = async () => {
      try {
        const data = await apiResponse();
        setInfo(data);
      } catch (error) {
        console.log(error);
      }
    };
    Api();
  }, []);

  return (
    <div>
      <h2>New Movies</h2>
      <NewMovies data={info} />
    </div>
  );
};
