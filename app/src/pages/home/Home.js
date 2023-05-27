import React, { useState, useEffect } from "react";
import axios from "axios";
import "./home.css";
// import {apartment1, apartment2, apartment3, apartment4, apartment5, dorm6, hotel1, hotel2, hotel3, hotel4, hotel5, dorm1, dorm2, dorm3, dorm4, dorm5} from "../../assets/images";
import LoadingScreenPage from "../../atoms/loadingScreenPage/LoadingScreenPage";
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
  const [loading, setLoading] = useState(true);
  const [queries, setQueries] = useState("");
  const [searched, setSearched] = useState(false);
  const toggleSearched = () => setSearched(true);
  const [topApartments, setTopApartments] = useState([]);
  const [topDorms, setTopDorms] = useState([]);
  const [topHotels, setTopHotels] = useState([]);

  useEffect(() => {
    const fetchData = async (type) => {
      try {
        const response = await axios.post(url + "/get-top-five-accommodations", { type });
        console.log(`-${type}-`);
        console.log(response.data);
        return response.data.accommodation;
      } catch (error) {
        console.error(error);
        return [];
      }
    };
  
    Promise.all([
      fetchData('Dorm'),
      fetchData('Apartment'),
      fetchData('Hotel')
    ]).then(([dorms, apartments, hotels]) => {
      setTopDorms(dorms);
      setTopApartments(apartments);
      setTopHotels(hotels);
      setLoading(false);
    });
  }, []);
  

  const handleQuery = (queries) => {
    setQueries(queries);
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
       { loading ? 
          <div className="centeredSpinner">
              <LoadingScreenPage
              size={80}
              color={'#4f4a47'}
              loading={loading}
              />
          </div> :
      <div>
      {searched ? (
        <div className="searched-list"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          {queries ? (
            queries.map((query) => (
              <CardListing
                key={queries.id}
                name={query.ACCOMMODATION_NAME}
                location={query.ACCOMMODATION_LOCATION}
                description={query.ACCOMMODATION_DESCRIPTION}
                amenities={query.ACCOMMODATION_AMENITIES}
                max_price={query.MAX_PRICE}
              />
            ))
          ) : (
            <div>No results found.</div>
          )}
        </div>
      ) : (
        <div className="home-carousel-list">
          <ApartmentCarousel topApartments={topApartments} />
          <DormCarousel topDorms={topDorms} />
          <HotelsCarousel topHotels={topHotels} />
        </div>
      )}
      </div>}

      <Footer />
    </div>
  );
};

export default Home;


  // const top_apartments = [
  //   {
  //     APARTMENT_NAME: 'Sunset Heights',
  //     AVERAGE_RATING: 4.5,
  //     APARTMENT_DESCRIPTION: 'Sunset Heights offers spacious and modern apartments with beautiful views.',
  //     APARTMENT_PHOTO: apartment1,
  //   },
  //   {
  //     APARTMENT_NAME: 'Cityscape Towers',
  //     AVERAGE_RATING: 3.8,
  //     APARTMENT_DESCRIPTION: 'Cityscape Towers provide luxurious living spaces with convenient access to urban amenities.',
  //     APARTMENT_PHOTO: apartment2
  //   },
  //   {
  //     APARTMENT_NAME: 'Garden Oasis Apartments',
  //     AVERAGE_RATING: 4.2,
  //     APARTMENT_DESCRIPTION: 'Garden Oasis Apartments feature lush greenery and a peaceful environment for residents.',
  //     APARTMENT_PHOTO: apartment3,
  //   },
  //   {
  //     APARTMENT_NAME: 'Metropolitan Residences',
  //     AVERAGE_RATING: 4.7,
  //     APARTMENT_DESCRIPTION: 'Metropolitan Residences offer a sophisticated urban lifestyle with premium amenities.',
  //     APARTMENT_PHOTO: apartment4,

  //   },
  //   {
  //     APARTMENT_NAME: 'Harbor View Suites',
  //     AVERAGE_RATING: 4.0,
  //     APARTMENT_DESCRIPTION: 'Harbor View Suites provide stunning waterfront views and modern living spaces.',
  //     APARTMENT_PHOTO: apartment5,
  //   }
  // ];
  

  // const top_hotels = [
  //   {
  //     HOTEL_NAME: 'Grand Deluxe Hotel',
  //     AVERAGE_RATING: 4.5,
  //     HOTEL_DESCRIPTION: 'The Grand Deluxe Hotel offers luxurious rooms with top-notch amenities.',
  //     HOTEL_PHOTO: hotel1
  //   },
  //   {
  //     HOTEL_NAME: 'Elegant Retreat Resort',
  //     AVERAGE_RATING: 3.8,
  //     HOTEL_DESCRIPTION: 'The Elegant Retreat Resort provides a peaceful ambiance and a range of recreational facilities.',
  //     HOTEL_PHOTO: hotel2
  //   },
  //   {
  //     HOTEL_NAME: 'Serene Paradise Inn',
  //     AVERAGE_RATING: 4.2,
  //     HOTEL_DESCRIPTION: 'The Serene Paradise Inn features tranquil surroundings and comfortable accommodations.',
  //     HOTEL_PHOTO: hotel3
  //   },
  //   {
  //     HOTEL_NAME: 'Riverview Suites',
  //     AVERAGE_RATING: 4.7,
  //     HOTEL_DESCRIPTION: 'The Riverview Suites offer breathtaking views and luxurious amenities.',
  //     HOTEL_PHOTO: hotel4
  //   },
  //   {
  //     HOTEL_NAME: 'Cozy Haven Lodge',
  //     AVERAGE_RATING: 4.0,
  //     HOTEL_DESCRIPTION: 'The Cozy Haven Lodge provides a warm and inviting atmosphere for guests.',
  //     HOTEL_PHOTO: hotel5
  //   }
  // ];

  // const top_dorms = [
  //   {
  //     DORM_NAME: 'Oak Hall',
  //     AVERAGE_RATING: 4.5,
  //     DORM_DESCRIPTION: 'Oak Hall offers spacious rooms with modern amenities.',
  //     DORM_PHOTO: dorm1
  //   },
  //   {
  //     DORM_NAME: 'Cedar House',
  //     AVERAGE_RATING: 3.8,
  //     DORM_DESCRIPTION: 'Cedar House provides a vibrant community and various recreational facilities.',
  //     DORM_PHOTO: dorm2
  //   },
  //   {
  //     DORM_NAME: 'Maple Residence',
  //     AVERAGE_RATING: 4.2,
  //     DORM_DESCRIPTION: 'Maple Residence features a serene environment and excellent study spaces.',
  //     DORM_PHOTO: dorm3
  //   },
  //   {
  //     DORM_NAME: 'Willow Hall',
  //     AVERAGE_RATING: 4.7,
  //     DORM_DESCRIPTION: 'Willow Hall offers stunning views and a state-of-the-art fitness center.',
  //     DORM_PHOTO: dorm4
  //   },
  //   {
  //     DORM_NAME: 'Pine Lodge',
  //     AVERAGE_RATING: 4.0,
  //     DORM_DESCRIPTION: 'Pine Lodge provides a cozy and welcoming atmosphere for students.',
  //     DORM_PHOTO: dorm5
  //   },
  //   {
  //     DORM_NAME: 'Juniper Court',
  //     AVERAGE_RATING: 4.3,
  //     DORM_DESCRIPTION: 'Juniper Court offers modern amenities and a supportive community for residents.',
  //     DORM_PHOTO: dorm6
  //   }
  // ];
