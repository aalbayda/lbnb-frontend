import { useState, useEffect, React } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cardListing.css";
import "../../index.css";
import LoadingScreenPage from "../../atoms/loadingScreenPage/LoadingScreenPage";
import config from "../../config";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { isLoggedIn, getAuthType, getAuthUsername } from "../../auth";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { Rating } from "@mui/material";
const url = config.apiUrl;

const CardListing = (props) => {
  const [loading, setLoading] = useState(true);
  const [isFavorite, setIsFavorite] = useState(false);
  const handleFavorite = () => {
    if (!isFavorite) {
      console.log("Adding for", getAuthUsername());
      axios
        .post(url + "/accommodation/add-to-favorites", {
          userName: getAuthUsername(),
          accommName: props.name,
        })
        .then((res) => {
          console.log("Added to favorites of", getAuthUsername());
          console.log(res.data);
        })
        .catch((err) => console.error(err));
    } else {
      console.log("Removing from", getAuthUsername());
      axios
        .post(url + "/accommodation/remove-from-favorites", {
          userName: getAuthUsername(),
          accommName: props.name,
        })
        .then((res) => {
          console.log("Removed from favorites of", getAuthUsername());
          console.log(res.data);
        })
        .catch((err) => console.error(err));
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    if (isLoggedIn() && getAuthType() === "Student") {
      axios
        .post(url + "/accommodation/is-favorite", {
          username: getAuthUsername(),
          accommodationName: props.name,
        })
        .then((res) => {
          setIsFavorite(res.data.isFavorite);
          console.log(res.data.isFavorite);
          setLoading(false);
        })
        .catch((err) => console.error(err));
    } else {
      setLoading(false);
    }
  }, []);

  const image =
    "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const name = props.name ? props.name : "Casa de Felicidad";
  const location = props.location
    ? "📍 " + props.location
    : "📍 Los Banos, Laguna";
  const capacity = props.capacity
    ? "🚪 " + props.capacity
    : "🚪 Accommodates 3 people";
  const owner = props.owner ? props.owner : "Owner";
  const address = props.address
    ? props.address
    : "Somewhere in Neverland, UPLB";
  const description = props.description
    ? props.description
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const amenities = props.amenities ? props.amenities : "";
  const price = props.max_price ? "Up to ₱" + props.max_price : "Up to ₱500";
  const stars = "★★★★☆";

  return (
    <div className="card-listing zoom-in-effect">
      {/* fixed variable width column */}
      <Col md="auto">
        <div className="img-div">
          <img
            className="accommodation-img"
            src={image}
            alt="accommodation-img"
          ></img>
          <div className="heart-button">
            {isLoggedIn() && getAuthType() === "Student" ? (
              isFavorite ? (
                <RiHeart3Fill onClick={handleFavorite} className="heart-icon" />
              ) : (
                <RiHeart3Line onClick={handleFavorite} className="heart-icon" />
              )
            ) : (
              <></>
            )}
          </div>
        </div>
      </Col>

      <Col xs={6}>
        <div className="middle-section add-padding">
          <div className="name-loc-section">
            <h1 className="large-bold accom-name">{name}</h1>
            <p className="small">
              <Link
                to="/landlordprofile"
                state={{ name: owner, username: props.USER_USERNAME }}
              >
                leased by {owner}
              </Link>
            </p>
            <p className="small">
              {location} - {address}
            </p>
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
                {props.rating ? (
                  <Rating
                    className="rating-medium"
                    name="read-only"
                    value={props.rating}
                  />
                ) : (
                  stars
                )}
              </p>
            </div>
          </div>
          <Button
            className="small-bold carousel-btn"
            onClick={() => (window.location.href += "details")}
          >
            View More
          </Button>
        </div>
      </Col>
    </div>
  );
};

export default CardListing;
