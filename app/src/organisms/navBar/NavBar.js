import React, { useState } from "react";
import "./navBar.css";
// import { Button } from "../../atoms";
import { Modal, Form, Button } from "react-bootstrap";
const NavBar = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="navbar-left">
          <p class="small">
            <a
              href="/"
              style={{
                textDecoration: "none",
                fontSize: "32px",
              }}
            >
              🌱
            </a>
          </p>
        </div>
        <div className="navbar-right">
          <Button onClick={handleShow} variant="success" bsClass="button-18">
            Login
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formName" className="m-3">
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail" className="m-3">
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword" className="m-3">
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword" className="m-3">
                  <Form.Control
                    type="password"
                    placeholder="Confirm password"
                  />
                </Form.Group>

                <Form.Group className="text-center mb-3">
                  <Button
                    variant="success"
                    type="submit"
                    style={{ width: "95%" }}
                    onClick={() => (window.location.href += "userprofile")}
                  >
                    Register
                  </Button>
                </Form.Group>
              </Form>
            </Modal.Body>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
