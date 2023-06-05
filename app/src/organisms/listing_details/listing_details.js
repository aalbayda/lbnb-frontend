import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listing_details.css";
import { Button, Row, Col, Container } from "react-bootstrap";
import { HeartReact } from "../../atoms";
import { MdReportGmailerrorred } from "react-icons/md";
import { Rating } from "@mui/material";
import { ReportModal } from "../../molecules";
import axios from "axios";
import {
  isLoggedIn,
  getAuthUsername,
  getAuthType,
  getAuthName,
  getAuthMobile,
  getAuthEmail,
} from "../../auth";
import config from "../../config";
const url = config.apiUrl;

const ListingDetails = (props) => {
  // const image = props.image ? props.image : "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const userName = getAuthUsername();
  const ownerName = props.props.USER_FNAME + " " + props.props.USER_LNAME;
  const accommName = props.props.ACCOMMODATION_NAME;
  const address = props.props.ACCOMMODATION_ADDRESS;
  const location_place = props.props.ACCOMMODATION_LOCATION;
  const rating = props.props.rating;
  const description = props.props.ACCOMMODATION_DESCRIPTION;
  const amenities = props.props.ACCOMMODATION_AMENITIES;
  const separator = "|";
  const capacity_props = props.props.max_capacity ? props.props.max_capacity : 3;
  const price_props = props.props.max_price ? props.props.max_price : 1000;
  const [loading, setLoading] = useState(true);
  const [modalShow, setModalShow] = useState(false);
  const [rooms, setRooms] = useState([]);
  
  
  useEffect(() => {
    axios
      .post(url + "/accommodation/get-rooms", {
        accommodationName: accommName,
      })
      .then(function (response) {
        if (response.data.success) {
          setRooms(response.data.rooms);
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.props.accommName]);

  //atrributes that change when the room button is clicked
  const [max_price, setPrice] = useState(price_props);
  const [capacity, setCapacity] = useState(capacity_props);
  // const [image, setRoomPIc] = useState(props.image);

  const handleClick = (room) => {
    setPrice(room.ROOM_PRICE);
    setCapacity(String(room.ROOM_CAPACITY));

    //to fetch room image
    // axios
    //   .post(url + "/room/get-room-pic", {
    //     roomName: room.ROOM_NAME,
    //     accommodationName: accommName,
    //   })
    //   .then(function (response) {
    //     if (response.data.success) {
    //       setRoomPIc(response.data.imageUrl);
    //     }
    //     console.log(response);
    //   })
    //   .catch(function (error) {
    //     console.log(error);
    //   });
  };

  const roomItems = rooms.map((room) => {
    return (
      <button
        key={room.ROOM_ID}
        className="r-add-style"
        onClick={() => handleClick(room)}
      >
        {" "}
        {room.ROOM_NAME}
      </button>
    );
  });

  // const [modalShow, setModalShow] = useState(false);

  return (
    <Container>
      <Row className="listing-detials">
        <div className="room-img-div">
          <img
            className="room-img"
            src="https://www.ikea.com/ph/en/images/products/hauga-upholstered-bed-frame-lofallet-beige__1101403_pe866663_s5.jpg?f=s"
            alt="accommodation-img"
          ></img>
        </div>
        <Col>
          <div className="name-location-div">
            <div className="name-location-section">
              <h1 className="headings">{accommName}</h1>
              <h7 className="headings">
                {address} - {location_place}
              </h7>
              <div class="star-separator-capacity-div">
                <p className="star-separator-capacity-text">
                  <Rating
                    className="rating-medium"
                    defaultValue={rating}
                    precision={0.5}
                    readOnly={true}
                    sx={{
                      fontSize: "1rem",
                      color: "#1C3103",
                      mr: 1,
                    }}
                  />
                  {separator}{" "}
                </p>
                <p className="star-separator-capacity">{capacity} Capacity</p>
              </div>
              <h2 className="headings-price">₱{max_price}</h2>
              <p></p>
              <p>{description}</p>
              <p>{amenities}</p>
            </div>
            <div className="room-buttons">
              <div>{roomItems}</div>
            </div>
            {/* <ChatButton/> */}
          </div>
        </Col>
        <Col className="report-icon-col">
          {getAuthType() === "Student" ? (
            <Button
              className="report-button"
              onClick={() => setModalShow(true)}
            >
              <MdReportGmailerrorred className="icon report-icon" />
            </Button>
          ) : (
            <></>
          )}
        </Col>
        <Col className="heart-icon-col">
          <HeartReact
            accomName={accommName}
          />
        </Col>
      </Row>
      <ReportModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default ListingDetails;
