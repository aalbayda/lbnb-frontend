import { React, useState, useEffect } from "react";
import cookie from "cookie";
import axios from "axios";
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
import { FavoriteBorderOutlined } from "@mui/icons-material";

const UserProfile = () => {
  const [favorites, setFavorites] = useState([
    {
      ACCOMMODATION_ID: 14,
      ACCOMMODATION_NAME: "Sunset Hotel",
      ACCOMMODATION_TYPE: "Hotel",
      ACCOMMODATION_ADDRESS: "456 XYZ Avenue",
      ACCOMMODATION_LOCATION: "Within Campus",
      ACCOMMODATION_DESCRIPTION:
        "A luxurious hotel with stunning sunset views and excellent service.",
      ACCOMMODATION_AMENITIES: "Swimming pool, Fitness center, Restaurant",
      ACCOMMODATION_ISARCHIVED: 0,
      ACCOMMODATION_OWNER_ID: 114,
    },
  ]); // api connect here
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

    axios
      .post("https://mockup-backend-128.herokuapp.com/user/get-all-favorites", {
        username: cookie.parse(document.cookie)["authToken"].split("|")[2],
      })
      .then((res) => {
        console.log(res.data);
        // setFavorites(res.data.favorites);
      })
      .catch((err) => {
        console.log(
          `Could not find favorites of ${
            cookie.parse(document.cookie)["authToken"].split("|")[2]
          }`
        );
        console.log(err);
      });
  }, []);

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
            <h1 className="mt-4 header1">
              {cookie.parse(document.cookie)["authToken"].split("|")[3]}
            </h1>
          </Col>
          {/* 
          <Col className="text-center">
            <h1 className="small">
              📞 {cookie.parse(document.cookie)["authToken"].split("|")[2]} &nbsp;&nbsp;&nbsp; 📬 {cookie.parse(document.cookie)["authToken"].split("|")[2]+"@example.com"}
              &nbsp;&nbsp;&nbsp;
            </h1>
          </Col> */}

          <Col>
            <h1 className="mt-5 text-center header2">🌟 Favorites 🌟</h1>
            <Carousel variant="dark" className="mt-4 mb-5">
              {favorites.map((f) => (
                <Carousel.Item>
                  <div className="ml-4">
                    <CardListing listing={f} />
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
          <Row className="justify-content-md-center">Unauthorized route.</Row>
        </Container>
      )}
    </div>
  );
};

export default UserProfile;
