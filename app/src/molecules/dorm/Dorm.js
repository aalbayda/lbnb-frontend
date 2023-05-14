import React from "react";
import "./dorm.css";
import Button from "react-bootstrap/Button";
import { banner1 } from "../../assets/images";
import { StarRating } from "../../atoms";

const Dorm = ({topDorms}) => {
  return (
    <div className="dorm-carousel-container">
      <div className="dorm-carousel-card">
        <div className="dorm-carousel-card-upper">
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </div>
        <div className="dorm-carousel-card-lower">
          <p className="large-bold">{topDorms.Title}</p>
          <StarRating />
          <p className="small dorm-description">
            {topDorms.description}
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
