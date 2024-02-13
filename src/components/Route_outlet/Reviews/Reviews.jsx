import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviewsByID } from "../../../js/api";
import { FaUserCircle } from "react-icons/fa";
import css from "./Reviews.module.css";

export const Reviews = () => {
  const { movieID } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getMovieReviews = async (id) => {
      try {
        const data = await getMovieReviewsByID(id);
        setItems(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getMovieReviews(movieID);
  }, [movieID]);

  return (
    <div className={css.user_container}>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id}>
            <div className={css.name_container}>
              <FaUserCircle color="white" className={css.author_icon} size={40} />
              <h5 className={css.author_name}>{item.author}</h5>
            </div>
            <p className={css.author_review}>{item.content}</p>
          </div>
        ))
      ) : (
        <p className={css.no_review}>Sorry, but we don`t have any reviews</p>
      )}
    </div>
  );
};
