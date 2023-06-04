import { React, useState, useEffect } from "react";
import axios from "axios";
import "./userProfile.css";
import "../../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Carousel, Button } from "react-bootstrap";
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
  const [editing, setEditing] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const [dp, setDP] = useState("");
  const [newname, setNewname] = useState("");
  const [newnumber, setNewnumber] = useState("");
  const [newemail, setNewemail] = useState("");
  const [newpassword, setNewpassword] = useState("");

  const handleClick = () => {
    if (editing && !newpassword) {
      window.alert(
        "Invalid password! If you want the same password, enter your current password."
      );
      return;
    }

    if (editing) {
      axios
        .post(url + "/edit-user", {
          email: getAuthEmail(),
          newUsername: newemail ? newemail : getAuthEmail(),
          newFirstName: newname
            ? newname.split(" ")[0]
            : getAuthName().split(" ")[0],
          newLastName: newname
            ? newname.split(" ")[1]
            : getAuthName().split(" ")[1],
          newContactNum: newnumber ? newnumber : getAuthMobile(),
          newPassword: newpassword,
        })
        .then((res) => {
          console.log(res.data);
          console.log("Success edit");
          document.cookie =
            "authCookie=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          window.location.href = "/";
        })
        .catch((err) => console.error(err));
    }

    setEditing(!editing);
  };

  useEffect(() => {
    axios
      .post(url + "/user/get-all-favorites", { username: getAuthUsername() })
      .then((res) => setFavorites(res.data.favorites))
      .catch((err) => console.error(err));

    axios
      .post(url + "/user/get-user-pic", { username: getAuthUsername() })
      .then((res) => setDP(res.data.imageUrl))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <NavBar></NavBar>

      {isLoggedIn() && getAuthType() === "Student" ? (
        <Container>
          <Row className="justify-content-md-center">
            <Image
              src={
                dp
                  ? dp
                  : "https://www.ucb.ac.uk/media/ozzc1d44/student-engagement.jpg?anchor=center&mode=crop&heightratio=1&width=1200&rnd=132475825546930000"
              }
              roundedCircle
              fluid
              style={{ width: 400 }}
            />
          </Row>
          <Col className="text-center mt-5">
            {editing ? "🪪" : ""}{" "}
            {editing ? (
              <input
                placeholder="New Name"
                onChange={(e) => setNewname(e.target.value)}
              ></input>
            ) : (
              <h1 className="header1">{newname ? newname : getAuthName()}</h1>
            )}
          </Col>

          <Col className="text-center">
            <h1 className="small">
              📞{" "}
              {editing ? (
                <input
                  placeholder="New Number"
                  onChange={(e) => setNewnumber(e.target.value)}
                ></input>
              ) : newnumber ? (
                newnumber
              ) : (
                getAuthMobile()
              )}
            </h1>
            <h1 className="small">
              📬{" "}
              {editing ? (
                <input
                  placeholder="New Email"
                  onChange={(e) => setNewemail(e.target.value)}
                ></input>
              ) : newemail ? (
                newemail
              ) : (
                getAuthEmail()
              )}
            </h1>
            {editing ? "🔑" : <></>}

            {editing ? (
              <input
                placeholder="New Password"
                type="password"
                onChange={(e) => setNewpassword(e.target.value)}
              ></input>
            ) : (
              <></>
            )}
          </Col>

          <Col className="text-center mt-5">
            <Button onClick={handleClick} className="small-bold carousel-btn">
              {editing ? "Save" : "Edit Details"}
            </Button>
          </Col>

          <Col>
            <h1 className="mt-5 text-center header2">🌟 Favorites 🌟</h1>
            <Carousel variant="dark" className="mt-4 mb-5">
              {favorites.map((f, index) => (
                <Carousel.Item>
                  <div className="ml-4">
                    <CardListing
                      key={index}
                      name={f.ACCOMMODATION_NAME}
                      location={f.ACCOMMODATION_LOCATION}
                      description={f.ACCOMMODATION_DESCRIPTION}
                      amenities={f.ACCOMMODATION_AMENITIES}
                      address={f.ACCOMMODATION_ADDRESS}
                      max_price={f.max_price}
                      owner={f.USER_FNAME + " " + f.USER_LNAME}
                      rating={f.rating}
                    />
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
