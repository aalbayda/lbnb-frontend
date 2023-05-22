import React from "react";
import "./hotels.css";
import Button from "react-bootstrap/Button";
import { banner1 } from "../../assets/images";
// import { StarRating } from "../../atoms";
import { Rating } from "@mui/material";

const Hotels = ({topHotels}) => {
  return (
    <div className="hotels-carousel-container">
      <div className="hotels-carousel">
        <div className="hotels-carousel-left">
          <img className="d-block w-100" src={topHotels.HOTEL_PHOTO} alt="First slide" />
        </div>
        <div className="hotels-carousel-right">
          <p className="large-bold">{topHotels.HOTEL_NAME}</p>
          <Rating
              name="read-only"
              readOnly
              value={topHotels.AVERAGE_RATING}
            />
          <p className="small">
            {topHotels.HOTEL_DESCRIPTION}
          </p>
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
  );
};

export default Hotels;
