import React from "react";
import "./details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar,
    ListingDetails,
    RatingReviewSection,
    SubmitRatingReviewSect
 } from "../../organisms";
import {useLocation} from "react-router-dom";


const Details = () => {
  const location = useLocation();
  console.log(location)
  const accommName= location.state.name ? location.state.name : "Casa de Felicidad";
  const address= location.state.location ? location.state.location : "Los Banos Laguna";
  const capacity= location.state.capacity ? location.state.capacity : "20";
  const max_price = location.state.max_price ? location.state.max_price: "5000";
  const min_price = location.state.min_price ? location.state.min_price: "1000";
  const description = location.state.description ? location.state.description: "description";
  const amenities = location.state.amenities ? location.state.amenities: "amenities"
  return (
    <div class="detials-page-main-div">
      <NavBar />
      <ListingDetails 
        accommName={accommName} 
        address={address} 
        capacity={capacity}
        max_price={max_price}
        min_price={min_price}
        description={description}
        amenities={amenities}
        />
      <RatingReviewSection/>
      <SubmitRatingReviewSect/>
    </div>
  );
};

export default Details;
