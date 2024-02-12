import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { NotFound } from "../pages/NotFound";
import { MoviePage } from "../pages/MoviePage";
import { Movies } from "../pages/Movies";
import { Serials } from "../pages/Serials";
import { Reviews } from "./Movie/Reviews/Reviews";
import { Cast } from "./Movie/Cast/Cast";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:movieID" element={<MoviePage />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieID" element={<MoviePage />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="/series" element={<Serials />} />
        <Route path="/series/:movieID" element={<MoviePage />}>
          <Route path="reviews" element={<Reviews />} />
          <Route path="cast" element={<Cast />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
