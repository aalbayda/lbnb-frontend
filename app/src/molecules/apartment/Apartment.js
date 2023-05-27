import React from "react";
import "./apartment.css";
import Button from "react-bootstrap/Button";
import { banner1 } from "../../assets/images";
import { Rating } from "@mui/material";
// import { StarRating } from "../../atoms";

const Apartment = ({ topApartments }) => {
  return (
    <div className="apartment-carousel-container">
      <div className="shine-div carousel-container">
        <div className="carousel-upper">
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </div>
        <div className="carousel-lower">
          <div className="carousel-lowerleft">
            <p className="apartment-title large-bold">
              {topApartments.ACCOMMODATION_NAME}
            </p>
            <Rating
              name="read-only"
              readOnly
              value={topApartments.AVERAGE_RATING}
            />
            <p className="small">{topApartments.ACCOMMODATION_DESCRIPTION}</p>
          </div>
          <div className="carousel-lowerright">
            <Button
              className="small-bold carousel-btn"
              onClick={() => (window.location.href += "details")}
            >
              {" "}
              View More{" "}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apartment;
