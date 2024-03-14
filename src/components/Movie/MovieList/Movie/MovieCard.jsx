import { Link } from "react-router-dom";

export const MovieCard = ({ movieID, movieTitle, locate }) => {
	return (
		<li>
			<Link to={`/movies/${movieID}`} state={locate}>
				{movieTitle}
			</Link>
		</li>
	);
};
