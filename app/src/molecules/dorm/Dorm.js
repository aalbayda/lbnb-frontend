import React from "react";
import "./dorm.css";
import Button from "react-bootstrap/Button";
import { banner1 } from "../../assets/images";
// import { StarRating } from "../../atoms";
import { Rating } from "@mui/material";

const Dorm = ({topDorms}) => {
  return (
    <div className="dorm-carousel-container">
      <div className="shine-div zoom-in-effect dorm-carousel-card">
        <div className="dorm-carousel-card-upper">
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </div>
        <div className="dorm-carousel-card-lower">
          <p className="large-bold">{topDorms.ACCOMMODATION_NAME}</p>
          <Rating
              name="read-only"
              value={topDorms.AVERAGE_RATING}
              readOnly
            />
          <p className="small dorm-description">
            {topDorms.ACCOMMODATION_DESCRIPTION}
          </p>
                  {/* <div className="dorm-carousel-card-lowest"> */}
        <Button
            className="small-bold carousel-btn dorm-btn"
            onClick={() => (window.location.href += "details")}
          >
            View More
          </Button>
        {/* </div> */}
        </div>
      </div>
    </div>
  );
};

export default Dorm;
