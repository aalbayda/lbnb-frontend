import { React, useState, useEffect } from "react";
import axios from "axios";
import cookie from "cookie";
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
import { ChatButton } from "../../atoms";
import { useLocation } from "react-router-dom";

const url = "https://elbnb-server.herukoapp.com";

const LandlordProfile = () => {
  const location = useLocation();
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [rating, setRating] = useState(0);
  const [owned, setOwned] = useState([]);
  const name = location.state.USER_FNAME + " " + location.state.USER_LNAME;
  const number = location.state.USER_CONTACTNUM;
  const email = location.state.USER_EMAIL;
  const username = location.state.USER_USERNAME;
  const [picture, setPicture] = useState("");
  let curruname = cookie.parse(document.cookie)["authToken"].split("|")[2];
  let ownername = location.state.USER_USERNAME;

  console.log(curruname+ownername)

  useEffect(() => {
    // Check if authToken exists in cookie
    if (cookie.parse(document.cookie)["authToken"]) {
      console.log("Log in detected!");
      setLoggedIn(true);
      axios
        .post(url + "/owner/get-average-rating", {
          username: username,
        })
        .then((response) => {
          // console.log(response.data);
          setRating(response.data.averageRating);
        })
        .catch((error) => {
          console.error(error);
        });

      axios
        .post(url + "/accommodation/get-user-accommodations", {
          ownerName: username,
        })
        .then((response) => {
          console.log(response.data);
          setOwned(response.data.result);
        })
        .catch((error) => {
          console.error(error);
        });

      // axios
      //   .post(url + "/user/get-user-pic", {
      //     username: email,
      //   })
      //   .then((response) => {
      //     console.log(response.data);
      //     setPicture(response.data.imageUrl);
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
    } else {
      console.log("Log in not detected");
      setLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <NavBar />
      {isLoggedIn ? (
        <div className="landlord-profile-container">
          {cookie.parse(document.cookie)["authToken"].split("|")[2] ===
          location.state.USER_USERNAME ? (
            <AddAccomsButton />
          ) : (
            <></>
          )}
          <Col className="body-container">
            <Row className="justify-content-md-center">
              {/* <Image
            className="profileImage"
            src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
            roundedCircle
            fluid
          /> */}
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
              <ChatButton/>
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
          <Row>Unauthorized route. {(window.location.href = "/")}</Row>
        </Container>
      )}
    </div>
  );
};

export default LandlordProfile;
