import { useState, React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./cardListing.css";
import "../../index.css";
import config from "../../config";
import { Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { isLoggedIn, getAuthType, getAuthUsername } from "../../auth";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { Rating } from "@mui/material";
const url = config.apiUrl;

const CardListing = (props) => {
  const [isFavorite, setIsFavorite] = useState(false);
  // useEffect(() => {
  //   if (isLoggedIn()) {
  //     axios.post(url + "/is-favorite", {
  //       username: getAuthUsername(),
  //       accommodationName: props.name
  //     }).then(res => {

  //     })
  //   }
  // }, []);

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
          <div class="heart-button">
            {isLoggedIn() && getAuthType() === "Student" ? (
              isFavorite ? (
                <RiHeart3Fill
                  onClick={() => setIsFavorite(false)}
                  className="heart-icon"
                />
              ) : (
                <RiHeart3Line
                  onClick={() => setIsFavorite(true)}
                  className="heart-icon"
                />
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
              <a style={{ textDecoration: "none" }} href="/LandlordProfile">
                leased by {owner}
              </a>
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
