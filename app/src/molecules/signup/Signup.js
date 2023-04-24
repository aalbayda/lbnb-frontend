import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './signup.css';
import {Login} from '../../molecules';
import Form from 'react-bootstrap/Form';

function Signup (props) {
    const [modalShow, setModalShow] = React.useState(false);
  return (
    <Modal
      {...props}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <div className="signup-container">
          <p className="large-bold center">CREATE ACCOUNT</p>
          <div className="fullname-container">
          <input className="tiny" placeholder='First Name' type="text"/>
          <input className="tiny" placeholder='Surname' type="text"/>
          </div>
          <input className="tiny" placeholder='Email Address' type="text"/>
          <input className="tiny" placeholder='Password' type="password"/>
          <input className="tiny" placeholder='Retype Password' type="password"/>
        
        <Form>
        {['radio'].map((type) => (
            <div key={`inline-${type}`} className="mb-3">
            <Form.Check
                className="tiny"
                inline
                label="Personal Account"
                name="group1"
                type={type}
                id={`inline-${type}-1`}
            />
            <Form.Check
                className="tiny"
                inline
                label="Business Account"
                name="group1"
                type={type}
                id={`inline-${type}-2`}
            />
            </div>
        ))}
        </Form>
          <Button className="signup-btn">SIGN UP</Button>
          <Button  className="tiny italic signinButton" onClick={() => setModalShow(true)}>Already have an account?</Button>

        </div>
        <Login
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
      </Modal.Body>
    </Modal>
  );
}

export default Signup;