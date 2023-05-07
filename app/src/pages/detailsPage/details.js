import React from "react";
import "./details.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar,
    ListingDetails,
    RatingReviewSection,
    SubmitRatingReviewSect
 } from "../../organisms";


const Details = () => {
  return (
    <div class="detials-page-main-div">
      <NavBar />
      <ListingDetails />
      <RatingReviewSection/>
      <SubmitRatingReviewSect/>
    </div>
  );
};

export default Details;
