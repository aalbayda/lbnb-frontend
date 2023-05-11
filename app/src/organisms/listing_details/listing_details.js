import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listing_details.css";
import { Row, Col, Container} from "react-bootstrap";
import { RoomButtons} from "../../molecules";
import { HeartReact} from "../../atoms";

const ListingDetails = (props) => {
  const image =
    "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const description = props.description ? props.description :
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const accommName = props.accommName ? props.accommName : "Casa de Felicidad";
  const address = props.address ? props.address : "📍 Los Banos, Laguna";
  // const price = props.max_price ? "₱" + props.max_price : "₱500";
  const min_price = props.min_price ? "₱" + props.min_price : "₱1000";
  const max_price = props.max_price ? "₱" + props.max_price : "₱5000";
  const amenities = props.amenities? "✔️"+ props.amenities:"✔️ with wifi";
  const stars = "★★★★☆";
  const separator = "|";
  const rating = "1.5K";
  const capacity = props.capacity ? props.capacity : "🚪 20";
  const userName = "User-L";


  return (
    <Container>
      <Row className="listing-detials">
        <div className="room-img-div">
          <img className="room-img" src={image} alt="accommodation-img"></img>
        </div>
        <Col>
          <div className="name-location-div">
            <div className="name-location-section">
              <h1 className="headings">{accommName}</h1>
              <h7 className="headings">{address}</h7>
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
              </div>
              <h2 className="headings-price">{min_price} - {max_price}</h2>
              <p></p>
              <p>{description}</p>
              <p>{amenities}</p>
            </div>
            <div className="room-buttons">
              <RoomButtons/>
            </div>
          </div>
        </Col>
        <Col className="heart-icon-col">
          <HeartReact userName={userName} accomName={accommName}/>
        </Col>
      </Row>
    </Container>
  );
};

export default ListingDetails;
