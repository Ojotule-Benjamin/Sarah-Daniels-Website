import React from "react";
import { CarouselSection } from "../../components/carousel/CarouselSection";
import Navbar from "../../components/navbar/Navbar";
import Shop from "../../components/shop/Shop";
import { Topbar } from "../../components/topbar/Topbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <Navbar />
      <CarouselSection />
      <Shop />
    </div>
  );
};

export default Home;
