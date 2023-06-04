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
  const [rating, setRating] = useState(4);
  const [owned, setOwned] = useState([]);
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState(location.state.name);
  const [picture, setPicture] = useState("");
  const [id, setId] = useState("");

  useEffect(() => {
    console.log("Searching for ", location.state.username);
    axios
      .post(url + "/filter-users", {
        name: location.state.username,
        isStudent: false,
      })
      .then((res) => {
        console.log("Found owner", location.state.username);
        console.log(res.data);
        setNumber(res.data.users[0].USER_CONTACTNUM);
        setEmail(res.data.users[0].USER_EMAIL);
      })
      .catch((err) => console.error(err));

    // get accoms here
    axios
      .post(url + "/accommodation/get-user-accommodations", {
        ownerName: location.state.username,
      })
      .then((res) => {
        if (res.data.result) setOwned(res.data.result);
      })
      .catch((err) => console.error(err));

    axios
      .post(url + "/owner/get-average-rating", {
        username: location.state.username,
      })
      .then((res) => {
        if (res.data.success) setRating(res.data.averageRating);
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
                <p className="regular">{email}</p>
              </Col>
              <Col className="info-item">
                <AiFillPhone className="icon" />
                <p className="regular">{number}</p>
              </Col>
            </Col>

            <Col>
              <Row>
                <h1 className="mt-5 text-center header2">Units Owned</h1>
              </Row>
              <Row className="justify-content-md-center mt-4">
                {owned.map((unit, index) => (
                  <div className="cardlist-flex mb-5">
                    <CardListing
                      key={index}
                      name={unit.ACCOMMODATION_NAME}
                      location={unit.ACCOMMODATION_LOCATION}
                      description={unit.ACCOMMODATION_DESCRIPTION}
                      amenities={unit.ACCOMMODATION_AMENITIES}
                      address={unit.ACCOMMODATION_ADDRESS}
                      max_price={unit.max_price}
                      rating={unit.rating}
                    />
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
