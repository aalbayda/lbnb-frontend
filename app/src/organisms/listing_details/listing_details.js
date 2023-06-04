import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./listing_details.css";
import cookie from "cookie";
import { RiHeart3Fill } from "react-icons/ri";
import { MdReportGmailerrorred } from "react-icons/md";
import { Row, Col, Container, Button } from "react-bootstrap";
import { RoomButtons, ReportModal } from "../../molecules";
import { Rating } from "@mui/material";
import { ChatButton } from "../../atoms";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import io from "socket.io-client";
import Chat from "../../pages/chatPage";
const url = 'https://mockup-backend-128.herokuapp.com';
const socket = io.connect('http://localhost:3000');

const ListingDetails = ({ props }) => {
  const image =
    "https://www.drivenbydecor.com/wp-content/uploads/2019/08/dorm-room-before.jpg";
  // const description =
  //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus non tempor mauris. In hac habitasse platea dictumst. Phasellus consectetur posuere mattis. Nullam.";
  // const name = "Casa fe Felicidad";
  // const location = "Los Banos, Laguna";
  const price = "₱ 8,000";
  const stars = "★★★★☆";
  const separator = "|";
  const rating = "1.5K";
  const capacity = "300";
  let curruname = cookie.parse(document.cookie)["authToken"].split("|")[2]
  let ownername = props.USER_FNAME;

  console.log(curruname)

  // const {
  //   ACCOMMODATION_ADDRESS,
  //   ACCOMMODATION_AMENITIES,
  //   ACCOMMODATION_DESCRIPTION,
  //   ACCOMMODATION_ID,
  //   ACCOMMODATION_LOCATION,
  //   ACCOMMODATION_NAME,
  //   ACCOMMODATION_OWNER_ID,
  //   ACCOMMODATION_TYPE,
  //   AVERAGE_RATING,
  // } = props;
  const [modalShow, setModalShow] = useState(false);
  const [username, setUsername] = useState('');
  const [room, setRoom] = useState('');

  return (
    <Container>
      {console.log("--- inside")}
      {console.log(props)}
      {console.log(props.ACCOMMODATION_NAME)} 
      {console.log(props.USER_FNAME)}
      <Row className="listing-detials">
        <div className="room-img-div">
          <img className="room-img" src={image} alt="accommodation-img"></img>
        </div>
        <Col>
          <div className="name-location-div">
            <div className="name-location-section">
              <div className="name-icon-list">
                <h1 className="headings">{props.ACCOMMODATION_NAME}</h1>
                <div className="listing-details-icons">
                  {cookie.parse(document.cookie)["authToken"] ? (
                    <Button
                      className="report-button"
                      onClick={() => setModalShow(true)}
                    >
                      <MdReportGmailerrorred className="icon report-icon" />
                    </Button>
                  ) : (
                    <></>
                  )}
                  <Button variant="outline-light">
                    {" "}
                    <RiHeart3Fill className="heart-icon" />{" "}
                  </Button>
                </div>
              </div>
              <h7 className="headings">{props.ACCOMMODATION_LOCATIONS}</h7>
              <div class="star-separator-capacity-div">
                <Rating
                  name="read-only"
                  readOnly
                  value={props.AVERAGE_RATING}
                />
                {/* <p className="star-separator-capacity-text">
                  {stars} {separator}{" "}
                </p>
                <p className="star-separator-capacity">{rating} </p>
                <p className="star-separator-capacity-text">
                  {" "}
                  Rating {separator}{" "}
                </p> */}
                {/* <p className="star-separator-capacity">{props.ACCOMODATION_CAPACITY}</p>
                <p className="star-separator-capacity-text"> Capacity </p> */}
              </div>
              <h2 className="headings-price">{price}</h2>
              <p>{props.ACCOMMODATION_DESCRIPTION}</p>
            </div>
            <div className="room-buttons">
              <RoomButtons />
            </div> 
            <Router>
              <div className='ChatApp'>
                <Routes>
                  <Route
                    path= {url + "/" + curruname+ownername}
                    element={
                      <Chat
                        username={username}
                        setUsername={setUsername}
                        room={room}
                        setRoom={setRoom}
                        socket={socket}
                      />
                    }
                  />
                  {/* Add this */}
                  <Route
                    path='/chat'
                    element={<Chat username={username} room={room} socket={socket} />}
                  />
                </Routes>
              </div>
            </Router>
            <Chat username={curruname} room={curruname+ownername} socket={socket}/>
          </div>
        </Col>
        <Row className="heart-icon-col"></Row>
      </Row>
      <ReportModal
        props={props}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </Container>
  );
};

export default ListingDetails;
