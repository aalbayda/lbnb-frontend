import React from "react";
import "./details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  NavBar,
  ListingDetails,
  RatingReviewSection,
  SubmitRatingReviewSect,
} from "../../organisms";
import { useLocation } from "react-router-dom";

const Details = () => {
  const location = useLocation();
    //passed data from the cardlisting
  const userName=location.state.userName ? location.state.userName : "student2"; 
  const image= location.state.image ? location.state.image : "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const ownerName= location.state.owner ? location.state.owner : "owner1";
  const accommName= location.state.accommName ? location.state.accommName : "Comfort Dorm";
  const address= location.state.address ? location.state.address : "Los Banos Laguna";
  const location_place =location.state.location ? location.state.location : "Inside Campus";
  const min_capacity= location.state.min_capacity ? location.state.min_capacity : "2";
  const max_capacity= location.state.max_capacity ? location.state.max_capacity : "5";
  const max_price = location.state.max_price ? location.state.max_price: "5000";
  const description = location.state.description ? location.state.description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const amenities = location.state.amenities ? location.state.amenities: "with wifi"
  const rating = location.state.rating ? location.state.rating : "3";
  const isFavorite= location.state.isFavorite ? location.state.isFavorite: false;

 
 
  return (
    <div class="detials-page-main-div">
      <NavBar />
      <ListingDetails 
        image={image}
        userName={userName}
        ownerName={ownerName}
        accommName={accommName} 
        address={address} 
        location_place={location_place}
        rating={rating}
        min_capacity={min_capacity}
        max_capacity={max_capacity}
        max_price={max_price}
        description={description}
        amenities={amenities}
        isFavorite= {isFavorite}
        />
      <RatingReviewSection
        accommName={accommName}
        userName={userName}
      />
      <SubmitRatingReviewSect
        userName = {userName}
        accommName = {accommName}
        />
    </div>
  );
};
export default Details;
