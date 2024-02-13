import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { NotFound } from "../pages/NotFound";
import { MoviePage } from "../pages/MoviePage";
import { SerialPage } from "../pages/SerialPage";
import { Movies } from "../pages/Movies";
import { Serials } from "../pages/Serials";
import { Movie_Cast } from "./Movie/Movie_Cast/Movie_Cast";
import { Movie_Reviews } from "./Movie/Movie_Reviews/Movie_Reviews";
import { Serial_Reviews } from "./Serial/Serial_Reviews/Serial_Reviews";
import { Serial_Cast } from "./Serial/Serial_Cast/Serial_Cast";

// Don`t Work
// const NotFound = lazy(() => import("../pages/NotFound"));
// const MoviePage = lazy(() => import("../pages/MoviePage"));
// const SerialPage = lazy(() => import("../pages/SerialPage"));
// const Movies = lazy(() => import("../pages/Movies"));
// const Serials = lazy(() => import("../pages/Serials"));
// const Movie_Cast = lazy(() => import("./Movie/Movie_Cast/Movie_Cast"));
// const Movie_Reviews = lazy(() => import("./Movie/Movie_Reviews/Movie_Reviews"));
// const Serial_Cast = lazy(() => import("./Serial/Serial_Cast/Serial_Cast"));
// const Serial_Reviews = lazy(() => import("./Serial/Serial_Reviews/Serial_Reviews"));

export const App = () => {
  return (
    <>
      <Suspense>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/:movieID" element={<MoviePage />}>
            <Route path="reviews" element={<Movie_Reviews />} />
            <Route path="cast" element={<Movie_Cast />} />
          </Route>
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieID" element={<MoviePage />}>
            <Route path="reviews" element={<Movie_Reviews />} />
            <Route path="cast" element={<Movie_Cast />} />
          </Route>
          <Route path="/serials" element={<Serials />} />
          <Route path="/serials/:serialID" element={<SerialPage />}>
            <Route path="reviews" element={<Serial_Reviews />} />
            <Route path="cast" element={<Serial_Cast />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};
