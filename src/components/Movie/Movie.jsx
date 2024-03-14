import { NavLink, useParams, Outlet, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getMovieDescriptionByID } from "../../js/api";
import { FaArrowLeft } from "react-icons/fa6";
import Navigation from "../Navigation/Navigation";
import clsx from "clsx";
import css from "./Movie.module.css";

export const Movie = () => {
	const { movieID } = useParams();
	const [items, setItems] = useState([]);
	const location = useLocation();
	const returnLink = useRef(location.state);

	const buildLinkClass = ({ isActive }) => {
		return clsx(css.bottom_headtext, isActive && css.active);
	};

	const getColor = (value) => {
		switch (value) {
			case 10:
				return css.very_good;
			case 9:
			case 8:
				return css.good;
			case 7:
			case 6:
				return css.neutral;
			case 5:
			case 4:
			case 3:
			case 2:
				return css.bad;
			default:
				return css.ny_takoe;
		}
	};

	useEffect(() => {
		const getMovie = async (id) => {
			try {
				const data = await getMovieDescriptionByID(id);
				setItems([data]);
			} catch (error) {
				console.error(error);
			}
		};

		getMovie(movieID);
	}, [movieID]);

	return (
		<>
			<Navigation />
			<main className={css.movie_main}>
				<NavLink to={returnLink.current ?? "/"} className={css.return}>
					<FaArrowLeft color="black" size={32} className={css.return_arrow} />
				</NavLink>

				{items.map((item) => (
					<div key={item.id} className={css.movie_container}>
						<div className={css.poster_container}>
							<img
								src={
									item.poster_path == null
										? `https://via.placeholder.com/400x600?text=${item.title}`
										: `https://image.tmdb.org/t/p/original${item.poster_path}`
								}
								className={css.movie_poster}
								loading="lazy"
								alt={item.overview}
							/>
						</div>
						<div>
							<h2 className={css.movie_title}>{item.title}</h2>
							<h3 className={css.movie_headtext}>
								User Rating:
								<span className={clsx(getColor(Math.round(item.vote_average)))}>
									{item.vote_average.toFixed(1)}
								</span>
							</h3>
							<h3 className={css.movie_headtext}>Overview</h3>
							<p className={css.movie_overview}>{item.overview}</p>
							<h3 className={css.movie_headtext}>Genres</h3>
							<ul className={css.genres_list}>
								{item.genres.map((genre) => (
									<li key={genre.id}>
										<p className={css.movie_genres}>{genre.name}</p>
									</li>
								))}
							</ul>
						</div>
					</div>
				))}
				<div className={css.add_info_container}>
					<NavLink to="reviews" className={buildLinkClass}>
						Reviews
					</NavLink>
					<NavLink to="cast" className={buildLinkClass}>
						Cast
					</NavLink>
				</div>
				<Outlet />
			</main>
		</>
	);
};
