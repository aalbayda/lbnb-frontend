import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './addRooms.css';
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
function AddRooms (props) {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Container className="add-accoms-container">
            <Row className="input-item">
                <Col>
                    <p className="large-bold">Add Rooms</p>
                </Col>
            </Row>
          <Row className="input-item">
            <Col xs={4}>
                <p className="small light-green">Room Name</p>
            </Col>
            <Col> <input className="tiny input-add-accoms" type="text"/></Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
                <p className="small light-green">Capacity</p></Col>
            <Col> <input className="tiny input-add-accoms" type="Number"/></Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
                <p className="small light-green">Price</p></Col>
            <Col> <input className="tiny input-add-accoms" type="Number"/></Col>
          </Row>
          <Row className="input-item">
            <Button className="add-accoms-btn">ADD ROOMS</Button>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default AddRooms;