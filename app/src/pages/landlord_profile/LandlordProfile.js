import React, {useState} from "react";
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
import {AiFillPhone, AiFillCalendar} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';
import { AddAccomsButton } from "../../atoms";
const units = [1, 2]; // api connect here

const LandlordProfile = () => {
  return (
    <div className="landlord-profile-container">
      <AddAccomsButton/>
      <NavBar/>
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
          <h1 className="mt-4 header2 bold-green">WILLIAM GATES</h1>
          <Rating
            className="rating-medium"
            defaultValue={3.5}
            precision={0.5}
            sx={{
              fontSize: "3rem",
              color: "#F0AF01"
            }}
          />
        </Col>

        <Col className="info-items">
            <Col className="info-item"> 
              <MdEmail className="icon"/>
              <p className="regular">billgates@hotmail.com</p>
            </Col>
            <Col className="info-item">
              <AiFillPhone className="icon"/>
              <p className="regular">09123456789</p>
            </Col>
            <Col className="info-item">
              <AiFillCalendar className="icon"/>
              <p className="regular">Member since July 2022</p>
            </Col>
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
            {units.map((unit) => (
              <div className="cardlist-flex mb-5">
                <CardListingAddRoom />
              </div>
            ))}
          </Row>
        </Col>
      </Col>
    </div>
  );
};

export default LandlordProfile;
