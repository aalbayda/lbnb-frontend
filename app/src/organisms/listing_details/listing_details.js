import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listing_details.css";
import { Row, Col, Container } from "react-bootstrap";
import { HeartReact } from "../../atoms";
import { Rating } from "@mui/material";
import axios from "axios";
const url = "https://mockup-backend-128.herokuapp.com";

const ListingDetails = (props) => {
  // const image = props.image ? props.image : "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  const userName = props.userName ? props.userName : "student1";
  const ownerName = props.ownerName ? props.ownerName : "owner1";
  const accommName = props.accommName ? props.accommName : "Comfort Dorm";
  const address = props.address ? props.address : "📍 Los Banos, Laguna";
  const location_place = props.location_place
    ? props.location_place
    : "Inside Campus";
  const rating = props.rating ? props.rating : 3;
  const description = props.description
    ? props.description
    : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  const amenities = props.amenities ? "✔️" + props.amenities : "✔️ with wifi";
  const isFavorite = props.isFavorite ? props.isFavorite : false;
  const separator = "|";

  const rooms_dummy = [
    {
      ROOM_ID: 4,
      ROOM_NAME: "Cozy Single Room",
      ROOM_PRICE: 2000,
      ROOM_CAPACITY: 1,
      ROOM_ISARCHIVED: 0,
      ACCOMODATION_ID: 4,
    },
    {
      ROOM_ID: 54,
      ROOM_NAME: "Standard Single Room",
      ROOM_PRICE: 1500,
      ROOM_CAPACITY: 2,
      ROOM_ISARCHIVED: 0,
      ACCOMODATION_ID: 4,
    },
  ];

  // // to fetch rooms
  const [rooms, setRooms] = useState(rooms_dummy);
  // const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .post(url + "/accommodation/get-rooms", {
        accommodationName: accommName,
      })
      .then(function (response) {
        console.log("Searching for", accommName);
        if (response.data.success) {
          setRooms(response.data.rooms);
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  //atrributes that change when the room button is clicked
  const min_max_capacity =
    String(props.min_capacity) + " - " + String(props.max_capacity);
  const [max_price, setPrice] = useState(props.max_price);
  const [capacity, setCapacity] = useState(min_max_capacity);
  const [image, setRoomPIc] = useState(props.image);

  const handleClick = (room) => {
    setPrice(room.ROOM_PRICE);
    setCapacity(String(room.ROOM_CAPACITY));

    //to fetch room image
    axios
      .post(url + "/room/get-room-pic", {
        roomName: room.ROOM_NAME,
        accommodationName: accommName,
      })
      .then(function (response) {
        if (response.data.success) {
          setRoomPIc(response.data.imageUrl); //TODO: post an axios error
        }
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
          </div>
        </Col>
        <Col className="heart-icon-col">
          <HeartReact
            userName={userName}
            accomName={accommName}
            isFavorite={isFavorite}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ListingDetails;
