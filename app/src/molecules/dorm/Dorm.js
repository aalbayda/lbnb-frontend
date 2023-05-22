import React from "react";
import "./dorm.css";
import Button from "react-bootstrap/Button";
import { banner1 } from "../../assets/images";
// import { StarRating } from "../../atoms";
import { Rating } from "@mui/material";

const Dorm = ({topDorms}) => {
  return (
    <div className="dorm-carousel-container">
      <div className="dorm-carousel-card">
        <div className="dorm-carousel-card-upper">
          <img className="d-block w-100" src={topDorms.DORM_PHOTO} alt="First slide" />
        </div>
        <div className="dorm-carousel-card-lower">
          <p className="large-bold">{topDorms.DORM_NAME}</p>
          <Rating
              name="read-only"
              value={topDorms.AVERAGE_RATING}
              readOnly
            />
          <p className="small dorm-description">
            {topDorms.DORM_DESCRIPTION}
          </p>
          <Button
            className="small-bold carousel-btn"
            onClick={() => (window.location.href += "details")}
          >
            View More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dorm;
