import React, {useState, useEffect} from "react";
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
  CardListing
} from "../../organisms";
const url = 'https://mockup-backend-128.herokuapp.com';


const Home = () => {
  const [queries, setQueries] = useState("");
  const [searched, setSearched] = useState(false);
  const [topAccoms, setTopAccoms] = useState([]);
  const toggleSearched = () => setSearched(true);

  axios.get(url + '/get-top-five-accommodations')
  .then(response => {
    // Handle successful response
    console.log(response.data);
  })
  .catch(error => {
    // Handle error
    console.error(error);
  });

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
          />) 
          : <div>No results found.</div>}
      </div>

    : <div className="home-carousel-list">
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
