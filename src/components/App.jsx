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

export const App = () => {
  return (
    <>
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
    </>
  );
};
