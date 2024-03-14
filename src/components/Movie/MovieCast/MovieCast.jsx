import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCastByID } from "../../../js/api";
import css from "./MovieCast.module.css";

export const MovieCast = () => {
	const { movieID } = useParams();
	const [items, setItems] = useState([]);

	useEffect(() => {
		const getMovieReviews = async (id) => {
			try {
				const data = await getMovieCastByID(id);
				setItems(data.cast);
			} catch (error) {
				console.log(error);
			}
		};

		getMovieReviews(movieID);
	}, [movieID]);

	return (
		<div>
			{items.length > 0 ? (
				<ul className={css.actor_list}>
					{items.map((item) => (
						<li key={item.id} className={css.actor_container}>
							<img
								src={
									item.profile_path === null
										? `https://via.placeholder.com/256x256?text=${item.original_name}`
										: `https://image.tmdb.org/t/p/original${item.profile_path}`
								}
								alt={item.original_name}
								className={css.actor_image}
							/>
							<h4 className={css.actor_name}>{item.original_name}</h4>
							<h5 className={css.actor_character}>Character:{item.character}</h5>
						</li>
					))}
				</ul>
			) : (
				<p className={css.no_cast}>
					Sorry, but we don`t know anything about cast in this movie
				</p>
			)}
		</div>
	);
};
