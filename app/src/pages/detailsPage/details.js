import React from "react";
import "./details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar,
    ListingDetails,
    RatingReviewSection,
    SubmitRatingReviewSect
 } from "../../organisms";
import {useLocation} from "react-router-dom";
import axios from "axios";
const url = "https://mockup-backend-128.herokuapp.com";

const Details = () => {
  const location = useLocation();
  console.log(location)

  const userName="jcruz"; //dummy data (to be updated for authentication)

  //passed data from the cardlisting
  const image= location.state.image ? location.state.image : "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const ownername= location.state.ownername ? location.state.ownername : "Mr Owner";
  const accommName= location.state.accommName ? location.state.accommName : "Casa de Felicidad";
  const address= location.state.location ? location.state.location : "Los Banos Laguna";
  const capacity= location.state.capacity ? location.state.capacity : "20";
  const max_price = location.state.max_price ? location.state.max_price: "5000";
  const min_price = location.state.min_price ? location.state.min_price: "1000";
  const description = location.state.description ? location.state.description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const amenities = location.state.amenities ? location.state.amenities: "with wifi"
  const star = location.state.star ? location.state.star : "★★★★☆";
  const reviews = location.state.reviews ? location.state.reviews: "43";

  //to be retrieved from the database
  var rating;
  axios.post(url+"/accommodation/get-ratings", {
    accommodationName:accommName
  })
  .then(function (response) {
    console.log(response);
    rating=response.data.averageRating
  })
  .catch(function (error) {
    console.log(error);
  });

  return (
    <div class="detials-page-main-div">
      <NavBar />
      <ListingDetails 
        image={image}
        userName={userName}
        accommName={accommName} 
        address={address} 
        star={star}
        rating={rating}
        capacity={capacity}
        max_price={max_price}
        min_price={min_price}
        description={description}
        amenities={amenities}
        />
      <RatingReviewSection/>
      <SubmitRatingReviewSect
        userName = {userName}
        accommName = {accommName}
        />
    </div>
  );
};

export default Details;
