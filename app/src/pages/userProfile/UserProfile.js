import { React, useState, useEffect } from "react";
import cookie from "cookie";
import "./userProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Image,
  Dropdown,
  DropdownButton,
  Carousel,
} from "react-bootstrap";
import { CardListing, NavBar } from "../../organisms";
const favorites = [1, 2, 3, 4, 5]; // api connect here

const UserProfile = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    // Check if authToken exists in cookie
    if (cookie.parse(document.cookie)["authToken"]) {
      console.log("Log in detected!");
      setLoggedIn(true);
    } else {
      console.log("Log in not detected");
      setLoggedIn(false);
    }
  });

  return (
    <div>
      <NavBar></NavBar>

      {isLoggedIn ? (
        <Container>
          <Row className="justify-content-md-center">
            <Image
              src="https://www.ucb.ac.uk/media/ozzc1d44/student-engagement.jpg?anchor=center&mode=crop&heightratio=1&width=1200&rnd=132475825546930000"
              roundedCircle
              fluid
              style={{ width: 400 }}
            />
          </Row>
          <Col className="text-center">
            <h1 className="mt-4 header1">BRUNO SMITH</h1>
          </Col>

          <Col className="text-center">
            <h1 className="small">
              📞 09123456 &nbsp;&nbsp;&nbsp; 📬 brunosmith@gmail.com.com
              &nbsp;&nbsp;&nbsp;📅 Member since July 2022
            </h1>
          </Col>

          <Col>
            <h1 className="mt-5 text-center header2">🌟 Favorites 🌟</h1>
            <Carousel variant="dark" className="mt-4 mb-5">
              {favorites.map((f) => (
                <Carousel.Item>
                  <div className="ml-4">
                    <CardListing />
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Container>
      ) : (
        <Container>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <Row>&nbsp;</Row>
          <Row className="justify-content-md-center">
            Unauthorized route. {(window.location.href = "/")}
          </Row>
        </Container>
      )}
    </div>
  );
};

export default UserProfile;
