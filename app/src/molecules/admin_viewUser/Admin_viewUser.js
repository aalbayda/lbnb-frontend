import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './admin_viewUser.css';
import {
    Image,
  } from "react-bootstrap";

function Admin_viewUser (props) {
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton/>
      <Modal.Body>
        <div className="adminviewuser-container">
                <div className="adminviewuser-top">
                    <div>
                        
                    </div>
                    <Image
                    className="adminviewuser-profileImage"
                    src="https://pbs.twimg.com/profile_images/1564398871996174336/M-hffw5a_400x400.jpg"
                    roundedCircle
                    fluid
                    />
                </div>
                <div className="adminviewuser-items">
                    <div className="adminviewuser-item">
                        <p className="regular-bold">Name:</p>
                        <p className="regular">Mark Lewis</p>
                    </div>
                    <div className="adminviewuser-item">
                        <p className="regular-bold">Email:</p>
                        <p className="regular">mldamalerio@gmail.com</p>
                    </div>
                    <div className="adminviewuser-item">
                        <p className="regular-bold">Password:</p>
                        <p className="regular">************</p>
                    </div>
                </div>
              <Button className="adminedituser">
                  Edit
              </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Admin_viewUser;