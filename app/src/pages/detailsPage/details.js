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
