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

  const topApartments = [
    {
      title: "Modern Studio Apartment",
      description: "A stylish and contemporary studio apartment with state-of-the-art amenities. Perfect for solo travelers or couples.",
    },
    {
      title: "Luxury Penthouse with Panoramic Views",
      description: "Indulge in the ultimate luxury with this stunning penthouse boasting breathtaking panoramic views of the city skyline.",
    },
    {
      title: "Cozy Loft in the Heart of Downtown",
      description: "Experience urban living at its best in this cozy loft located in the vibrant heart of downtown. Steps away from shopping, dining, and entertainment.",
    },
    {
      title: "Spacious Family-Friendly Apartment",
      description: "A spacious and family-friendly apartment featuring multiple bedrooms, a fully equipped kitchen, and amenities for children.",
    },
    {
      title: "Charming Vintage Apartment",
      description: "Step back in time with this charming vintage apartment, showcasing retro decor and a cozy ambiance for a nostalgic stay.",
    },
  ];

  const topHotels = [
    {
      title: "Luxury Beach Resort & Spa",
      description: "Indulge in a luxurious getaway at our beachfront resort and spa. Enjoy breathtaking views, world-class amenities, and impeccable service.",
    },
    {
      title: "Urban Boutique Hotel",
      description: "Experience the charm and elegance of our urban boutique hotel. Located in the heart of the city, we offer stylish rooms and personalized service.",
    },
    {
      title: "Rustic Mountain Lodge",
      description: "Escape to the tranquility of the mountains at our rustic lodge. Immerse yourself in nature and enjoy cozy accommodations and outdoor adventures.",
    },
    {
      title: "Historic Landmark Hotel",
      description: "Step into history at our iconic landmark hotel. Combining timeless elegance with modern comforts, we offer a unique and unforgettable experience.",
    },
    {
      title: "Modern City Center Hotel",
      description: "Discover the vibrant energy of the city from our modern hotel in the heart of downtown. Enjoy contemporary design, convenient location, and top-notch amenities.",
    },
  ];

  const topDorms = [
    {
      title: "Modern Dormitory Complex",
      description: "Experience comfortable dormitory living in our modern complex. Enjoy spacious rooms, communal areas, and a vibrant social atmosphere.",
    },
    {
      title: "Affordable Student Dorms",
      description: "Find affordable accommodation for students in our dormitory. Conveniently located near universities, we offer a safe and welcoming environment.",
    },
    {
      title: "Co-ed Dormitory Community",
      description: "Join a diverse and inclusive community in our co-ed dormitory. Experience a supportive environment and make lifelong friendships.",
    },
    {
      title: "Convenient Campus Dorms",
      description: "Stay on-campus in our conveniently located dormitory. Enjoy easy access to classes, facilities, and campus events.",
    },
    {
      title: "Modern Dorms with Amenities",
      description: "Discover comfortable dormitory living with modern amenities. Our dorms offer study lounges, fitness facilities, and social spaces.",
    },
    {
      title: "Co-ed Dormitory Community",
      description: "Join a diverse and inclusive community in our co-ed dormitory. Experience a supportive environment and make lifelong friendships.",
    },
  ];
  
  

  // axios.get(url + '/get-top-five-accommodations')
  // .then(response => {
  //   // Handle successful response
  //   console.log(response.data);
  // })
  // .catch(error => {
  //   // Handle error
  //   console.error(error);
  // });



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
        <ApartmentCarousel 
          topApartments = {topApartments}
        />
        <DormCarousel 
          topDorms = {topDorms}
        />
        <HotelsCarousel 
          topHotels = {topHotels}
        />
      </div>
      }

      <Footer />
    </div>
  );
};

export default Home;
