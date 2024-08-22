import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import PopularProducts from "../components/PopularProducts";
import Offer from "../components/Offer";
import NewArrivals from "../components/NewArrivals";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <PopularProducts />
      <Offer />
      <NewArrivals />
    </>
  );
};

export default Home;
