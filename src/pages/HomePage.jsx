import Navigation from "../components/Navigation/Navigation";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { getMoviesResponse } from "../js/api";
import { MovieList } from "../components/Movie/MovieList/MovieList";

export default function HomePage() {
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
		<>
			<Navigation />
			<MovieList array={movies} locate={location} />
		</>
	);
}
