import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSerialReviewsByID } from "../../../js/api";
import { FaUserCircle } from "react-icons/fa";
import css from "./Serial_Reviews.module.css";

export const Serial_Reviews = () => {
  const { serialID } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getSerialReviews = async (id) => {
      try {
        const data = await getSerialReviewsByID(id);
        setItems(data.results);
      } catch (error) {
        console.log(error);
      }
    };

    getSerialReviews(serialID);
  }, [serialID]);

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
