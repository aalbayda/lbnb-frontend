import { React, useState, useEffect } from "react";
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
import {
  isLoggedIn,
  getAuthUsername,
  getAuthType,
  getAuthName,
  getAuthMobile,
  getAuthEmail,
} from "../../auth";
import { CardListing, NavBar } from "../../organisms";
import config from "../../config";
const url = config.apiUrl;

const UserProfile = () => {
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    axios
      .post(url + "/user/get-all-favorites", { username: getAuthUsername() })
      .then((res) => setFavorites(res.data.favorites))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <NavBar></NavBar>

      {isLoggedIn() && getAuthType() === "Student" ? (
        <Container>
          {/* <Row className="justify-content-md-center">
            <Image
              src="https://www.ucb.ac.uk/media/ozzc1d44/student-engagement.jpg?anchor=center&mode=crop&heightratio=1&width=1200&rnd=132475825546930000"
              roundedCircle
              fluid
              style={{ width: 400 }}
            />
          </Row> */}
          <Col className="text-center">
            <h1 className="mt-4 header1">{getAuthName()}</h1>
          </Col>

          <Col className="text-center">
            <h1 className="small">
              📞 {getAuthMobile()} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 📬{" "}
              {getAuthEmail()}
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
