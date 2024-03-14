import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMoviesResponse } from "../../../js/api";
import { MovieCard } from "./Movie/MovieCard";

export const MovieList = () => {
	const [movies, setMovies] = useState([]);
	const location = useLocation();

	useEffect(() => {
		async function getMovies() {
			try {
				const data = await getMoviesResponse();
				setMovies(data);
			} catch (error) {
				console.error(error);
			}
		}

		getMovies();
	}, []);

	return (
		<ul>
			{movies.map(({ title, id }) => (
				<MovieCard key={id} movieID={id} movieTitle={title} locate={location} />
			))}
		</ul>
	);
};
