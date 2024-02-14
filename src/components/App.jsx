import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { Movie_Cast } from "../components/Movie/Movie_Cast/Movie_Cast";
import { Movie_Reviews } from "../components/Movie/Movie_Reviews/Movie_Reviews";
import NotFound from "../pages/NotFound.jsx";
import MoviePage from "../pages/MoviePage.jsx";

const Home = lazy(() => import("../pages/Home.jsx"));
const Search = lazy(() => import("../pages/Search.jsx"));

export const App = () => {
  return (
    <>
      <Suspense fallback={<b>Loading...</b>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Search />} />
          <Route path="/movies/:movieID" element={<MoviePage />}>
            <Route path="reviews" element={<Movie_Reviews />} />
            <Route path="cast" element={<Movie_Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
