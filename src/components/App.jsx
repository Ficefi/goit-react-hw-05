import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { MovieCast } from "./Movie/MovieCast/MovieCast.jsx";
import { MovieReviews } from "./Movie/MovieReviews/MovieReviews.jsx";
import Navigation from "../components/Navigation/Navigation.jsx";
import NotFoundPage from "../pages/NotFoundPage.jsx";
import MovieDetailsPage from "../pages/MovieDetailsPage.jsx";

const Home = lazy(() => import("../pages/HomePage.jsx"));
const MoviesPage = lazy(() => import("../pages/MoviesPage.jsx"));

export const App = () => {
	return (
		<>
			<Suspense fallback={<b>Loading...</b>}>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/movies" element={<MoviesPage />} />
					<Route path="/movies/:movieID" element={<MovieDetailsPage />}>
						<Route path="reviews" element={<MovieReviews />} />
						<Route path="cast" element={<MovieCast />} />
					</Route>
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
			</Suspense>
		</>
	);
};
