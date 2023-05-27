import React, {useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listing_details.css";
import { RiHeart3Fill } from "react-icons/ri";
import { MdReportGmailerrorred } from "react-icons/md";
import { Row, Col, Container, Button } from "react-bootstrap";
import { RoomButtons, ReportModal
} from "../../molecules";

const ListingDetails = () => {
  const image =
    "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const name = "Casa fe Felicidad";
  const location = "Los Banos, Laguna";
  const price = "₱ 8,000";
  const stars = "★★★★☆";
  const separator = "|";
  const rating = "1.5K";
  const capacity = "300";

  const [modalShow, setModalShow] = useState(false);

  return (
    <Container>
      <Row className="listing-detials">
        <div className="room-img-div">
          <img className="room-img" src={image} alt="accommodation-img"></img>
        </div>
        <Col>
          <div className="name-location-div">
            <div className="name-location-section">
              <div className="name-icon-list">
                <h1 className="headings">{name}</h1>
                <div className="listing-details-icons">
                  <Button 
                    className="report-button"
                    onClick={() => setModalShow(true)}
                  >
                    <MdReportGmailerrorred className="icon report-icon"/>
                  </Button>
                  <Button variant="outline-light">
                    {" "}
                    <RiHeart3Fill className="heart-icon" />
                    {" "}
                  </Button>
                </div>
              </div>
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
              <RoomButtons/>
            </div>
          </div>
        </Col>
        <Row className="heart-icon-col">
        </Row>
      </Row>
      <ReportModal show={modalShow} onHide={() => setModalShow(false)}/>
    </Container>
  );
};

export default ListingDetails;
