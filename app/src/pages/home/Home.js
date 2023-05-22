import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
import {
  NavBar,
  Banner,
  Footer,
  ApartmentCarousel,
  HotelsCarousel,
  DormCarousel,
  Multilayerfilter,
  CardListing,
} from "../../organisms";
const url = "https://mockup-backend-128.herokuapp.com";

const Home = () => {
  const [queries, setQueries] = useState("");
  const [searched, setSearched] = useState(false);
  const toggleSearched = () => setSearched(true);
  const [topAccoms, setTopAccoms] = useState([]);

  useEffect(() => {
    axios
      .post(url + "/get-top-five-accommodations", {
        type: "Dorm",
      })
      .then((response) => {
        console.log(response.data);
        setTopAccoms(response.data.accommodation);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleQuery = (queries) => {
    setQueries(queries);
    console.log(queries);
    console.log("passed up successfully");
  };

  return (
    <div className="home-container">
      <NavBar />
      <Banner />
      <Multilayerfilter
        toggleSearched={toggleSearched}
        handleQuery={handleQuery}
      />
      {searched ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {queries ? (
            queries.map((query) => <CardListing listing={query} />)
          ) : (
            <div>No results found.</div>
          )}
        </div>
      ) : (
        <div className="home-carousel-list">
          <ApartmentCarousel topApartments={topAccoms} />
          {/* <DormCarousel topDorms={topDorms} />
          <HotelsCarousel topHotels={topHotels} /> */}
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Home;
