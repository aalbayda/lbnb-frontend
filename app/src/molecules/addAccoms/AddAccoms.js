import React, {useState} from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './addAccoms.css';
import {
    Container,
    Row,
    Col,
  } from "react-bootstrap";
function AddAccoms (props) {
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
                    <p className="large-bold">Add Acccomodation</p>
                </Col>
            </Row>
          <Row className="input-item">
            <Col xs={4}>
                <p className="small light-green">Name</p>
            </Col>
            <Col> <input className="tiny input-add-accoms" type="text"/></Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
                <p className="small light-green">Type</p></Col>
            <Col> <input className="tiny input-add-accoms" type="text"/></Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
                <p className="small light-green">Description</p></Col>
            <Col> <input className="tiny input-add-accoms" type="text"/></Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
                <p className="small light-green">Location</p></Col>
            <Col> <input className="tiny input-add-accoms" type="text"/></Col>
          </Row>
          <Row className="input-item">
            <Col xs={4}>
                <p className="small light-green">Amenities</p></Col>
            <Col> <input className="tiny input-add-accoms" type="text"/></Col>
          </Row>
          <Row className="input-item">
            <Button className="add-accoms-btn">ADD ACCOMODATION</Button>
          </Row>
        </Container>
      </Modal.Body>
    </Modal>
  );
}

export default AddAccoms;