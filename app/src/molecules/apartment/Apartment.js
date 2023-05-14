import React from "react";
import "./apartment.css";
import Button from "react-bootstrap/Button";
import { banner1 } from "../../assets/images";
import { StarRating } from "../../atoms";

const Apartment = ({topApartments}) => {
  return (
    <div className="apartment-carousel-container">
      <div className="carousel-container">
        <div className="carousel-upper">
          <img className="d-block w-100" src={banner1} alt="First slide" />
        </div>
        <div className="carousel-lower">
          <div className="carousel-lowerleft">
            <p className="apartment-title large-bold">{topApartments.title}</p>
            <StarRating />
            <p className="small">
              {topApartments.description}
            </p>
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
