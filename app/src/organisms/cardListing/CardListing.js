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

  //data passed from the home page
  const accommName = props.accommName ? props.accommName : "Harmony Hotel";
  const ownerName= props.ownerName ? props.ownerName : "owner1";
  const location= props.location ? props.location : "inside campus";
  const address = props.address ? "📍 " + props.address : "📍 Los Banos, Laguna";
  const description = props.description ? props.description :
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const amenities = props.amenities ? props.amenities : "with wifi";
  const price = props.max_price ? "Up to ₱" + props.max_price : "Up to ₱900"; //to be rendered in the page
  const capacity = props.max_capacity ? "🚪 " + props.max_capacity : "🚪 Accommodates 3 people"; // to be render in the page
  const max_price = props.max_price ? props.max_price : "1000"; //to be passed as arguments 
  const min_capacity=props.min_capacity ? props.min_capacity : "1"; 
  const max_capacity = props.max_capacity ? props.max_capacity : "3";
  const rating= props.rating ? props.rating : "3★"; // TODO: to be converted to stars
  // const stars = "★★★★☆";

  const reviews = "(32 reviews)"; // TODO: dummy data (to be fetched)

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
            <h1 className="large-bold accom-name">{accommName}</h1>
            <p className="small">
              <a style={{ textDecoration: "none" }} href="/LandlordProfile">
                leased by {ownerName}
              </a>
            </p>
            <p className="small">{address}</p>
          </div>
          <p className="small accom-desc">{description + " " + amenities + "."}</p>
        </div>
      </Col>

      <Col>
        <div className="right-section add-padding">
          <div className="price-section">
            <h2 className="large-bold price-range">{price}</h2>
            <div>
              <p className="small review-stars">{rating}</p>
              <p className="small review-num">{reviews}</p>
            </div>
          </div>
          <Button
              className="small-bold carousel-btn"
              onClick={()=> {
                navigate('/details',{replace:true, state: {
                  image:image,
                  ownerName:ownerName,
                  accommname:accommName, 
                  location:location,
                  address: address,
                  capacity: capacity, 
                  max_price: max_price,
                  min_capacity: min_capacity,
                  max_capacity: max_capacity,
                  description: description,
                  amenities: amenities,
                  rating:rating,
                  reviews:reviews
                }})
              }}
            >View More</Button>
        </div>
      </Col>
    </div>
  );
};

export default CardListing;
