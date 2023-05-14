import React from "react";
import { useState, lazy } from "react";
import "./home.css";
import {
  NavBar,
  Banner,
  Footer,
  ApartmentCarousel,
  HotelsCarousel,
  DormCarousel,
  Multilayerfilter
} from "../../organisms";
import LoadingComponent from "../../atoms/loadingComponent/LoadingComponent.js";
const CardListing = lazy(()=> import("../../organisms/cardListing/CardListing"));

const Home = () => {
  const [queries, setQueries] = useState("");
  const [searched, setSearched] = useState(false);
  const toggleSearched = () => setSearched(true);
  const handleQuery = (queries) =>  {
    setQueries(queries);
    console.log("passed up successfully");
  };

  return (
    <div className="home-container">
      <NavBar />
      <Banner />
      <Multilayerfilter toggleSearched={toggleSearched} handleQuery={handleQuery} />
      { 
      searched ?
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          { 
          queries ? <div>No results found.</div>
          : queries ?
            queries.map(query => 
              <CardListing 
                name={query.ACCOMMODATION_NAME} 
                location={query.ACCOMMODATION_LOCATION} 
                description={query.ACCOMMODATION_DESCRIPTION} 
                amenities={query.ACCOMMODATION_AMENITIES}
                max_price={query.MAX_PRICE}
              />
            ) 
          : <LoadingComponent />
          }
      </div>

    : <div>
        <ApartmentCarousel />
        <DormCarousel />
        <HotelsCarousel />
      </div>
      }
      <Footer />
    </div>
  );
};

export default Home;
