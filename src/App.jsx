import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchImages } from "./actions";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import ProductCardContainer from "./components/ProductCard/ProductCard";
import ProductDisplayContainer from "./components/ProductDisplay/ProductDisplay";
import RandomPictures from "./components/RandomPictures/RandomPictures";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchImages());
  }, []);
  return (
    <>
      <main>
        <Header />
        <HeroBanner />
        <ProductDisplayContainer />
        <ProductCardContainer />
        <RandomPictures />
        <Footer />
      </main>
    </>
  );
};

export default App;
