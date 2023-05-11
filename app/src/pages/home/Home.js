import React from "react";
import { useState } from "react";
import "./home.css";
import {
  NavBar,
  Banner,
  Footer,
  ApartmentCarousel,
  HotelsCarousel,
  DormCarousel,
  Multilayerfilter,
  CardListing
} from "../../organisms";


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
      { searched ?
      
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
        {queries ? queries.map(query => <CardListing 
          name={query.ACCOMMODATION_NAME} 
          location={query.ACCOMMODATION_LOCATION} 
          description={query.ACCOMMODATION_DESCRIPTION} 
          amenities={query.ACCOMMODATION_AMENITIES}
          max_price={query.MAX_PRICE}
          min_price={query.MIN_PRICE}
          capacity={query.CAPACITY}
          />) 
          : <div>No results found.</div>}
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
