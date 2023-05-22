import { React, useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cardListing.css";
import "../../index.css";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { RiHeart3Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Rating } from "@mui/material";

const url = "https://mockup-backend-128.herokuapp.com";

const CardListing = ({ listing }) => {
  //dummy data
  const [imageAPI, setImageAPI] = useState("");
  const image =
    "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const userName = "student2";

  //data passed from the home page (multilayer filter props)
  const accommName = listing.ACCOMMODATION_NAME
    ? listing.ACCOMMODATION_NAME
    : "Comfort Dorm";
  const [owner, setOwner] = useState({ USER_FNAME: "owner", USER_LNAME: "" });
  const location = listing.ACCOMMODATION_LOCATION
    ? listing.ACCOMMODATION_LOCATION
    : "inside campus";
  const address = listing.ACCOMMODATION_ADDRESS
    ? "📍 " + listing.ACCOMMODATION_ADDRESS
    : "📍 Los Banos, Laguna";
  const description = listing.ACCOMMODATION_DESCRIPTION
    ? listing.ACCOMMODATION_DESCRIPTION
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const amenities = listing.ACCOMMODATION_AMENITIES
    ? "Amenities: " + listing.ACCOMMODATION_AMENITIES
    : "with wifi";
  const price = listing.max_price
    ? "Up to ₱" + listing.max_price
    : "Up to ₱900"; //to be rendered in the page
  const capacity = listing.max_capacity
    ? "🚪 " + listing.max_capacity
    : "🚪 Accommodates 3 people"; // to be render in the page
  const max_price = listing.max_price ? listing.max_price : "1000"; //to be passed as arguments
  const min_capacity = listing.min_capacity ? listing.min_capacity : "1";
  const max_capacity = listing.max_capacity ? listing.max_capacity : "3";
  const rating = listing.rating ? listing.rating : 3;

  const [isFavorite, setfave] = useState(false);
  useEffect(() => {
    axios
      .post(url + "/accommodation/is-favorite", {
        userName: userName,
        accommodationName: accommName,
      })
      .then(function (response) {
        if (response.data.success) {
          setfave(response.data.isFavorite);
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .post(url + "/accommodation/get-accommodation-pic", {
        accommodationName: accommName,
      })
      .then(function (response) {
        if (response.data.success) {
          console.log(response.data);
          setImageAPI(response.data.imageUrl);
        }
      })
      .catch(function (error) {
        console.log(error);
      });

    axios
      .post(url + "/get-user-by-id", {
        userId: listing.ACCOMMODATION_OWNER_ID,
      })
      .then(function (response) {
        if (response.data.success) {
          console.log("Owner:");
          console.log(response.data);
          setOwner(response.data.user);
        }
      })
      .catch(function (error) {
        console.log("error getting owner");
        console.log(error);
      });
    // do something with listing.ACCOMMODATION_OWNER_ID
  }, []);

  const navigate = useNavigate();

  return (
    <div className="card-listing">
      {/* fixed variable width column */}
      <Col md="auto">
        <div className="img-div">
          <img
            className="accommodation-img"
            src={imageAPI ? imageAPI : image}
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
              <Link to="/landlordprofile" replace={true} state={owner}>
                leased by {owner.USER_FNAME + " " + owner.USER_LNAME}
              </Link>
            </p>
            <p className="small">{address}</p>
          </div>
          <p className="small accom-desc">
            {description + " " + amenities + "."}
          </p>
        </div>
      </Col>

      <Col>
        <div className="right-section add-padding">
          <div className="price-section">
            <h2 className="large-bold price-range">{price}</h2>
            <div>
              <p className="small review-stars">
                <Rating
                  className="rating-medium"
                  defaultValue={rating}
                  precision={0.5}
                  readOnly={true}
                  sx={{
                    fontSize: "2rem",
                    color: "#1C3103",
                    mr: 1,
                  }}
                />
              </p>
            </div>
          </div>
          <Button
            className="small-bold carousel-btn"
            onClick={() => {
              navigate("/details", {
                replace: true,
                state: {
                  userName: userName,
                  image: image,
                  owner: owner,
                  accommName: accommName,
                  location: location,
                  address: address,
                  capacity: capacity,
                  max_price: max_price,
                  min_capacity: min_capacity,
                  max_capacity: max_capacity,
                  description: description,
                  amenities: amenities,
                  rating: rating,
                  isFavorite: isFavorite,
                },
              });
            }}
          >
            View More
          </Button>
        </div>
      </Col>
    </div>
  );
};

export default CardListing;
