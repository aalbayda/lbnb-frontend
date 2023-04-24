import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listing_details.css";
import { RiHeart3Fill } from "react-icons/ri";
import { Row, Col, Container, Button } from "react-bootstrap";

const ListingDetails = () => {
  const image =
    "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const name = "Casa de Felicidad";
  const location = "Los Banos, Laguna";
  const price = "₱ 8,000";
  const stars = "★★★★☆";
  const separator = "|";
  const rating = "1.5K";
  const capacity = "300";

  return (
    <Container>
      <Row className="listing-detials">
        <div className="room-img-div">
          <img className="room-img" src={image} alt="accommodation-img"></img>
        </div>
        <Col>
          <div className="name-location-div">
            <div className="name-location-section">
              <h1 className="headings">{name}</h1>
              <h7 className="headings">{location}</h7>
              <div class="star-separator-capacity-div">
                <p className="star-separator-capacity-text">
                  {stars} {separator}{" "}
                </p>
                <p className="star-separator-capacity">{rating} </p>
                <p className="star-separator-capacity-text">
                  {" "}
                  Rating {separator}{" "}
                </p>
                <p className="star-separator-capacity">{capacity}</p>
                <p className="star-separator-capacity-text"> Capacity </p>
              </div>
              <h2 className="headings-price">{price}</h2>
              <p>{description}</p>
            </div>
            <div className="room-buttons">
              <button className="r1 r-add-style" active>
                {" "}
                Room for 1
              </button>
              <button className="r2 r-add-style"> Room for 2</button>
              <button className="r3 r-add-style"> Room for 3</button>
            </div>
          </div>
        </Col>
        <Col className="heart-icon-col">
          <Button variant="outline-light">
            {" "}
            <RiHeart3Fill className="heart-icon" />{" "}
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ListingDetails;
