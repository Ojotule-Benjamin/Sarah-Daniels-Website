import React from "react";
import AboutUs from "../../components/aboutUs/AboutUs";
import Benefits from "../../components/benefits/Benefits";
import { Blog } from "../../components/blog/Blog";
import { CarouselSection } from "../../components/carousel/CarouselSection";
import { FeedBack } from "../../components/feedback/FeedBack";
import { Inspiration } from "../../components/inspiration/Inspiration";
import Navbar from "../../components/navbar/Navbar";
import Shop from "../../components/shop/Shop";
import { ShopMain } from "../../components/shopMain/ShopMain";
import { Topbar } from "../../components/topbar/Topbar";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <Topbar />
      <Navbar />
      <CarouselSection />
      <Shop />
      <AboutUs />
      <Benefits />
      <ShopMain />
      <Inspiration />
      <FeedBack />
      <Blog />
    </div>
  );
};

export default Home;
