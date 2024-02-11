import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { FilmSection } from "../components/FIlmSection/FilmSection";
import { Footer } from "../components/Footer/Footer";

export const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <FilmSection />
      <Footer />
    </>
  );
};
