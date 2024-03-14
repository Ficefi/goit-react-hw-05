import { useState } from "react";
import { getSearchMovies } from "../js/api";
import { useSearchParams, useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import Navigation from "../components/Navigation/Navigation";

export default function MoviesPage() {
	const [movie, setMovie] = useState([]);
	const [searchParams, setSearchParams] = useSearchParams();
	const location = useLocation();

	const handleSubmit = (event) => {
		event.preventDefault();

		searchParams.set("query", event.target.search.value ?? "");
		setSearchParams(searchParams);

		event.target.reset();
	};

	useEffect(() => {
		const findMovie = async () => {
			try {
				const data = await getSearchMovies(searchParams.get("query"));
				setMovie(data);
			} catch (error) {
				console.error(error);
			}
		};

		findMovie();
	}, [searchParams]);

	return (
		<>
			<Navigation />

			<form onSubmit={handleSubmit}>
				<input name="search" placeholder="Search" />
				<button type="submit">Submit</button>
			</form>
			<ul>
				{movie.map(({ title, id }) => (
					<li key={id}>
						<Link to={`/movies/${id}`} state={location}>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}
