import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cardListing.css";
import "../../index.css";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import { ViewMoreButton } from "../../atoms";
import { RiHeart3Fill } from "react-icons/ri";
import {useNavigate} from "react-router-dom";



const CardListing = (props) => {
  const image =
    "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const name = props.name ? props.name : "Casa de Felicidad";
  const location = props.location ? "📍 " + props.location : "📍 Los Banos, Laguna";
  const capacity = props.capacity ? "🚪 " + props.capacity : "🚪 Accommodates 3 people";
  const owner = "Owner";
  const description = props.description ? props.description :
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const amenities = props.amenities ? props.amenities : "";
  const price = props.max_price ? "Up to ₱" + props.max_price : "Up to ₱900";
  const max_price = props.max_price;
  const min_price = props.min_price;
  const stars = "★★★★☆";
  const reviews = "(32 reviews)";

  const navigate=useNavigate();

  return (
    <div className="card-listing">
      {/* fixed variable width column */}
      <Col md="auto">
        <div className="img-div">
          <img
            className="accommodation-img"
            src={image}
            alt="accommodation-img"
          ></img>
          <div class="heart-button">
            <RiHeart3Fill className="heart-icon" />{" "}
          </div>
        </div>
      </Col>

      <Col xs={6}>
        <div className="middle-section add-padding">
          <div className="name-loc-section">
            <h1 className="large-bold accom-name">{name}</h1>
            <p className="small">
              <a style={{ textDecoration: "none" }} href="/LandlordProfile">
                leased by {owner}
              </a>
            </p>
            <p className="small">{location}</p>
          </div>
          <p className="small accom-desc">{description + " " + amenities + "."}</p>
        </div>
      </Col>

      <Col>
        <div className="right-section add-padding">
          <div className="price-section">
            <h2 className="large-bold price-range">{price}</h2>
            <div>
              <p className="small review-stars">{stars}</p>
              <p className="small review-num">{reviews}</p>
            </div>
          </div>
          <Button
              className="small-bold carousel-btn"
              onClick={()=> {
                navigate('/details',{replace:true, state: {
                  name:name, 
                  location:location,
                  capacity: capacity, 
                  max_price: max_price,
                  min_price: min_price,
                  description: description,
                  amenities: amenities
                }})
              }}
            >View More</Button>
        </div>
      </Col>
    </div>
  );
};

export default CardListing;
