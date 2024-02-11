import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Search } from "../pages/Search";
import { NotFound } from "../pages/NotFound";
import { Movie } from "../pages/Movie";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:searchID" element={<Movie />} />
        <Route path="movies" />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};
