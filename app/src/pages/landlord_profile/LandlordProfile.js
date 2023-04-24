import React from "react";
import "./LandlordProfile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Image,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { CardListing, NavBar } from "../../organisms";
import { Rating } from "@mui/material";

const units = [1, 2, 3, 4, 5]; // api connect here

const LandlordProfile = () => {
  return (
    <Container>
      <NavBar></NavBar>

      <Row className="justify-content-md-center">
        <Image
          src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
          roundedCircle
          fluid
          style={{ width: 400 }}
        />
      </Row>
      <Col className="text-center">
        <h1 className="mt-4 header1">WILLIAM GATES</h1>
        <Rating
          className="rating-large"
          defaultValue={3.5}
          precision={0.5}
          sx={{
            fontSize: "4rem",
          }}
        />
      </Col>

      <Col className="text-center">
        <h1 className="small">
          📞 09123456 &nbsp;&nbsp;&nbsp; 📬 billgates@hotmail.com
          &nbsp;&nbsp;&nbsp;📅 Member since July 2022
        </h1>
      </Col>

      <Col>
        <Row>
          <h1 className="mt-5 text-center header2">Units Owned</h1>
        </Row>
        <Row className="text-center mt-4">
          <DropdownButton
            variant="success"
            id="dropdown-basic-button"
            title="Filter 🔍"
          >
            <Dropdown.Item href="#/action-1">Location</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Price (ascending)</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Type</Dropdown.Item>
          </DropdownButton>
        </Row>
        <Row className="justify-content-md-center mt-4">
          {units.map((unit) => (
            <div className="cardlist-flex mb-5">
              <CardListing />
            </div>
          ))}
        </Row>
      </Col>
    </Container>
  );
};

export default LandlordProfile;
