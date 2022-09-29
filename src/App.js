import React from "react";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Media from "./pages/media/Media";
import Services from "./pages/services/Services";
import Market from "./pages/market/Market";
import Contact from "./pages/contact/Contact";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

import CarouselSection from "./components/carousel/CarouselSection";
import { FeedBack } from "./components/feedback/FeedBack";
import { Inspiration } from "./components/inspiration/Inspiration";
import Navbar from "./components/navbar/Navbar";
//import Services  from "./components/services/Services";
import AboutUs from "./components/aboutUs/AboutUs";
import Benefits from "./components/benefits/Benefits";
import Shop from "./components/shop/Shop";
import ShopMain from "./components/shopMain/ShopMain";
import { Topbar } from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";

const Layout = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <CarouselSection />
      <Shop />
      <AboutUs />
      <Benefits />
      <ShopMain />
      <Inspiration />
      {/* <Services /> */}
      <FeedBack />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/topbar",
        element: <Topbar />,
      },
      {
        path: "/navbar",
        element: <Navbar />,
      },
      {
        path: "/carousel",
        element: <CarouselSection />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/aboutUs",
        element: <AboutUs />,
      },
      {
        path: "/Benefits",
        element: <Benefits />,
      },
      {
        path: "/shopMain",
        element: <ShopMain />,
      },
      {
        path: "/inspiration",
        element: <Inspiration />,
      },
      {
        path: "/feedBack",
        element: <FeedBack />,
      },
      {
        path: "/footer",
        element: <Footer />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/media",
    element: <Media />,
  },
  {
    path: "/services",
    element: <Services />,
  },
  {
    path: "/market",
    element: <Market />,
  },

  {
    path: "/contact",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
