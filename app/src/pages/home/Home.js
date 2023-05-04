import React from "react";
import "./home.css";
import {
  NavBar,
  Banner,
  Footer,
  ApartmentCarousel,
  HotelsCarousel,
  DormCarousel,
  Multilayerfilter,
} from "../../organisms";

import Chat from "../../molecules/chats/Chat";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <Banner />
      <Multilayerfilter />
      <ApartmentCarousel />
      <DormCarousel />
      <HotelsCarousel />
      <Chat/>
      <Footer />
    </div>
  );
};

export default Home;
