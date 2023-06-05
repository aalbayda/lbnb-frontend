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
  const { props } = location.state;

  // const {
  //   ACCOMMODATION_ADDRESS,
  //   ACCOMMODATION_AMENITIES,
  //   ACCOMMODATION_DESCRIPTION,
  //   ACCOMMODATION_ID,
  //   ACCOMMODATION_LOCATION,
  //   ACCOMMODATION_NAME,
  //   ACCOMMODATION_OWNER_ID,
  //   ACCOMMODATION_TYPE,
  //   AVERAGE_RATING,
  // } = props;

  return (
    <div className="detials-page-main-div">
      <NavBar />
      <ListingDetails props={props} />
      <RatingReviewSection props={props} />
      <SubmitRatingReviewSect props={props} />
    </div>
  );
};

export default Details;
