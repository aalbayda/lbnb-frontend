import { React, useState, useEffect } from "react";
import axios from "axios";
import "./LandlordProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Image,
  // Dropdown,
  // DropdownButton,
} from "react-bootstrap";
import { CardListingAddRoom, NavBar } from "../../organisms";
import { Rating } from "@mui/material";
import { AiFillPhone, AiFillCalendar } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { AddAccomsButton } from "../../atoms";
import { CardListing } from "../../organisms";
import { useLocation } from "react-router-dom";
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

const LandlordProfile = () => {
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [rating, setRating] = useState(0);
  const [owned, setOwned] = useState([]);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState(location.state.name);
  const [picture, setPicture] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    axios
      .post(url + "/filter-users", {
        name: location.state.username,
        isStudent: false,
      })
      .then((res) => {
        setNumber(res.data.USER_CONTACTNUM);
        setEmail(res.data.USER_EMAIL);
        setId(res.data.USER_ID); // might need this
      })
      .catch((err) => console.error(err));

    // get accoms here
    axios
      .post(url + "/get-user-accommodations", {
        ownerName: location.state.username,
      })
      .then((res) => {
        setOwned(res.data.result);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <NavBar />
      {isLoggedIn() ? (
        <div className="landlord-profile-container">
          {location.state.username === getAuthUsername() ? (
            <AddAccomsButton />
          ) : (
            <></>
          )}
          <Col className="body-container">
            <Row className="justify-content-md-center">
              <Image
                className="profileImage"
                src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                roundedCircle
                fluid
              />
            </Row>
            <Col className="text-center">
              <h1 className="mt-4 header2 bold-green">
                {name}
                {/* {cookie.parse(document.cookie)["authToken"].split("|")[3]} */}
              </h1>
              <Rating
                className="rating-medium"
                name="read-only"
                value={rating}
                // precision={0.5}
                sx={{
                  fontSize: "3rem",
                  color: "#F0AF01",
                }}
              />
            </Col>

            <Col className="info-items">
              <Col className="info-item">
                <MdEmail className="icon" />
                <p className="regular">
                  {email}
                  {/* {cookie.parse(document.cookie)["authToken"].split("|")[2]} */}
                </p>
              </Col>
              <Col className="info-item">
                <AiFillPhone className="icon" />
                <p className="regular">{number}</p>
              </Col>
              {/* <Col className="info-item">
                <AiFillCalendar className="icon" />
                <p className="regular">Member since July 2022</p>
              </Col> */}
            </Col>

            <Col>
              <Row>
                <h1 className="mt-5 text-center header2">Units Owned</h1>
              </Row>
              {/* <Row className="text-center mt-4">
            <DropdownButton
              variant="success"
              id="dropdown-basic-button"
              title="Filter 🔍"
            >
              <Dropdown.Item href="#/action-1">Location</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Price (ascending)</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Type</Dropdown.Item>
            </DropdownButton>
          </Row> */}
              <Row className="justify-content-md-center mt-4">
                {owned.map((unit) => (
                  <div className="cardlist-flex mb-5">
                    <CardListing listing={unit} />
                  </div>
                ))}
              </Row>
            </Col>
          </Col>
        </div>
      ) : (
        <Container>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <Row>Unauthorized route.</Row>
        </Container>
      )}
    </div>
  );
};

export default LandlordProfile;
