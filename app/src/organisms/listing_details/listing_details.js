import { React, useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listing_details.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Button, Row, Col, Container } from "react-bootstrap";
import { RiHeart3Fill, RiHeart3Line } from "react-icons/ri";
import { MdReportGmailerrorred } from "react-icons/md";
import { Rating } from "@mui/material";
import { ReportModal } from "../../molecules";
import axios from "axios";
import io from 'socket.io-client';
import ChatButton from "../../atoms/chatButton/chatButton";

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
  const socket = props.socket;
  const userName = getAuthUsername();
  const ownerName = props.props.USER_FNAME + " " + props.props.USER_LNAME;
  const accommName = props.props.ACCOMMODATION_NAME;
  const address = props.props.ACCOMMODATION_ADDRESS;
  const location_place = props.props.ACCOMMODATION_LOCATION;
  const rating = props.props.rating;
  const description = props.props.ACCOMMODATION_DESCRIPTION;
  const amenities = props.props.ACCOMMODATION_AMENITIES;
  const separator = "|";
  const [modalShow, setModalShow] = useState(false);
  const [rooms, setRooms] = useState([]);
  useEffect(() => {
    axios
      .post(url + "/accommodation/get-rooms", {
        accommodationName: props.props.accommName,
      })
      .then(function (response) {
        // console.log("Searching for", accommName);
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
  const [max_price, setPrice] = useState(props.props.max_price);
  const [capacity, setCapacity] = useState(props.props.max_capacity);
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
            {<ChatButton username={userName} room={accommName} socket={socket}/>}
            <div className="room-buttons">
              <div>{roomItems}</div>
            </div>
         
          </div>
        </Col>
        <Col className="heart-icon-col">
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
        {/* <Col className="heart-icon-col">
          <div style={{ fontSize: "50px" }}>
            <RiHeart3Line />
          </div>
        </Col> */}
      </Row>
      <ReportModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

export default ListingDetails;
