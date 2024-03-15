import { MovieCard } from "./Movie/MovieCard";

export const MovieList = ({ array, locate }) => {
	return (
		<ul>
			{array.map(({ title, id }) => (
				<MovieCard key={id} movieID={id} movieTitle={title} locate={locate} />
			))}
		</ul>
	);
};
