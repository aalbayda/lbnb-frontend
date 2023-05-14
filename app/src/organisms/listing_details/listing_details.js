import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listing_details.css";
import { Row, Col, Container} from "react-bootstrap";
import { RoomButtons} from "../../molecules";
import { HeartReact} from "../../atoms";

// image={image}
// userName={userName}
// ownerName={ownerName}
// accommName={accommName} 
// address={address} 
// location_place={location_place}
// rating={rating}
// min_capacity={min_capacity}
// max_capacity={max_capacity}
// max_price={max_price}
// description={description}
// amenities={amenities}

const ListingDetails = (props) => {
  const image = props.image ? props.image : "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const userName = props.userName ? props.userName : "student1";
  const ownerName = props.ownerName ? props.ownerName : "owner1";
  const accommName = props.accommName ? props.accommName : "Comfort Dorm";
  const address = props.address ? props.address : "📍 Los Banos, Laguna";
  const location_place = props.location_place ? props.location_place : "Inside Campus";
  const rating = props.rating ? props.rating : "3★";
  const min_capacity = props.min_capacity ? props.min_capacity : "1"
  const max_capacity = props.max_capacity ? props.max_capacity : "5";
  const max_price = props.max_price ? "₱" + props.max_price : "₱5000";
  const description = props.description ? props.description :
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const amenities = props.amenities? "✔️"+ props.amenities:"✔️ with wifi";
  const separator = "|";
  
  

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
              <h7 className="headings">{address} - {location_place}</h7>
              <div class="star-separator-capacity-div">
                <p className="star-separator-capacity-text">
                  {rating} {separator}{" "}
                </p>
                <p className="star-separator-capacity">{min_capacity} - {max_capacity} Capacity</p>
              </div>
              <h2 className="headings-price">{max_price}</h2>
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
