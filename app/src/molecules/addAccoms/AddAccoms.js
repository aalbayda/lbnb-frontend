import React, { useState } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./addAccoms.css";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { getAuthId } from "../../auth";
import config from "../../config";
const url = config.apiUrl;

function AddAccoms(props) {
  const [newLocation, setNewLocation] = useState("Within Campus");
  const [newName, setNewName] = useState("");
  const [newType, setNewType] = useState("Dorm");
  const [newAddress, setNewAddress] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newAmenities, setNewAmenities] = useState("");

  const handleAdd = () => {
    console.log("Adding...");
    if (!newName || !newType || !newAddress | !newDescription) {
      window.alert("Missing fields!");
      return;
    }

    const newAccom = {
      name: newName,
      type: newType,
      address: newAddress,
      location: newLocation,
      description: newDescription,
      amenities: newAmenities,
      userId: getAuthId(),
    };
    console.log("Passing in", newAccom);
    axios
      .post(url + "/add-accommodation", newAccom)
      .then((res) => {
        console.log("Successfully added data");
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.error(err));
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter" centered>
      <Modal.Body>
        <Container className="add-accoms-container">
          <Row className="input-item">
            <Col>
              <p className="large-bold">Add Acccomodation</p>
            </Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
              <p className="small light-green">Name</p>
            </Col>
            <Col>
              {" "}
              <input
                className="tiny input-add-accoms"
                type="text"
                onChange={(e) => setNewName(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
              <p className="small light-green">Type</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Check
                className="custom-radio tiny"
                inline
                label="Dorm"
                name="group1"
                type="radio"
                checked={newType === "Dorm"}
                id={`inline-radio-1`}
                onClick={() => setNewType("Dorm")}
              />
            </Col>
            <Col>
              <Form.Check
                className="custom-radio tiny"
                inline
                label="Apartment"
                name="group1"
                type="radio"
                checked={newType === "Apartment"}
                onClick={() => {
                  setNewType("Apartment");
                }}
                id={`inline-radio-2`}
              />
            </Col>
            <Col>
              <Form.Check
                className="custom-radio tiny"
                inline
                label="Hotel"
                name="group1"
                type="radio"
                checked={newType === "Hotel"}
                onClick={() => {
                  setNewType("Hotel");
                }}
                id={`inline-radio-3`}
              />
            </Col>
            <Col>
              <Form.Check
                className="custom-radio tiny"
                inline
                label="Bedspace"
                name="group1"
                type="radio"
                checked={newType === "Bedspace"}
                onClick={() => {
                  setNewType("Bedspace");
                }}
                id={`inline-radio-4`}
              />
            </Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
              <p className="small light-green">Address</p>
            </Col>
            <Col>
              {" "}
              <input
                className="tiny input-add-accoms"
                type="text"
                onChange={(e) => setNewAddress(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
              <p className="small light-green">Location</p>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Check
                className="custom-radio tiny"
                inline
                label="Inside Campus"
                name="group2"
                type="radio"
                checked={newLocation === "Within Campus"}
                id={`inline-radio-5`}
                onClick={() => setNewLocation("Within Campus")}
              />
            </Col>
            <Col>
              <Form.Check
                className="custom-radio tiny"
                inline
                label="Outside Campus"
                name="group2"
                type="radio"
                checked={newLocation === "Outside Campus"}
                onClick={() => {
                  setNewLocation("Outside Campus");
                }}
                id={`inline-radio-6`}
              />
            </Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
              <p className="small light-green">Description</p>
            </Col>
            <Col>
              {" "}
              <input
                className="tiny input-add-accoms"
                type="text"
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
              <p className="small light-green">Amenities</p>
            </Col>
            <Col>
              {" "}
              <input
                className="tiny input-add-accoms"
                type="text"
                onChange={(e) => setNewAmenities(e.target.value)}
              />
            </Col>
          </Row>
          <Row className="input-item">
            <Button onClick={handleAdd} className="add-accoms-btn">
              ADD ACCOMODATION
            </Button>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default AddAccoms;
